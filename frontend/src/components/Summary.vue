<template>
  <div>
    <h2>Summary</h2>
    <form @submit.prevent="savePersonalInfo">
      <textarea type="text" v-model="summary" />

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      summary: "",
    };
  },
  methods: {
    savePersonalInfo() {
      console.log("Summary:", this.summary);
    },
  },
};
</script>

<style scoped></style>
