<template>
  <div class="layout-view">
      <AppHeader></AppHeader>
      <router-view></router-view>
      <AppFooter></AppFooter>
    </div>
</template>

<script>
import AppHeader from '@/Layout/components/AppHeader.vue'
import AppFooter from '@/Layout/components/AppFooter.vue'
  export default {
    components:{AppHeader, AppFooter}
  }
</script>

<style lang="scss" scoped>

</style>