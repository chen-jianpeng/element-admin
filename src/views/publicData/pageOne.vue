<template>
  <div>
    <el-button @click="$router.push({ name: 'publicDataTwo' })">
      Page Two
    </el-button>
    <div>{{ users }}</div>
  </div>
</template>
<script>
import { user } from "@/model";
export default {
  name: "public-data-page-one",
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
