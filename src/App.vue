<template>
  <div id="app">
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions,
} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      getPlayer: 'getPlayer',
    }),
  },
  methods: {
    ...mapActions({
      getPlayerSaved: 'getPlayerSaved',
    }),
  },
  async created() {
    await this.getPlayerSaved()
    if (!this.getPlayer) {
      this.$router.push({name:'avatar'})
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/global.scss';

#app {
  width: 100%;
  height: 100%;
  display: flex;

  #container {
    width: 100%;
    max-width: $screen_xxs;
    margin: auto;
    height: 90%;
    background: #9CC3D5FF;
    border: 16px solid #0063B2;
    border-radius: 50px;
    box-shadow: 0px 0px 6px #0063B2;
    overflow: hidden;
  }
}
</style>
