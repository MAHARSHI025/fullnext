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

        // fake
        // const transport = nodemailer.createTransport({
        //     host: "sandbox.smtp.mailtrap.io",
        //     port: 2525,
        //     auth: {
        //       user: "ad6fed884e6d28",
        //       pass: "36f9768b2e3e6f"
        //     }
        //   });

        //original irij miem cunb lwyw
        var transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: "gmail",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "maharshipatel3851@gmail.com",
                pass: "irijmiemcunblwyw"
            },
            tls: {
                rejectUnauthorized: false // Add this line to bypass certificate validation
            }
        });

        const mailResponse = await transport.sendMail({
            from: 'Mjcompany.gmail.com', // sender address
            to: email, // recipient email address
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", // Subject line
            text: "Verify email", // plain text body
            html: `<h2>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a></h2>
            <h3>to verify your email token=${hashedToken}</h3>  <h4><b>Do not share your token to anyone.</b></h4>`, // html body
        });

        console.log("Email sent successfully:", mailResponse);

        return mailResponse;
    } catch (error) {
        console.error("Error while sending email:", error);
        throw error; // rethrow the error to handle it at the caller level
    }
};