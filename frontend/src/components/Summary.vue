<template>
  <div>
    <h2>SUMMARY</h2>
    <div class="line"></div>

    <textarea
      class="summary-textarea"
      oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
      type="text"
      v-model="summary"
      placeholder="Write about yourself!"
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
