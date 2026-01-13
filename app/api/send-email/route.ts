import { type NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAIL = "enocksarpong64@gmail.com"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form - Degitech <onboarding@resend.dev>",
        to: ADMIN_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `,
      }),
    })

    const userResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "DegiTech Consults <onboarding@resend.dev>",
        to: email,
        subject: "Thank you for contacting DegiTech Consults",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>Thank You for Reaching Out</h2>
            <p>Hi ${name},</p>
            <p>We've received your message and appreciate you contacting DegiTech Consults. Our team will review your inquiry and get back to you as soon as possible.</p>
            <p>Best regards,<br/>The DegiTech Team</p>
          </div>
        `,
      }),
    })

    if (!adminResponse.ok || !userResponse.ok) {
      return NextResponse.json({ error: "Failed to send emails" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
