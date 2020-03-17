<template>
  <div class="background">
    <img :src="require(`@/assets/img/${picture}`)" />
    <div v-if="getPlayer" class="avatar-selected">
      <component :is="'Avatar' + getPlayer" />
    </div>
  </div>
</template>

<script>

import {
  mapGetters,
} from '@/store/modules/ppc-southpark'
import { Getter } from '@/store/modules/ppc-southpark/types'
import {
  Avatar1,
  Avatar2,
} from '@/plugins/Avatar';

export default {
  name: 'Background',
  components: {
    Avatar1,
    Avatar2,
  },
  props: {
    picture: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getPlayer: Getter.GET_PLAYER,
    }),
  },
}
</script>

<style lang="scss" scoped>
.background {
  height: 60%;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .avatar-selected {
    position: absolute;
    bottom: 0;
    right: 20%;
  }
}
</style>
