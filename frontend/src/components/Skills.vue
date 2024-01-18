<template>
  <div @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <h2>SKILLS</h2>
    <div class="line"></div>
    <div class="skills-wrapper">
      <div v-for="(skill, index) in skills" :key="index">
        <li>
          <input
            type="text"
            v-model="skill.name"
            placeholder="Add a skill!"
            @input="saveSkills"
          />

          <div v-if="isHovered">
            <button @click="removeSkill(index)">Remove</button>
          </div>
        </li>
      </div>
    </div>
    <button @click="addSkill">Add Skill</button>
  </div>
</template>

<script>
export default {
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
    setHover(value) {
      this.isHovered = value;
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
</style>
