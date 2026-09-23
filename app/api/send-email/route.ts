// //app/api/send-email/route.ts

// import { type NextRequest, NextResponse } from "next/server"

// const RESEND_API_KEY = process.env.RESEND_API_KEY
// const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "enocksarpong64@gmail.com"
// const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev"

// export async function POST(request: NextRequest) {
//   try {
//     // Parse request body
//     const body = await request.json()
    
//     // Extract fields from the form - note: form sends 'name' not 'fullName'
//     const { name, email, service, message, phone } = body

//     // Validate required fields
//     if (!name || typeof name !== 'string' || name.trim() === '') {
//       return NextResponse.json(
//         { error: "Name is required and must be a valid string" },
//         { status: 400 }
//       )
//     }

//     if (!email || typeof email !== 'string' || email.trim() === '') {
//       return NextResponse.json(
//         { error: "Email is required and must be a valid string" },
//         { status: 400 }
//       )
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: "Please provide a valid email address" },
//         { status: 400 }
//       )
//     }

//     if (!service || typeof service !== 'string' || service.trim() === '') {
//       return NextResponse.json(
//         { error: "Service selection is required" },
//         { status: 400 }
//       )
//     }

//     if (!message || typeof message !== 'string' || message.trim() === '') {
//       return NextResponse.json(
//         { error: "Message is required and cannot be empty" },
//         { status: 400 }
//       )
//     }

//     // Check if Resend API key is configured
//     if (!RESEND_API_KEY) {
//       console.error("RESEND_API_KEY is not configured")
//       return NextResponse.json(
//         { error: "Email service is not properly configured" },
//         { status: 500 }
//       )
//     }

//     // Sanitize inputs to prevent HTML injection
//     const sanitizedName = name.trim().replace(/[<>]/g, '')
//     const sanitizedEmail = email.trim().toLowerCase()
//     const sanitizedService = service.trim()
//     const sanitizedMessage = message.trim().replace(/[<]/g, '&lt;').replace(/[>]/g, '&gt;')
//     const sanitizedPhone = phone ? phone.trim() : "Not provided"

//     // Send email to admin
//     const adminResponse = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${RESEND_API_KEY}`,
//       },
//       body: JSON.stringify({
//         from: FROM_EMAIL,
//         to: ADMIN_EMAIL,
//         subject: `New Contact Form Submission from ${sanitizedName}`,
//         html: `
//           <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; max-width: 600px; margin: 0 auto;">
//             <h2 style="color: #1f2937; margin-top: 0;">New Contact Form Submission</h2>
            
//             <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
//               <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
//               <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
//               <p style="margin: 10px 0;"><strong>Phone:</strong> ${sanitizedPhone}</p>
//               <p style="margin: 10px 0;"><strong>Service Interested:</strong> ${sanitizedService}</p>
//             </div>

//             <div style="margin: 20px 0;">
//               <h3 style="color: #1f2937;">Message:</h3>
//               <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
//             </div>

//             <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
//             <p style="color: #6b7280; font-size: 12px; margin: 0;">
//               This is an automated email from your contact form. Please reply directly to the sender's email address.
//             </p>
//           </div>
//         `,
//         replyTo: sanitizedEmail,
//       }),
//     })

//     if (!adminResponse.ok) {
//       const adminError = await adminResponse.text()
//       console.error("Failed to send admin email:", adminError)
//       return NextResponse.json(
//         { error: "Failed to send admin notification email" },
//         { status: 500 }
//       )
//     }

//     // Send confirmation email to user
//     const userResponse = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${RESEND_API_KEY}`,
//       },
//       body: JSON.stringify({
//         from: FROM_EMAIL,
//         to: sanitizedEmail,
//         subject: "Thank you for contacting DegiTech Consults",
//         html: `
//           <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; max-width: 600px; margin: 0 auto;">
//             <h2 style="color: #1f2937;">Thank You for Reaching Out!</h2>
            
//             <p style="color: #4b5563; line-height: 1.6;">
//               Hi ${sanitizedName},
//             </p>

//             <p style="color: #4b5563; line-height: 1.6;">
//               We've received your message and appreciate you contacting <strong>DegiTech Consults</strong>. Our team will review your inquiry about <strong>${sanitizedService}</strong> and get back to you as soon as possible, typically within 24 hours.
//             </p>

//             <div style="background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 4px;">
//               <p style="margin: 0; color: #0c4a6e; font-size: 14px;">
//                 <strong>What happens next?</strong><br>
//                 We'll contact you at ${sanitizedEmail} with more information about how we can help with your project.
//               </p>
//             </div>

//             <p style="color: #4b5563; line-height: 1.6;">
//               In the meantime, feel free to check out our portfolio and services at <a href="https://degitech.com" style="color: #3b82f6; text-decoration: none;">degitech.com</a>
//             </p>

//             <p style="color: #4b5563; line-height: 1.6; margin-bottom: 0;">
//               Best regards,<br/>
//               <strong>The DegiTech Team</strong>
//             </p>

//             <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
//             <p style="color: #6b7280; font-size: 12px; margin: 0;">
//               © 2026 DegiTech Consults. All rights reserved.
//             </p>
//           </div>
//         `,
//       }),
//     })

//     if (!userResponse.ok) {
//       const userError = await userResponse.text()
//       console.error("Failed to send user email:", userError)
//       // Don't return error here - admin email was sent successfully
//       // Log the issue but let the user know it worked
//     }

//     return NextResponse.json(
//       { 
//         success: true,
//         message: "Email sent successfully. We'll be in touch soon!"
//       },
//       { status: 200 }
//     )

//   } catch (error) {
//     console.error("Email route error:", error)
    
//     // Return more specific error messages
//     if (error instanceof SyntaxError) {
//       return NextResponse.json(
//         { error: "Invalid request format" },
//         { status: 400 }
//       )
//     }

//     return NextResponse.json(
//       { error: "Failed to process your request. Please try again later." },
//       { status: 500 }
//     )
//   }
// }