import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black px-4">
      <Card className="w-full max-w-md border-none shadow-2xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Bem-vindo!</CardTitle>
          <CardDescription className="text-lg">
            Crie uma conta ou faça login para continuar
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          <Button asChild size="lg" className="w-full h-12 text-lg">
            <Link href="/register">
              Cadastrar
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full h-12 text-lg">
            <Link href="/login">
              Já tenho conta - Entrar
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}