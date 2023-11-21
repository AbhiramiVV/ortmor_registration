import nodemailer from "nodemailer";

export async function sentMail(email, registrationDetails) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user:process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "The registration of OQ",
      html: `
        <h1>Thank you for registering with us</h1>
        <p>Your registration details:</p>
        <ul>
          <li>Full Name: ${registrationDetails.fullName}</li>
          <li>Mobile: ${registrationDetails.mobile}</li>
          <li>Email: ${registrationDetails.email}</li>
          <li>Company Name: ${registrationDetails.companyName}</li>
          <li>Workshop: ${registrationDetails.workshop}</li>
          <!-- Add more details as needed -->
        </ul>
        <p>Event details:</p>
        <ul>
          <li>Timestamp: ${registrationDetails.timestamp}</li>
          <!-- Add more event details as needed -->
        </ul>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Email sent error:", error);
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (error) {
    console.log("Error:", error);
  }
}
