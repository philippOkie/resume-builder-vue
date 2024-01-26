<template>
  <div>
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

<style scoped>
.summary-textarea {
  width: 95%;
  padding: 10px;
  min-height: 100px;
  border: none;
  outline: none;
  resize: none;

  font-size: 1rem;
  line-height: 1.5;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: #fff;
  transition: 0.7s ease-in-out;
}

.summary-textarea:focus,
.summary-textarea:hover {
  background-color: #e0e0e0;
}
</style>
