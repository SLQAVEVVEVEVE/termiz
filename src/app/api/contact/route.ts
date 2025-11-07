import { contactSchema } from "@/lib/validation/contact"

export const runtime = "edge"

export async function POST(request: Request) {
  const payload = await request.json()

  const parsed = contactSchema.safeParse(payload)

  if (!parsed.success) {
    return Response.json(
      {
        ok: false,
        error: "Validation error",
        issues: parsed.error.issues,
      },
      { status: 400 }
    )
  }

  console.log("[contact]", parsed.data)

  return Response.json({ ok: true })
}
