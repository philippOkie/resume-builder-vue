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
.exp-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  margin-bottom: 15px;
}

.job-title {
  font-size: 1.3rem;

  font-weight: bold;
}

.company {
  font-size: 1.3rem;
}

.location {
  color: transparent(0.5);
}

.wdud {
  width: 300px;
  padding: 10px;
  height: 100%;
  border: none;
  outline: none;
  resize: none;

  font-size: 1rem;
  line-height: 1.5;
  border-radius: 8px;
  background-color: #fff;
  transition: 0.7s ease-in-out;
}

.wdud:focus,
.wdud:hover {
  background-color: #e0e0e0;
}

.job-info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

button {
  background-color: #f5f5f5;

  opacity: 0;
  transition: opacity 1s ease-in-out;
}

div:hover button {
  opacity: 1;
}
</style>
