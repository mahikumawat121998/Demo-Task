import nodemailer from "nodemailer";

export const sendEmail = async (param) => {
    const {uniqueNumber, Email_id}=param;
  console.log("res",uniqueNumber,Email_id);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mahikumawat121998@gmail.com",
      pass: "wqexcdueqdwojtre", // Replace with your Gmail password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const verificationUrl = `
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:1">
 <div style="margin:50px auto;width:70%;padding:20px 0">
   <div style="border-bottom:1px solid #eee">
     <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600"> Demo_Project</a>
   </div>    <h3 style="font-size:1.1em;color: #000;">Hi,</h3>
   <h3 style="color: #000;">Thank you for choosing Demo-project. Use the following OTP  to complete your email verification request.</h3>
   <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${uniqueNumber}</h2>
   <p style="font-size:0.9em;">Regards,<br />demo.ai</p>
   <hr style="border:none;border-top:1px solid #eee" />
   <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
     <p>Demo Project</p>
     <p>India</p>
   </div>
 </div>
</div>`;
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <mahikumawat121998@gmail.com>',
    to: `${Email_id}`,
    subject: "Please verify your OTP",
    text: "Please verify your OTP",
    html: verificationUrl,
  });
};
