const Agenda = require("agenda");
require("dotenv").config();

const agenda = new Agenda({
  db: { address: process.env.MONGO_URI, collection: "jobs" },
});

agenda.define("send email", async (job) => {
  const { email, subject, body } = job.attrs.data;
  console.log(`Sending email to ${email} with subject: ${subject}`);
});

agenda.start();

module.exports = agenda;