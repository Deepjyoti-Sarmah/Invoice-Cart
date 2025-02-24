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
      template_uuid: "263de8f3-22bc-4c11-808a-89ea35be7e47",
      template_variables: {
        "first_name": invoiceData.clientName,
        "company_info_name": "InvoiceCart",
        "company_info_address": "Chad street 123",
        "company_info_city": "Guwahati",
        "company_info_zip_code": "781030",
        "company_info_country": "India"
      }
    });

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to send Email reminder" }, { status: 500 })
  }
}
