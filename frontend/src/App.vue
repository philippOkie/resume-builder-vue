<script setup>
import PersonalInfo from "./components/PersonalInfo.vue";
import Education from "./components/Education.vue";
import Summary from "./components/Summary.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import "./styles/style.css";

const submitForm = () => {
  console.log("Form data submitted!");
};

const exportToPDF = () => {
  print();
};
</script>
<!-- TODO: Extract all unnecessary logic from App.vue to a separate view -->
<template>
  <form @submit.prevent="submitForm">
    <main class="wrapper">
      <div class="container-main">
        <PersonalInfo />
        <Summary />
        <Experience />
        <Education />
        <Skills />
      </div>
      <nav>
        <button class="save-btn" @click="exportToPDF">Export to PDF</button>
        <button class="save-btn" type="submit">Save</button>
      </nav>
    </main>
  </form>
</template>

<style scoped>
.save-btn {
  height: 100%;
  font-size: 1.5em;
  font-weight: 700;
}

.container-main {
  padding: 60px;
  transition: 0.5s;
  gap: 20px;
  margin: 20px auto;
  border-radius: 8px;
  min-height: 1123px;
  width: 794px;
  background-color: #fff;
  box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px;
}

.container-main:hover {
  box-shadow: rgba(45, 35, 66, 0.2) 0 20px 40px;
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }

  body * {
    margin: 0;
    padding: 0;
    visibility: hidden;
  }
  .container-main,
  .container-main * {
    margin-top: 10px;
    margin-bottom: 10px;
    visibility: visible;
  }
}
</style>
