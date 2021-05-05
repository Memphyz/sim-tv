const nodeMailer = require("nodemailer");

let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: "unknowsanonimus@gmail.com",
        pass: "lucas20102001"
    }
});

transporter.sendMail({
    from: "Lucas Ribeiro <unknowsanonimus@gmail.com>",
    to: "lucas2001.789@gmail.com",
    subject: "Teste aplicação SIM TV",
}).then(message => {
    console.log(message)
}).catch(error => {
    console.log(error)
});