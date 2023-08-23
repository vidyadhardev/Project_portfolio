
const nodemailer = require("nodemailer");
// const config=require("../config/.env");
// Create a transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:"abcd123@gmail.com", // Store your email 
    pass: "", // Store your email password  
  },
});

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // Send E-mail
    transporter.sendMail({
      from:"pugFak12@gmail.com", // Use the same email as the sender
      to: "vidyadharmaurya9076@gmail.com", // Recipient's email
      subject: `Send ${name} E-mail !`,
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Has Been Sent Successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({
      success: false,
      message: "An error occurred while sending the email.",
      error: error.message, // Provide the error message for debugging
    });
  }
};

module.exports = { sendEmailController };