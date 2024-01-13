const resumesRouter = require("express").Router();
const Resume = require("../modules/resume");

resumesRouter.get("/", async (request, response) => {
  try {
    const resumes = await Resume.find({});
    response.json(resumes);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

resumesRouter.post("/", async (request, response) => {
  const body = request.body;

  const resume = new Resume({
    personalInfo: body.personalInfo || {},
    educations: body.educations || [],
    experiences: body.experiences || [],
    skills: body.skills || [],
    summary: body.summary || "",
  });

  try {
    const savedResume = await resume.save();
    response.status(201).json(savedResume);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = resumesRouter;
