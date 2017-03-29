<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <button
    :type="native"
    :class="classes"
  >
    <template v-if="icon"><icon :type="icon"></icon></template>
    <slot></slot>
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
        validator (val) {
          return ['primary', 'info', 'success', 'warning', 'danger'].includes(val);
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
          return ['shape'].includes('val');
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
    methods: {},
    computed: {
      classes () {
        return [
          's-button',
          {
            [`s-button-${this.type}`]: !!this.type,
            [`s-button-${this.size}`]: !!this.size,
            [`s-button-block`]: !!this.block,
            [`s-button-outline`]: !!this.outline,
          }
        ]
      }
    }
  }
</script>
