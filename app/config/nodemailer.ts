import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SENDER as string,
    pass: process.env.EMAIL_PASSWORD as string
  }
})

export const mailOptions = {
  from: process.env.EMAIL_SENDER as string,
  to: process.env.EMAIL_RECEIVER as string,
}