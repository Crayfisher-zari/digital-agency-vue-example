<script lang="ts" setup>
import Heading from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Heading.vue";
import Layout from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Layout.vue";
import BasicButton from "digital-agency-design-system/digital-agency-design-system-vue/src/components/BasicButton.vue";
import { useEmailInput } from "digital-agency-design-system/digital-agency-design-system-vue/src/composables/useEmailInput";
import { usePasswordInput } from "digital-agency-design-system/digital-agency-design-system-vue/src/composables/usePasswordInput";
const { UseEmailInputComponent } = useEmailInput();
const { UsePasswordInputComponent } = usePasswordInput();
const router = useRouter();
const handleLogin = () => {
  router.push("/onetime");
};
useHead({
  title: "ログイン",
  bodyAttrs: {
    class: "color-scheme-light",
  },
});
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  },
  middleware: (to, from) => {
    if (
      from.meta.pageTransition &&
      typeof from.meta.pageTransition !== "boolean" &&
      "name" in from.meta.pageTransition
    ) {
      from.meta.pageTransition.name =
        from.path === "/onetime" ? "slide-right" : undefined;
    }
    if (
      to.meta.pageTransition &&
      typeof to.meta.pageTransition !== "boolean" &&
      "name" in to.meta.pageTransition
    ) {
      to.meta.pageTransition.name =
        from.path === "/onetime" ? "slide-leftBack" : undefined;
    }
  },
});
</script>
<template>
  <Layout>
    <div class="colSpan-9">
      <Heading :headingLevel="1">ログイン</Heading>
      <div class="loginForm">
        <UseEmailInputComponent />
        <UsePasswordInputComponent />
        <small>※認証機能はなく、入力情報はどこにも送信されません。</small>
      </div>
      <div class="loginButtons">
        <BasicButton label="ログイン" @click="handleLogin" />
        <BasicButton label="新規登録" type="secondary" />
        <BasicButton label="パスワードをお忘れの方" type="tertiary" />
      </div>
    </div>
  </Layout>
</template>
<style scoped lang="scss">
.loginForm {
  display: grid;
  grid-auto-flow: row;
  row-gap: 16px;
}

.loginButtons {
  display: grid;
  grid-auto-flow: row;
  row-gap: 8px;
  margin-top: 40px;
}
</style>
