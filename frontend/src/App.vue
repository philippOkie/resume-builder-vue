<script setup>
import { ref } from "vue";
import PersonalInfo from "./components/PersonalInfo.vue";
import Education from "./components/Education.vue";
import Summary from "./components/Summary.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import "./styles/style.css";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const resumeContent = ref(null);

const submitForm = () => {
  console.log("Form data submitted!");
};

const exportToPDF = async () => {
  try {
    const pdf = new jsPDF("p", "mm", "a3");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvas = await html2canvas(resumeContent.value, {
      scale: 2,
      dpi: 1080,
    });
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = (canvas.width * pdfWidth) / canvas.width;
    const imgHeight = (canvas.height * pdfHeight) / canvas.height;

    pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  } catch (error) {
    console.error("Error exporting to PDF:", error);
  }
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="wrapper">
      <div class="container-main" ref="resumeContent">
        <PersonalInfo />
        <Summary />
        <Experience />
        <Education />
        <Skills />
      </div>
      <nav>
        <button
          style="height: 100%; font-size: 1.5em; font-weight: 700"
          @click="exportToPDF"
        >
          Export to PDF(buggy)
        </button>
        <button
          type="submit"
          style="height: 100%; font-size: 1.5em; font-weight: 700"
        >
          Save
        </button>
      </nav>
    </div>
  </form>
</template>
