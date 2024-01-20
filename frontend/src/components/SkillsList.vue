<template>
  <div>
    <h2>SKILLS</h2>
    <div class="line"></div>
    <div class="skills-wrapper">
      <div v-for="(skill, index) in skills" :key="index">
        <Skill :skill="skill" :index="index" @remove="removeSkill" />
      </div>
    </div>
    <button @click="addSkill">Add Skill</button>
  </div>
</template>

<script>
import Skill from "./Skill.vue";
export default {
  components: {
    Skill,
  },
  data() {
    return {
      skills: [{ name: "" }],
    };
  },
  methods: {
    saveSkills() {
      console.log("Skills:", this.skills);
    },
    addSkill() {
      this.skills.push({ name: "" });
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.skills-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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
