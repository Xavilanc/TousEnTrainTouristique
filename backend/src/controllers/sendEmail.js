// const mailer = require("./mailer");

// const mailRecover = (data) => {
//   console.log(data);
//   console.log(data.id);
//   id = data.id;
//   tok = data.token;
//   mailer.sendMail(
//     {
//       from: process.env.MAIL,
//       to: data.mail,
//       subject: "This is a test email",
//       text: "Hello world",
//       html: `<p>Hello <em>world</em></p><a href="http://localhost:5000/api/mail/${data.id}/${data.token}">ResetPassword</a>`,
//     },
//     (err, info) => {
//       if (err) console.error(err);
//       else console.log(info);
//     }
//   );
// };
// module.exports = {
//   mailRecover,
// };
