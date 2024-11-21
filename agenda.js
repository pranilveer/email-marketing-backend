const Agenda = require("agenda");
const sendEmail = require("./emailService");
require("dotenv").config();

const agenda = new Agenda({
  db: { address: process.env.MONGO_URI, collection: "jobs" },
});

agenda.define("send email", async (job) => {
  const { email, subject, body } = job.attrs.data;
  await sendEmail({ email, subject, body });
});

agenda.start();

module.exports = agenda;