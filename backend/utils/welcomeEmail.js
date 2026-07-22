const nodemailer = require('nodemailer');

let cachedTransporter = null;

async function getTransporter() {
    if (cachedTransporter) return cachedTransporter;

    const testAccount = await nodemailer.createTestAccount();
    
    cachedTransporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    console.log(`[Email Service] Generated fresh Ethereal test account: ${testAccount.user}`);
    return cachedTransporter;
}

const sendWelcomeEmail = async (to, name) => {
    try {
        const transporter = await getTransporter();

        const mailOptions = {
            from: `"E-Commerce Support" <no-reply@ecommerce.com>`,
            to: to,
            subject: 'Welcome to Our E-Commerce Store! 🎉',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #4A90E2;">Welcome to the family, ${name}!</h2>
                    <p>Thank you for registering with us. We are absolutely thrilled to have you on board!</p>
                    <a href="http://localhost:5173" style="display: inline-block; background-color: #4A90E2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Start Shopping</a>
                </div>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`[Email Service] Live welcome email successfully delivered to: ${to}`);
        console.log(`[Ethereal Preview URL]: ${nodemailer.getTestMessageUrl(info)}`);

    } catch (error) {
        console.error('[Email Service] Production pipeline failed to deliver email:', error);
    }
};

module.exports = sendWelcomeEmail;