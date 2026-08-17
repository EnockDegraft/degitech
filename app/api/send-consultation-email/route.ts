//app/api/send-consultation-email/route.ts

import { type NextRequest, NextResponse } from "next/server"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "enocksarpong64@gmail.com"
const FROM_EMAIL = process.env.FROM_EMAIL || "DegiTech Consults <onboarding@resend.dev>"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, projectType, budget, description } = body

    if (
      !name || typeof name !== "string" ||
      !email || typeof email !== "string" ||
      !date || typeof date !== "string" ||
      !time || typeof time !== "string" ||
      !projectType || typeof projectType !== "string" ||
      !budget || typeof budget !== "string"
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Sanitize inputs before embedding them in email HTML
    const sanitizedName = escapeHtml(name.trim())
    const sanitizedEmail = email.trim().toLowerCase()
    const sanitizedPhone = phone ? escapeHtml(String(phone).trim()) : "Not provided"
    const sanitizedDescription = description ? escapeHtml(String(description).trim()) : "Not provided"
    const formattedProjectType = escapeHtml(projectType.replace(/-/g, " ").toUpperCase())
    const formattedBudget = escapeHtml(budget.replace(/-/g, " ").toUpperCase())

    // Send confirmation email to user
    const userResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: sanitizedEmail,
        subject: "Consultation Scheduled - DegiTech Consults",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
            <h2 style="color: #3D5A95;">Consultation Confirmed</h2>
            <p>Hi ${sanitizedName},</p>
            <p>Thank you for booking a consultation with DegiTech Consults. Your appointment details are below:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Time:</strong> ${time}</p>
              <p><strong>Project Type:</strong> ${formattedProjectType}</p>
              <p><strong>Budget Range:</strong> ${formattedBudget}</p>
            </div>
            <p>We'll review your project details and reach out to you shortly to confirm and discuss your consultation further.</p>
            <p>If you have any questions before your consultation, feel free to reach out to us.</p>
            <p>Best regards,<br/><strong>DegiTech Consults</strong></p>
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
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `New Consultation Booking from ${sanitizedName}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Consultation Booking</h2>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${sanitizedName}</p>
              <p><strong>Email:</strong> ${sanitizedEmail}</p>
              <p><strong>Phone:</strong> ${sanitizedPhone}</p>
              <p><strong>Scheduled Date:</strong> ${date}</p>
              <p><strong>Scheduled Time:</strong> ${time}</p>
              <p><strong>Project Type:</strong> ${formattedProjectType}</p>
              <p><strong>Budget Range:</strong> ${formattedBudget}</p>
            </div>
            <p><strong>Project Description:</strong></p>
            <p>${sanitizedDescription}</p>
            <p style="margin-top: 20px; color: #666; font-size: 12px;">Please follow up with the client to confirm this consultation appointment.</p>
            <p>https://degitechconsults.vercel.app</p>
          </div>
        `,
      }),
    })

    if (!userResponse.ok || !adminResponse.ok) {
      const userErr = !userResponse.ok ? await userResponse.text() : null
      const adminErr = !adminResponse.ok ? await adminResponse.text() : null
      console.error("Failed to send consultation emails:", { userErr, adminErr })
      return NextResponse.json({ error: "Failed to send emails" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Consultation booking error:", error)
    return NextResponse.json({ error: "Failed to book consultation" }, { status: 500 })
  }
}
