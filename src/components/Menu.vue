<template>
  <div class="menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<style lang="scss" scoped>
.menu {
  height: 40%;
  display: flex;
  border-top: 5px solid #666;
}
</style>
