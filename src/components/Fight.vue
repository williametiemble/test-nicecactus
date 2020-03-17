<template>
  <div class="fight">
    <Button class="bt-close" text="x" @bt-click="closeFight()" />
    <div class="fighter">
      <div class="left">
        <template v-if="isUser()">
          <div class="name">You</div>
          <component :is="'Avatar' + getPlayer" />
        </template>
        <template v-else>
          <div class="name">COM</div>
          <Avatar1 />
        </template>
      </div>
      <div class="right">
        <div class="name">Ennemi</div>
        <Avatar2 />
      </div>
    </div>
    <div v-if="played" class="results">
      <div class="choices">
        <div class="left">{{getChoiceLabel(choice1)}}</div>
        <div class="right">{{getChoiceLabel(choice2)}}</div>
      </div>
      <div class="winner">{{winner}}</div>
    </div>
    <div v-if="type === 'user'" class="action">
      <div class="title">Select your hand</div>
      <Button class="bt-action" text="Rock" @bt-click="play(0)" />
      <Button class="bt-action" text="Paper" @bt-click="play(1)" />
      <Button class="bt-action" text="Scissors" @bt-click="play(2)" />
    </div>
    <div v-else class="action">
      <div class="title">Watch a fight</div>
      <Button class="bt-action" text="Watch" @bt-click="play()" />
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
import Button from '@/components/Button.vue'

export default {
  name: 'Background',
  components: {
    Avatar1,
    Avatar2,
    Button,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      choice1: null,
      choice2: null,
      played: false,
    }
  },
  computed: {
    ...mapGetters({
      getPlayer: Getter.GET_PLAYER,
    }),
    winner () {
      let fighter = 'You'
      if (!this.isUser()) fighter = 'COM'
      if (this.choice1 === this.choice2) {
        return 'Egality'
      } else if (this.choice1 > this.choice2 || (this.choice1 === 0 && this.choice2 === 2)) {
        return fighter + ' Win'
      } else {
        return fighter + ' Loose'
      }
    },
  },
  methods: {
    isUser () {
      return this.type === 'user'
    },
    play (choice) {
      this.played = true
      if (!this.isUser()) {
        this.choice1 = this.getChoice()
      } else {
        this.choice1 = choice
      }
      this.choice2 = this.getChoice()
    },
    getChoice () {
      return Math.floor(Math.random() * Math.floor(3))
    },
    getChoiceLabel (choice) {
      if (choice === 0) return 'Rock'
      if (choice === 1) return 'Paper'
      return 'Scissors'
    },
    closeFight () {
      this.$emit('stop-fight')
    },
  },
}
</script>

<style lang="scss" scoped>
.fight {
  width: 100%;
  height: 100%;
  background: #9CC3D5FF;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1337;

  .bt-close {
    position: absolute;
    top: 10px;
    left: 0px;
    z-index: 666;
    width: 20px;
    font-size: 15px;
  }
  .fighter {
    text-align: center;

    > div {
      display: inline-block;
      margin-top: 20px;

      &.left {
        margin-right: 10%;
      }
      &.right {
        margin-left: 10%;
      }

      .name {
        color: #0063B2;
        font-size: 17px;
        font-weight: bold;
      }
    }
  }
  .choices {
    text-align: center;
    margin-top: 10px;

    > div {
      border: 3px solid #666;
      background: #0063B2;
      display: inline-block;
      padding: 15px;
      border-radius: 15px;
      color: #fff;
      text-transform: uppercase;
      margin-left: 3%;
      margin-right: 3%;
      font-weight: bold;
    }
  }
  .winner {
    text-align: center;
    color: #0063B2;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }
  .action {
    text-align: center;
    position: absolute;
    bottom: 25px;
    width: 100%;

    .title {
      font-size: 18px;
      margin-bottom: 20px;
      color: #fff;
      font-weight: bold;
    }
    .bt-action {
      display: inline-block;
      margin-left: 3%;
      margin-right: 3%;
      width: initial;
    }
  }
}
</style>
