<template>
  <div>
    <div
      class="exp-wrapper"
      v-for="(experience, index) in experiences"
      :key="index"
    >
      <Experience
        :experience="experience"
        @remove="removeExperience"
        :index="index"
      />
    </div>

    <button @click="addExperience">Add Experience</button>
  </div>
</template>

<script>
import Experience from "./Experience.vue";
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
  },
  components: { Experience },
};
</script>

<style scoped>
.exp-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 15px;
  margin-bottom: 15px;
}

button {
  background-color: #f5f5f5;

  opacity: 0;
  transition: opacity 1s ease-in-out;
}

div:hover button {
  opacity: 1;
}

@media print {
  button {
    display: none;
  }
}
</style>
