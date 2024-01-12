<template>
  <div>
    <h2>Personal Information</h2>
    <form @submit.prevent="savePersonalInfo">
      Full name
      <input type="text" placeholder="Full name" v-model="fullName" />
      Email
      <input type="text" placeholder="Email" v-model="email" />
      Address
      <input type="text" placeholder="Address" v-model="address" />
      Phone number
      <input type="text" placeholder="Phone number" v-model="phoneNumber" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
    };
  },
  methods: {
    savePersonalInfo() {
      console.log("Full Name:", this.fullName);
      console.log("Email:", this.email);
      console.log("Address:", this.address);
      console.log("Phone number", this.phoneNumber);
    },
  },
};
</script>

<style scoped></style>
