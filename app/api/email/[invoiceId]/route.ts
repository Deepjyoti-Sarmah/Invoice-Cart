import { prisma } from "@/app/utils/db";
import { requiredUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(request: Request, {
  params
}: {
  params: Promise<{ invoiceId: string }>
}) {

  try {

    const session = await requiredUser()

    const { invoiceId } = await params

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id
      },
    })

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 })
    }

    const sender = {
      email: "hello@demomailtrap.com",
      name: "Deep test",
    };

    emailClient.send({
      from: sender,
      to: [{ email: "deepjyotisarmah37@gmail.com" }],
      template_uuid: "5e3aaa37-adea-466c-9c9b-bd68bb7a3b42",
      template_variables: {
        "first_name": invoiceData.clientName,
      }
    });

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send Email reminder" }, { status: 500 })
  }
}
