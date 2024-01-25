<template>
  <form @submit.prevent="submitForm">
    <main class="wrapper">
      <div class="container-main">
        <PersonalInfo />

        <Wrapper title="SUMMARY">
          <template v-slot:component> <Summary /></template>
        </Wrapper>

        <Wrapper title="EXPERIENCE">
          <template v-slot:component> <ExperiencesList /></template>
        </Wrapper>

        <Wrapper title="EDUCATIONS">
          <template v-slot:component><EducationsList /></template>
        </Wrapper>

        <Wrapper title="SKILLS">
          <template v-slot:component><SkillsList /></template>
        </Wrapper>
      </div>
      <Menu />
    </main>
  </form>
</template>

<script setup>
import PersonalInfo from "./components/PersonalInfo.vue";
import Summary from "./components/Summary.vue";
import EducationsList from "./components/EducationsList.vue";
import ExperiencesList from "./components/ExperiencesList.vue";
import SkillsList from "./components/SkillsList.vue";
import Menu from "./components/Menu.vue";
import Wrapper from "./components/Wrapper.vue";
import "./style.css";
</script>

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

    visibility: hidden;
  }

  .container-main {
    box-shadow: none;
  }

  .container-main > button {
    display: none;
  }

  .container-main,
  .container-main * {
    padding: 0;
    visibility: visible;
  }
}
</style>
