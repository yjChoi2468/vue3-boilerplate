<template>
  <div>
    <h1>Permission</h1>

    <p>
      <button :click="() => console.log('Admin')">Admin</button>
      <button :click="() => console.log('User')">User</button>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
});
</script>

<style></style>
