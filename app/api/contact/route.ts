import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const resend = new Resend('re_Ph1Qu4PQ_5EZZfY6UyjD1SADzXpWdb2j5')
    const toEmail = 'oliyadchl@gmail.com'
    const { name, email, subject, message, company, phone } = await request.json()

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    // 4. Use Resend to send the email
    const { data, error } = await resend.emails.send({
      from: "Tap2k Contact Form <onboarding@resend.dev>",
      to: toEmail!,
      subject: `New Contact Form Submission: ${subject}`,
      replyTo: email,
      html: `
        <h1>New message from your website</h1>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <hr>
        <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      // Return more detailed error info for debugging
      return NextResponse.json({ error: "Error sending message.", details: error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    // Log the error and return more details in the response
    console.error("API route error:", error)
    return NextResponse.json({ error: "An unexpected error occurred.", details: error?.message || error }, { status: 500 })
  }
}