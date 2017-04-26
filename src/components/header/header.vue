<!--
 - Header
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>

  <header class="header" :class="classes">
    <div class="header-l" v-if="left">
      <slot name="left">
        <div @click="back()" class="header-back"></div>
      </slot>
    </div>
    <div class="header-c" v-if="center">
      <h1 class="header-title">
        <slot></slot>
      </h1>
    </div>
    <div class="header-r" v-if="right">
      <slot name="right"></slot>
    </div>
  </header>

</template>

<script>
  export default {
    name: 'Header',
    props: {
      type: {
        type: String,
        default: 'default',
        validator (val) {
          return ['default', 'white', 'transparent'].includes(val)
        }
      },
      left: {
        type: Boolean,
        default: true
      },
      title: String
    },
    data () {
      return {
        right: false,
        center: false
      }
    },
    computed: {
      classes () {
        return {
          [`header-${this.type}`]: this.type
        };
      }
    },
    methods: {
      back () {
        window.history.back();
      },

      setTitle () {
        if (this.$slots.default) {
          document.title = this.$slots.default[0].text + ' - 闪电虎';
        } else if (this.title) {
          document.title = this.title + ' - 闪电虎';
        } else {
          document.title = '闪电虎';
        }
      }
    },
    created () {
      this.right = !!this.$slots.right;
      this.center = !!this.$slots.default;
      this.setTitle()
    }
  }
</script>
