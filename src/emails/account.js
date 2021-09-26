const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "elijahogunrinade@gmail.com",
        subject: "Welcome to Task-App, thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to:email,
        from: "elijahogunrinade@gmail.com",
        subject: "Problems with TaskApp!",
        text: `Hi ${name}, We're sorry you had to cancel you account with us. Could you share the reason with us, so has to improve on our services`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}