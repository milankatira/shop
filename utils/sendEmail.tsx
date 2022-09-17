import nodemailer from "nodemailer";

interface Ioptions {
  email: string;
  subject: string;
  message: string;
}
export const sendEmail = async (options: Ioptions) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMPT_SERVICE,
      port: 587,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    await transporter
      .sendMail(mailOptions)
      .then((res) => "send successfully")
      .catch((err) => {
        `error in sending${err}`;
      });
  } catch (err) {
    console.log(err);
  }
};
