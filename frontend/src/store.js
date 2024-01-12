import { createStore } from "vuex";

export default createStore({
  state: {
    resumeData: {
      personalInfo: {
        fullName: "",
        email: "",
        address: "",
        phoneNumber: "",
      },
      educations: [],
      experience: [],
      skills: [],
      summary: "",
    },
  },
  mutations: {
    updatePersonalInfo(state, personalInfo) {
      state.resumeData.personalInfo = personalInfo;
    },
    addEducation(state, education) {
      state.resumeData.educations.push(education);
    },
    addExperience(state, experience) {
      state.resumeData.experience.push(experience);
    },
    addSkill(state, skill) {
      state.resumeData.skills.push(skill);
    },
    addSummary(state, summary) {
      state.resumeData.summary = summary;
    },
  },
});
