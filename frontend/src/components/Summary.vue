<template>
  <div>
    <h2>SUMMARY</h2>
    <div class="line"></div>

    <textarea
      class="summary-textarea"
      type="text"
      v-model="summary"
      placeholder="Write a small summary!"
      @input="savePersonalInfo"
    />
  </div>
</template>

<script>
import "../styles/summary.css";
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
