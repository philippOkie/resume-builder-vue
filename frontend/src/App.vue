<script setup>
import PersonalInfo from "./components/PersonalInfo.vue";
import Educations from "./components/Educations.vue";
import Summary from "./components/Summary.vue";
import Experiences from "./components/Experiences.vue";
import Skills from "./components/Skills.vue";
import Menu from "./components/Menu.vue";
import "./style.css";
</script>

<template>
  <form @submit.prevent="submitForm">
    <main class="wrapper">
      <div class="container-main">
        <PersonalInfo />
        <Summary />
        <Experiences />
        <Educations />
        <Skills />
      </div>
      <Menu />
    </main>
  </form>
</template>

<style scoped>
.wrapper {
  margin-bottom: 20px;
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

.container-main > button {
  display: none;
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

  .container-main {
    padding: 0;
    box-shadow: none;
  }

  .container-main > button {
    display: none;
  }

  .container-main,
  .container-main * {
    visibility: visible;
  }
}
</style>
