import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: "anaclimgo@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false }, { status: 500 })
  }
}