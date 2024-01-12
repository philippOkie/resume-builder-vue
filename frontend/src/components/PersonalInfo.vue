<template>
  <div>
    <h2>PERSONAL INFORMATION</h2>
    <div class="line"></div>
    <form @submit.prevent="savePersonalInfo">
      <input
        type="text"
        placeholder="Full name"
        v-model="fullName"
        @input="updateFullName"
      />

      <input
        type="text"
        placeholder="Email"
        v-model="email"
        @input="updateEmail"
      />

      <input
        type="text"
        placeholder="Address"
        v-model="address"
        @input="updateAddress"
      />

      <input
        type="text"
        placeholder="Phone number"
        v-model="phoneNumber"
        @input="updatePhoneNumber"
      />
      <!-- <button type="submit">Save</button> -->
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
    updateFullName() {
      console.log("Updating Full Name:", this.fullName);
    },
    updateEmail() {
      console.log("Updating Email:", this.email);
    },
    updateAddress() {
      console.log("Updating Address:", this.address);
    },
    updatePhoneNumber() {
      console.log("Updating Phone Number:", this.phoneNumber);
    },
  },
};
</script>

<style scoped></style>
