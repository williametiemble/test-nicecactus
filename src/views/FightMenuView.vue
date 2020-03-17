<template>
  <div class="fight-menu">
    <Button text="<" :route="{name:'home'}" class="bt-back" />
    <Fight v-if="fight" :type="type" @stop-fight="stopFight()" />
    <Background picture="bg-elementary.jpg" />
    <Menu>
      <Button text="You vs Ennemy" @bt-click="startFight('user')" />
      <Button text="Com vs Ennemy" @bt-click="startFight('com')" />
    </Menu>
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import Menu from '@/components/Menu.vue'
import Button from '@/components/Button.vue'
import Fight from '@/components/Fight.vue'

export default {
  name: 'FightMenuView',
  components: {
    Background,
    Menu,
    Button,
    Fight,
  },
  data () {
    return {
      fight: false,
      type: 'user',
    }
  },
  methods: {
    startFight (type) {
      this.fight = true
      this.type = type
    },
    stopFight () {
      this.fight = false
    }
  },
}
</script>

<style lang="scss" scoped>
.fight-menu {
  height: 100%;
  position: relative;

  .bt-back {
    position: absolute;
    top: 10px;
    left: 0px;
    z-index: 666;
    width: 20px;
    font-size: 15px;
  }
}
</style>