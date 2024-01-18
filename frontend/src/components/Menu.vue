<!-- TODO: Extract all unnecessary logic from App.vue to a separate view -->

<script setup>
const submitForm = () => {
  console.log("Form data submitted!");
};

const exportToPDF = () => {
  print();
};
</script>

<template>
  <nav>
    <button class="save-btn" @click="exportToPDF">Export to PDF</button>
    <button class="save-btn" @click="submitForm" type="submit">Save</button>
  </nav>
</template>

<style scoped>
.save-btn {
  height: 100%;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 32px;
}
</style>
