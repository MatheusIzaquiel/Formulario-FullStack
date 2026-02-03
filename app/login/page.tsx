"use client";
//bibliotecas
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
//Funções React e Next
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
//Componentes
import { signInSchema, type SignInSchema } from "./signInSchema";
import InputComponent from "../components/myComponents/inputComponent";
import InputPassword from "../components/myComponents/inputPassword";
import { api } from "@/services/axios";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: SignInSchema) => {
    setServerError(null);
    try {
      const response = await api.post("auth/login", {
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log("Você está logado", response.data);

      toast.success("Login Realizado com sucesso!", {
        description: "Bem-Vindo, você está logado!",
        duration: 3000,
        onAutoClose: () => router.push("/profile"),
        onDismiss: () => router.push("/profile"),
      });
    } catch (error: any) {
      let message =
        error.response?.data?.message ||
        "Erro ao login. Tente novamente mais tarde";

      if (error.response) {
        const backendMessage = error.response.data?.message;
        if (backendMessage?.includes("Credenciais inválidas")) {
          message = "Email ou senha incorretos.";
        } else if (backendMessage?.includes("Email inválido")) {
          message = "Email não cadastrado ou inválido.";
        } else if (backendMessage) {
          message = backendMessage;
        }
      }

      toast.error("Falha no login", {
        description: message,
        duration: 5000,
      });

      setServerError(message);
      console.error("Erro no login", error);
    }
  };

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-700 to-gray-100 dark:from-gray-950 dark:to-black px-4">
        <Card className="w-full max-w-lg shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-3xl">Login</CardTitle>
            <CardDescription>Informe seu email e senha</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <InputComponent
                name="email"
                label="Email"
                register={register("email")}
                error={errors.email}
                placeholder="Digite o email cadastrado"
              />
              <InputPassword
                name="password"
                label="Senha"
                register={register("password")}
                error={errors.password}
                placeholder="Digite sua senha"
              />
              <Button type="submit" className="w-full h-11 mt-2">
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <footer className="flex items-center justify-center w-full space-x-2">
              <CardDescription>Não tem uma conta?</CardDescription>
              <Link
                href={"../register"}
                className="text-sm text-gray-800 font-bold hover:text-blue-600"
              >
                Cadastre-se
              </Link>
            </footer>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
