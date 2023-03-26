<template>
  <div class="globalWrapper">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/style/utils/utils.scss" as *;
.globalWrapper {
  max-width: 1104px;
  padding: 0 40px;
  margin: 0 auto;
  @include mediaQueryDown {
    padding: 0 16px;
  }
}


</style>
