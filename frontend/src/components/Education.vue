<template>
  <div>
    <input
      type="text"
      v-model="education.degree"
      class="degree"
      placeholder="Degree"
      @input="saveEducation"
    />

    <input
      type="text"
      v-model="education.university"
      placeholder="University"
      @input="saveEducation"
    />
  </div>

  <div>
    <label>From</label>
    <input
      type="date"
      v-model="education.startingYear"
      @input="saveEducation"
    />

    <label>></label>
    <input
      type="date"
      v-model="education.graduationYear"
      @input="saveEducation"
    />
  </div>

  <div>
    <button @click="removeEducation">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    education: Object,
    index: Number,
  },
  methods: {
    saveEducation() {
      this.$emit("save", this.index, this.edu);
    },
    removeEducation() {
      this.$emit("remove", this.index);
    },
  },
};
</script>

<style scoped>
button {
  background-color: #f5f5f5;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

div:hover button {
  opacity: 1;
}

.degree {
  font-size: 1.3rem;
  font-weight: bold;
}

@media print {
  button {
    display: none;
  }
}
</style>
