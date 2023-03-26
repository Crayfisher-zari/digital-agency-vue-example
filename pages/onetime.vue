<script lang="ts" setup>
import Heading from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Heading.vue";
import Layout from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Layout.vue";
import TextInput from "digital-agency-design-system/digital-agency-design-system-vue/src/components/TextInput.vue";
definePageMeta({
  pageTransition: {
    name: "slide-left",
    mode: "out-in",
  },
  middleware: (to, from) => {
    console.log("onetime");
    if (
      from.meta.pageTransition &&
      typeof from.meta.pageTransition !== "boolean" &&
      "name" in from.meta.pageTransition
    ) {
      from.meta.pageTransition.name =
        from.path === "/" ? "slide-left" : undefined;
    }
    if (
      to.meta.pageTransition &&
      typeof to.meta.pageTransition !== "boolean" &&
      "name" in to.meta.pageTransition
    ) {
      to.meta.pageTransition.name =
        from.path === "/" ? "slide-left" : undefined;
    }
  },
});
const password = ref("");
</script>
<template>
  <Layout>
    <div class="colSpan-9">
      <Heading :headingLevel="1">多要素認証が必要です</Heading>
      <p>〇〇アプリに表示されているワンタイムパスワードを入力してください</p>
      <TextInput
        v-model="password"
        label="ワンタイムパスワード"
        type="text"
        placeHolder="000000"
      />
    </div>
  </Layout>
</template>
