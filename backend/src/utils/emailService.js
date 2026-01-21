import nodemailer from "nodemailer";

export const sendBookingEmail = async ({
  to,
  customerName,
  artistName,
  preferredDate,
  message,
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"InkSesh - ${artistName}" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Booking request received – ${artistName}`,
    html: `
      <h3>Hi ${customerName},</h3>
      <p>Your booking request with <strong>${artistName}</strong> has been received.</p>
      <p><strong>Preferred date:</strong> ${new Date(preferredDate).toLocaleString()}</p>
      ${
        message
          ? `<p><strong>Your message:</strong> ${message}</p>`
          : ""
      }
      <p>The artist will contact you shortly.</p>
      <br/>
      <p>— InkSesh</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
