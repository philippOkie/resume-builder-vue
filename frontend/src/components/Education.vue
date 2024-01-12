<template>
  <div>
    <h2>Education</h2>
    <form @submit.prevent="saveEducation">
      <div v-for="(education, index) in educations" :key="index">
        <label>University:</label>
        <input type="text" v-model="education.university" />

        <label>Degree:</label>
        <input type="text" v-model="education.degree" />

        <label>Graduation Year:</label>
        <input type="text" v-model="education.graduationYear" />

        <button @click="removeEducation(index)">Remove</button>
      </div>

      <button @click="addEducation">Add Education</button>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educations: [{ university: "", degree: "", graduationYear: "" }],
    };
  },
  methods: {
    saveEducation() {
      console.log("Educations:", this.educations);
    },
    addEducation() {
      this.educations.push({ university: "", degree: "", graduationYear: "" });
    },
    removeEducation(index) {
      this.educations.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Your component styles go here */
</style>
