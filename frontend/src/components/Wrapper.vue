<template>
  <div>
    <h2><slot name="title"></slot></h2>
    <slot name="line"></slot>
    <slot name="component"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  components: {},
};
</script>

<style scoped>
.line {
  width: 774px;
  border-bottom: 2px solid #161a30;
  margin-bottom: 8px;
}

h2 {
  color: #161a30;
  font-size: 1.5rem;
  margin-bottom: 4px;
  margin-top: 8px;
}
</style>
