require("dotenv").config()
const express = require("express");
const { join } = require("path");
const sendMail = require("./utils/sendEmail");
const app = express();
const PORT = 2070;



app.use(express.json());
app.use("/", express.static(join("public")));

//post
app.post("/email", (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ msg: "Please enter valid email." })
    }

    //options
    const sent_from = process.env.SMTP_MAIL;
    const send_to = email;
    const subject = "welcome..";
    const message = `
    <h2>Welcome ${email}.....</h2>
    <p>Nice having you here</p>
    `
    sendMail(sent_from, send_to, subject, message)

    return res.status(200).json({ msg: `email sent to ${email}` });
})


app.listen(PORT, () => console.log("Server listening on port", PORT))











