<script lang="ts" setup>
import Heading from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Heading.vue";
import Layout from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Layout.vue";
import TextInput from "digital-agency-design-system/digital-agency-design-system-vue/src/components/TextInput.vue";
import BasicButton from "digital-agency-design-system/digital-agency-design-system-vue/src/components/BasicButton.vue";
const router = useRouter();

useHead({
  title: "ワンタイムパスワード",
  bodyAttrs: {
    class: "color-scheme-light",
  },
});
definePageMeta({
  pageTransition:{
    name:"slide-right",
    mode:"out-in"
  },
  middleware: (to, from) => {
    if (
      from.meta.pageTransition &&
      typeof from.meta.pageTransition !== "boolean" &&
      "name" in from.meta.pageTransition
    ) {
      from.meta.pageTransition.name =
        from.path === "/" ? "slide-left" : "slide-right";
    }
    if (
      to.meta.pageTransition &&
      typeof to.meta.pageTransition !== "boolean" &&
      "name" in to.meta.pageTransition
    ) {
      to.meta.pageTransition.name =
        from.path === "/" ? "slide-left" :  "slide-leftBack";
    }
  },
});

const handleBack = ()=>{
  router.push("/");
}
const password = ref("");

watch(password,()=>{
  if(password.value.length > 5){
    router.push("/examples")
  }
  
})
</script>
<template>
  <Layout>
    <div class="colSpan-9 oneTime">
      <Heading :headingLevel="1">多要素認証が必要です</Heading>
      <p>〇〇アプリに表示されているワンタイムパスワードを入力してください</p>
      <TextInput
        v-model="password"
        label="ワンタイムパスワード"
        type="text"
        placeHolder="000000"
      />
      <small>※認証機能はなく、入力情報はどこにも送信されません。</small>
      <BasicButton label="アプリをダウンロードしていない方はこちら" type="tertiary" @click="handleBack" />
      <BasicButton label="戻る" type="secondary" @click="handleBack" class="backButton"/>
    </div>
  </Layout>
</template>
<style lang="scss">
.oneTime{
  display: grid;
  grid-auto-flow: row;
  row-gap: 16px;
}

.backButton{
  margin-top: 16px;
}
</style>