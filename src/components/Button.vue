<template>
  <div class="ppc-button" @click="goTo(route)">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    route: {
      type: Object,
      default: null,
    },
  },
  methods: {
    goTo (route) {
      if (route) {
        this.$router.push(route)
      } else {
        this.$emit('bt-click')
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.ppc-button {
  background: #0063B2;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  width: 50%;
  margin: auto;
  margin-left: 5%;
  margin-right: 5%;
  padding: 15px;
  border-radius: 50px;
  border: 5px solid #fff;
  cursor: pointer;

  &:hover {
    background: #2F6545;
  }
}
</style>
