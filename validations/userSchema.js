import { string, z } from "zod";

export const userSchema = z.object({
  name: z.string().min(3, {
      mensaje: "El nombre debe ser de más de 3 caracteres",
    })
    .max(200, {
      mensaje: "El nombre debe ser de menos de 200 caracteres",
    }),
  apellido: z.string().min(3, {
      mensaje: "El nombre debe ser de más de 3 caracteres",
    }).max(200, {
      mensaje: "El nombre debe ser de menos de 200 caracteres",
    }),
  email: z.string().email({
    mensaje: "Ingresar un correo válido",
  }),
  area: z.string().refine(area => !isNaN(parseFloat(area)),{
    mensaje: 'area tiene que ser un número'
  }),
  tel: z.string().refine(area => !isNaN(parseFloat(area)),{
    mensaje: 'teléfono tiene que ser un número'
  }),
  // cuit: z.string().optional().refine(area => !isNaN(parseFloat(area)),{
  //   mensaje: 'cuit tiene que ser un número'
  // }),
  // razon: z.string().optional().refine(area => !isNaN(parseFloat(area)),{
  //   mensaje: 'razón tiene que ser un número'
  // }),
});
