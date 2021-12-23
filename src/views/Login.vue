<template>
  <div>
    <h1>Permission</h1>

    <p>
      <button @click="loginToAdmin">Admin</button>
      <button @click="loginToUser">User</button>
    </p>
  </div>
</template>

<script lang="ts">
import { PERMISSION_TYPE } from "@/constants/permission.constants";
import { defineComponent } from "vue";
import memberStore from "@/store/member";

export default defineComponent({
  name: "Login",
  setup() {
    const loginTo = (permission: PERMISSION_TYPE) => {
      memberStore.setPermission(permission);
      console.log("loginTo", memberStore.userPermission);
    };

    const loginToAdmin = () => {
      loginTo(PERMISSION_TYPE.ADMIN);
    };

    const loginToUser = () => {
      loginTo(PERMISSION_TYPE.USER);
    };

    return {
      loginToAdmin,
      loginToUser,
    };
  },
});
</script>

<style></style>
