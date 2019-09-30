<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import { Container, Aside, Header, Main, Footer } from "element-ui";
export default {
  name: "three-column-layout",
  components: {
    "el-container": Container,
    "el-aside": Aside,
    "el-header": Header,
    "el-main": Main,
    "el-footer": Footer
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
