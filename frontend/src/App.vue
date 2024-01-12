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

const exportToPDF = () => {
  const pdf = new jsPDF("p", "mm", "a3");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  console.log(pdfHeight);

  html2canvas(resumeContent.value, { scale: 2, dpi: 1080 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = (canvas.width * pdfWidth) / canvas.width;
    const imgHeight = (canvas.height * pdfHeight) / canvas.height;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  });
};
</script>

<template>
  <div class="wrapper">
    <div class="container-main" ref="resumeContent">
      <PersonalInfo />
      <Summary />
      <Experience />
      <Education />
      <Skills />
    </div>
    <nav>
      <button style="min-height: 1123px" @click="exportToPDF">
        Export to PDF
      </button>
    </nav>
  </div>
</template>

<style scoped></style>
