<template>
  <div class="avatar">
    <div class="avatar-selected">
      <component :is="'Avatar' + avatar" />
    </div>
    <div class="choices">
      <div class="title">Select your avatar</div>
      <Button class="bt-avatar" text="Eric" @bt-click="selectAvatar(1)" />
      <Button class="bt-avatar" text="Stan" @bt-click="selectAvatar(2)" />
    </div>
    <div class="action">
      <Button class="bt-action" text="Save" @bt-click="saveAvatar()" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import {
  Avatar1,
  Avatar2,
} from '@/plugins/Avatar/index.js'
import {
  mapActions,
} from 'vuex'


export default {
  name: 'AvatarView',
  components: {
    Avatar1,
    Avatar2,
    Button
  },
  data () {
    return {
      avatar: 2,
    }
  },
  methods: {
    ...mapActions({
      savePlayer: 'savePlayer',
    }),
    selectAvatar (value) {
      this.avatar = value
    },
    saveAvatar () {
      this.savePlayer(this.avatar)
      this.$router.push({name:'home'})
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  height: 100%;
  position: relative;

  .avatar-selected {
    text-align: center;
  }
  .choices {
    text-align: center;

    .title {
      font-size: 18px;
      margin-bottom: 20px;
      color: #fff;
      font-weight: bold;
    }
    .bt-avatar {
      display: inline-block;
      width: 30%;
    }
  }
  .action {
    text-align: center;
    position: absolute;
    bottom: 25px;
    width: 100%;

    .bt-action {
      margin: auto;
    }
  }
}
</style>