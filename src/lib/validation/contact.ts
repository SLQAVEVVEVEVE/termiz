import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Введите имя"),
  phone: z.string().min(5, "Введите телефон"),
  message: z.string().min(5, "Опишите ваш запрос"),
})

export type ContactValues = z.infer<typeof contactSchema>
