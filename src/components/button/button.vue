<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <button
    :type="native"
    :class="classes"
    @click="handleClick"
  >
    <template v-if="icon"><s-icon :type="icon"></s-icon></template>
    <span><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      native: {
        type: String,
        default: 'button',
        validator (val) {
          return ['button', 'submit', 'reset'].includes(val);
        }
      },
      type: {
        type: String,
        default: 'default',
        validator (val) {
          return ['default', 'primary', 'link'].includes(val);
        }
      },
      size: {
        type: String,
        validator (val) {
          return ['lg', 'sm'].includes(val);
        }
      },
      shape: {
        type: String,
        validator (val) {
          return ['angle'].includes(val);
        }
      },
      block: {
        type: Boolean,
        default: false
      },
      outline: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String
      }
    },
    data () {
      return {}
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event);
      }
    },
    computed: {
      classes () {
        return [
          's-button',
          {
            [`s-button-${this.type}`]: !!this.type,
            [`s-button-${this.size}`]: !!this.size,
            [`s-button-${this.shape}`]: !!this.shape,
            [`s-button-block`]: !!this.block,
            [`s-button-outline`]: !!this.outline,
          }
        ]
      }
    }
  }
</script>
