import { type NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAIL = "enocksarpong64@gmail.com"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, projectType, budget, description } = body

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Send confirmation email to user
    const userResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "DegiTech Consults <onboarding@resend.dev>",
        to: email,
        subject: "Consultation Scheduled - DegiTech Consults",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
            <h2 style="color: #3D5A95;">Consultation Confirmed</h2>
            <p>Hi ${name},</p>
            <p>Thank you for booking a consultation with DegiTech Consults. Your appointment details are below:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Time:</strong> ${time}</p>
              <p><strong>Project Type:</strong> ${projectType.replace(/-/g, " ").toUpperCase()}</p>
              <p><strong>Budget Range:</strong> ${budget.replace(/-/g, " ").toUpperCase()}</p>
            </div>
            <p>Our team will review your project details and reach out to you shortly to confirm and discuss your consultation further.</p>
            <p>If you have any questions before your consultation, feel free to reach out to us.</p>
            <p>Best regards,<br/><strong>The DegiTech Consults Team</strong></p>
            <p>https://degitechconsults.vercel.app</p>
          </div>
        `,
      }),
    })

    // Send notification email to admin
    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "DegiTech Consults <onboarding@resend.dev>",
        to: ADMIN_EMAIL,
        subject: `New Consultation Booking from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Consultation Booking</h2>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Scheduled Date:</strong> ${date}</p>
              <p><strong>Scheduled Time:</strong> ${time}</p>
              <p><strong>Project Type:</strong> ${projectType.replace(/-/g, " ").toUpperCase()}</p>
              <p><strong>Budget Range:</strong> ${budget.replace(/-/g, " ").toUpperCase()}</p>
            </div>
            <p><strong>Project Description:</strong></p>
            <p>${description}</p>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">Please follow up with the client to confirm this consultation appointment.</p>
                        <p>https://degitechconsults.vercel.app</p>

          </div>
        `,
      }),
    })

    if (!userResponse.ok || !adminResponse.ok) {
      return NextResponse.json({ error: "Failed to send emails" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Consultation booking error:", error)
    return NextResponse.json({ error: "Failed to book consultation" }, { status: 500 })
  }
}
