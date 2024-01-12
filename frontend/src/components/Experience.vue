<template>
  <div @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <h2>EXPERIENCE</h2>
    <div class="line"></div>

    <div
      class="exp-wrapper"
      v-for="(experience, index) in experiences"
      :key="index"
    >
      <div class="job-info-wrapper">
        <input
          type="text"
          class="job-title"
          v-model="experience.jobTitle"
          placeholder="Job Title"
          @input="saveExperience"
        />

        <input
          type="text"
          class="company"
          v-model="experience.company"
          placeholder="Company"
          @input="saveExperience"
        />

        <input
          type="text"
          v-model="experience.location"
          placeholder="Location"
          @input="saveExperience"
        />
        <label>From</label>
        <input
          type="date"
          v-model="experience.startingYear"
          @input="saveExperience"
        />

        <label>To </label>
        <input
          type="date"
          v-model="experience.endingYear"
          @input="saveExperience"
        />
      </div>

      <textarea
        class="wdud"
        oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
        type="text"
        v-model="experience.whatYouDid"
        placeholder="What did you do?"
        @input="saveExperience"
      />

      <div v-if="isHovered">
        <button @click="removeExperience(index)">Remove</button>
      </div>
    </div>

    <button @click="addExperience">Add Experience</button>
  </div>
</template>

<script>
import "../styles/experience.css";
export default {
  data() {
    return {
      experiences: [
        {
          jobTitle: "",
          location: "",
          company: "",
          whatYouDid: "",
          startingYear: "",
          endingYear: "",
        },
      ],
    };
  },
  methods: {
    saveExperience() {
      console.log("Experiences:", this.experiences);
    },
    addExperience() {
      this.experiences.push({
        jobTitle: "",
        company: "",
        location: "",
        whatYouDid: "",
        startingYear: "",
        endingYear: "",
      });
    },
    removeExperience(index) {
      this.experiences.splice(index, 1);
    },
    setHover(value) {
      this.isHovered = value;
    },
  },
};
</script>

<style scoped>
button {
  display: none;
}

div:hover button {
  display: inline-block;
}
</style>
