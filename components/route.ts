import { NextResponse } from "next/server"
import { Resend } from "resend"


export async function POST(request: Request) {
  try {
    // 1. Initialize Resend with the API key from your environment variables
    const resend = new Resend(process.env.RESEND_API_KEY)

    // 2. Get the email address to send to from your environment variables
    const toEmail = process.env.CONTACT_EMAIL

    // 3. Parse the data from the form submission
    const { name, email, subject, message, company, phone } = await request.json()

    // Basic server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    // 4. Use Resend to send the email
    const { data, error } = await resend.emails.send({
      // NOTE: For the free plan, you must use 'onboarding@resend.dev' as the "from" address.
      // Once you add and verify a domain in Resend, you can use an address like 'contact@yourdomain.com'.
      from: "Tap2k Contact Form <onboarding@resend.dev>", // Must be a verified domain or onboarding@resend.dev
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
      return NextResponse.json({ error: "Error sending message." }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 })
  }
}
