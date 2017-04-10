<!--
 - Header
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>

  <header class="header" :class="classes">
    <slot>
      <div class="header-l" v-if="left">
        <slot name="left">
          <div @click="back()" class="header-back">
            <s-icon type="back"></s-icon>
          </div>
        </slot>
      </div>
      <div class="header-c" v-if="title">
        <slot name="title">
          <h1 class="header-title">{{title}}</h1>
        </slot>
      </div>
      <div class="header-r" v-if="right">
        <slot name="right"></slot>
      </div>
    </slot>
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
          return ['default', 'white'].includes(val)
        }
      },
      left: {
        type: Boolean,
        default: true
      },
      title: {
        type: String
      }
    },
    data () {
      return {
        right: false
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
      }
    },
    created () {
      this.right = !!this.$slots.right;
    }
  }
</script>
