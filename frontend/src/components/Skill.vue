<template>
  <li>
    <input
      type="text"
      v-model="skill.name"
      placeholder="Add a skill!"
      @input="saveSkills"
    />

    <div>
      <button @click="removeSkill">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    skill: Object,
    index: Number,
  },
  methods: {
    removeSkill() {
      this.$emit("remove", this.index);
    },
  },
};
</script>

<style scoped>
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
