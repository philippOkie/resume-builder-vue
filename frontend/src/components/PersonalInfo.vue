<template>
  <div>
    <div class="p-info-wrapper">
      <input
        class="full-name"
        type="text"
        placeholder="Full name"
        v-model="fullName"
        @input="updateFullName"
      />

      <input
        class="position"
        type="text"
        placeholder="Position"
        v-model="position"
        @input="addPosition"
      />

      <input
        type="text"
        class="p-info-inputs"
        placeholder="Email"
        v-model="email"
        @input="updateEmail"
      />

      <input
        type="text"
        class="p-info-inputs"
        placeholder="Phone number"
        v-model="phoneNumber"
        @input="updatePhoneNumber"
      />

      <input
        type="text"
        class="p-info-inputs"
        placeholder="Address"
        v-model="address"
        @input="updateAddress"
      />

      <input
        type="text"
        class="p-info-inputs"
        placeholder="LinkedIn"
        v-model="linkedIn"
        @input="addLinkedIn"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: "",
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
      linkedIn: "",
    };
  },
  methods: {
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
    addPosition() {
      console.log("Updating position:", this.position);
    },
    addLinkedIn() {
      console.log("Updating linkedin:", this.linkedIn);
    },
  },
};
</script>

<style scoped>
.full-name {
  font-size: 2rem;
  font-weight: bold;
}

.position {
  font-size: 1.7rem;
}

.p-info-inputs {
  font-size: 1.2rem;
}

.p-info-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-row-gap: 10px;
}
</style>
