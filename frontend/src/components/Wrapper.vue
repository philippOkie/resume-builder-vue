<template>
  <div>
    <h2>
      <slot name="title">{{ title }}</slot>
    </h2>
    <div class="line"></div>
    <slot name="component"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
h2 {
  color: #161a30;
  font-size: 1.5rem;
  margin-bottom: 4px;
  margin-top: 8px;
}
</style>
