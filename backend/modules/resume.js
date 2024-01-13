const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    fullName: String,
    email: String,
    position: String,
    address: String,
    linkedIn: String,
    phoneNumber: String,
  },
  educations: [
    {
      institution: String,
      degree: String,
      startYear: Date,
      graduationYear: Date,
    },
  ],
  experiences: [
    {
      position: String,
      company: String,
      location: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  skills: [
    {
      skill: String,
    },
  ],
  summary: String,
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
