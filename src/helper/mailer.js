import User from "@/models/usermodel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if (emailType === "VERIFY") {
            console.log("to verify email");
            await User.findByIdAndUpdate(
                userId,
                { $set: { verifytoken: hashedToken, verifytokenexpiry: Date.now() + 3600000 } }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            secure: false,
            auth: {
                user: "ad6fed884e6d28",
                pass: "36f9768b2e3e6f"
            }
        });

        const mailResponse = await transporter.sendMail({
            from: 'mjcompany@gmail.com', // sender address
            to: email, // recipient email address
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", // Subject line
            text: "Hello world?", // plain text body
            html: `<b>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> 
            to verify your email token=${hashedToken}</b>`, // html body
        });

        console.log("Email sent successfully:", mailResponse);

        return mailResponse;
    } catch (error) {
        console.error("Error while sending email:", error);
        throw error; // rethrow the error to handle it at the caller level
    }
};
