<script setup>
import PersonalInfo from "./components/PersonalInfo.vue";
import Education from "./components/Education.vue";
import Summary from "./components/Summary.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import "./styles/style.css";
</script>

<template>
  <div class="container-main">
    <PersonalInfo />
    <Summary />
    <Experience />
    <Education />
    <Skills />
  </div>
</template>

<style scoped></style>
