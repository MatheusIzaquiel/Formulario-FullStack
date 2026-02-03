import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string({ message: "Campo obrigatório" })
      .min(5, "Digite seu nome completo"),
    email: z.string({ message: "Campo obrigatório" }).email("email inválido"),
    password: z
      .string({ message: "Campo obrigatório" })
      .min(8, "Senha deve ter no mínimo 8 caracteres"),
    confirmPassword: z
      .string({ message: "Campo obrigatório" })
      .min(8, "Senha deve ter no mínimo 8 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;

/*
  O que esse código faz?
    Utilizamos o zod para especificar as caracteristicas do formulário
    
    1 -> criamos a variável signUpSchema, que vai receber o schema/contrato do conteúdo do formulário 
    2 -> o signUpSchema recebe um objeto que vai ser criado pelo zod esse objeto determina o que vamos ter e o tipo do conteúdo do formulário,
    por exemplo: Campo: "name", tipo: "string", obrigatório, mínimo de 5 caracteres. Assim da pra previnir erros e tipar o conteúdo do formulário
    3 -> refine, nós queremos que os campos "password" e "confirmPassword" sejam iguais, pra isso usamos o método do refine que vem do zod. Com ele 
    nós indicamos na linha (data) => data.password === data.confirmPassword que esses campos devem ser iguais e caso não sejam, o campo seguinte 
    {message: "As senhas devem ser iguais", path: ["confirmPassword"],}); informa que as senhas não são compatíveis e ele informa isso no campo confirmPassword
    indicado pelo "path"
    4 -> por fim nós queremos reutilizar a tipagem desse schema, então exportamos o tipo dele nessa linha export type signUpSchema = z.infer<typeof signUpSchema>;
    usamos o método infer do zod para pegar o objeto de formulário e assim temos uma tipagem definida
*/
