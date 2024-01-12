<template>
  <div @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <h2>EDUCATION</h2>
    <div class="line"></div>

    <div v-for="(education, index) in educations" :key="index">
      <input
        type="text"
        v-model="education.university"
        placeholder="University"
        @input="saveEducation"
      />

      <input
        type="text"
        v-model="education.degree"
        placeholder="Degree"
        @input="saveEducation"
      />

      <label>From</label>
      <input
        type="date"
        v-model="education.startingYear"
        @input="saveEducation"
      />
      <label>To</label>
      <input
        type="date"
        v-model="education.graduationYear"
        input="saveEducation"
      />

      <div>
        <button @click="removeEducation(index)">Remove</button>
      </div>
    </div>

    <button @click="addEducation">Add Education</button>
  </div>
</template>

<script>
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
