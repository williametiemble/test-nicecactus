<template>
  <div class="home">
    <Background picture="bg-bus-stop.jpg" />
    <Menu>
      <Button class="bt-home" text="Fight" :route="{name:'fightMenu'}"/>
      <!-- <Button text="Story" :route="{name:'story'}"/> -->
    </Menu>
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import Menu from '@/components/Menu.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'HomeView',
  components: {
    Background,
    Menu,
    Button,
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  .bt-home {
    margin: auto;
  }
}
</style>