<script>
useHead({
  bodyAttrs: {
    class: "color-scheme-light",
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">

.slide-left-enter-active,
.slide-left-leave-active,
.slide-leftBack-enter-active,
.slide-leftBack-leave-active,
.slide-right-enter-active,
.slide-right-leave-active,
.slide-rightBack-enter-active,
.slide-rightBack-leave-active {
  transition: transform var(--base-duration) var(--easing-out-expo),opacity var(--base-duration) var(--easing-out-expo);
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-leftBack-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-leftBack-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>
