<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locale from "ant-design-vue/es/locale/zh_CN";

export default defineComponent({
  setup() {
    return { locale };
  }
});
</script>

<style scoped></style>
