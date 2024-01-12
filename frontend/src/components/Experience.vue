<template>
  <div @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <h2>EXPERIENCE</h2>
    <div class="line"></div>

    <div v-for="(experience, index) in experiences" :key="index">
      <input
        type="text"
        v-model="experience.jobTitle"
        placeholder="Job Title"
        @input="saveExperience"
      />

      <input
        type="text"
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
      <label>To</label>
      <input
        type="date"
        data-date-format="DD MMMM YYYY"
        v-model="experience.endingYear"
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
export default {
  data() {
    return {
      experiences: [
        {
          jobTitle: "",
          location: "",
          company: "",
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
