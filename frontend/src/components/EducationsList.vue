<template>
  <div>
    <div
      v-for="(education, index) in educations"
      :key="index"
      class="edu-wrapper"
    >
      <Education
        :education="education"
        :index="index"
        @remove="removeEducation"
        @save="saveEducation"
      />
    </div>

    <button @click="addEducation">Add Education</button>
  </div>
</template>

<script>
import Education from "./Education.vue";
export default {
  data() {
    return {
      educations: [
        { university: "", degree: "", startingYear: "", graduationYear: "" },
      ],
    };
  },
  methods: {
    saveEducation() {
      console.log("Educations:", this.educations);
    },
    addEducation() {
      this.educations.push({
        university: "",
        degree: "",
        startingYear: "",
        graduationYear: "",
      });
    },
    removeEducation(index) {
      this.educations.splice(index, 1);
    },
  },
  components: { Education },
};
</script>

<style scoped>
.edu-wrapper {
  display: flex;
  flex-direction: row;
}

button {
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
