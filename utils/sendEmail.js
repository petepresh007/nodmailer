const nodemailer = require("nodemailer")
const sendMail = (sent_from, send_to, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASS
        }
    })

    const mailOptions = {
        from: sent_from,
        to: send_to,
        subject: subject,
        html: message
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) console.log(err);
        console.log(data);
    })
}
module.exports = sendMail;
