<template>
  <div>
    <el-button @click="$router.push({ name: 'publicDataOne' })">
      Page One
    </el-button>
    <div>{{ users }}</div>
  </div>
</template>
<script>
import { user } from "@/model";
export default {
  name: "public-data-page-two",
  data() {
    return {
      users: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.users = await user.getUsers();
    }
  }
};
</script>
<style lang="scss" scoped></style>
