"use client"
//bibliotecas
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
//Funções React e Next
import { useEffect, useState } from "react";
import { api } from "@/services/axios";

interface UserProps {
  name: string
  email: string
  createdAt: Date
}

export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/profile");
        setUser(response.data.user);
      } catch (error) {
        setError("Falha ao carregar perfil");
        console.error(error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [router]);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        Carregando perfil...
      </div>
    );
  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        {error}
      </div>
    );
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card>
          <CardHeader>
            <CardTitle>Seu Perfil</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <strong>Nome:</strong>
              {user?.name || "Não informado"}
            </div>
            <div>
              <strong>Email:</strong>
              {user?.email || "Não informado"}
            </div>
            <div>
              <strong>Criado em:</strong>{" "}
              {new Date(user?.createdAt).toLocaleDateString()}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
