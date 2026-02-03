import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ message: "Insira o email que você cadastrou!" })
    .email("email inválido"),
  password: z
    .string({ message: "Insira sua senha" })
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

export type SignInSchema = z.infer<typeof signInSchema>