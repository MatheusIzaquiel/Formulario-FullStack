"use client";
//Bibliotecas
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
//Funções React e next
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
//Componentes
import { signUpSchema, SignUpSchema } from "./signUpSchema";
import InputComponent from "../components/myComponents/inputComponent";
import InputPassword from "../components/myComponents/inputPassword";
import { api } from "@/services/axios";
import { Loader2 } from "lucide-react";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  }); //Modelo de atualização de estado do react-hook-form

  const router = useRouter(); //Função do react que trabalha redirecionamento de rotas e páginas
  const [serverError, setServerError] = useState<string | null>(null);

  //Função onSubmit do react-rook-form que pega os dados inseridos no formulário
  const onSubmit = async (data: SignUpSchema) => {
    setServerError(null);
    try {
      //Usamos o axios para enviar os dados para a rota da api
      const response = await api.post("auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);

      toast.success("Cadastro realizado!", {
        description: "Bem-vindo! Você já está logado.",
        duration: 3000,
        onAutoClose: () => router.push("/profile"),
        onDismiss: () => router.push("/profile"), // redireciona mesmo se fechar manualmente
      });
    } catch (error: any) {
      let message = "Erro ao cadastrar. Tente novamente.";

      if (error.response?.data?.message) {
        if (error.response.data.message.includes("Email já cadastrado")) {
          message = "Esse email já está em uso.";
        } else if (
          error.response.data.message.includes("Senhas não coincidem")
        ) {
          message = "As senhas não coincidem.";
        } else {
          message = error.response.data.message;
        }
      }

      toast.error("Falha no cadastro", {
        description: message,
      });

      console.error("Erro no cadastro:", error);
    }
  };

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-700 to-gray-100 dark:from-gray-950 dark:to-black px-4">
        <Card className="w-full max-w-lg shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-3xl">Cadastre-se</CardTitle>
            <CardDescription>
              Informe seus dados para se cadastrar!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <InputComponent
                name="name"
                label="Nome"
                register={register("name")}
                error={errors.name}
                placeholder="Seu nome Completo"
              />
              <InputComponent
                name="email"
                label="Email"
                register={register("email")}
                error={errors.email}
                placeholder="Seu email"
              />
              <InputPassword
                label="Senha"
                name="password"
                register={register("password")}
                error={errors.password}
                placeholder="Mínimo 8 caracteres"
              />
              <InputPassword
                label="Confirme sua senha"
                name="confirmPassword"
                register={register("confirmPassword")}
                error={errors.confirmPassword}
                placeholder="Mínimo 8 caracteres"
              />

              <Button
                type="submit"
                className="w-full h-11 mt-2 cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Cadastrando...
                  </span>
                ) : (
                  "Cadastrar"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <footer className="flex items-center justify-center w-full space-x-2">
              <CardDescription>Já tem uma conta?</CardDescription>
              <Link
                href={"../login"}
                className="text-sm text-gray-800 font-bold hover:text-blue-600"
              >
                Faça login
              </Link>
            </footer>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
