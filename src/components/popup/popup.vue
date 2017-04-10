<!--
 - Popup
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <transition name="s-popup">
    <div
      v-show="visible"
      class="s-popup"
      :class="classes">
      <div
        class="s-popup-mask"
        :style="maskStyles"
        @click="cancel()"></div>
      <div class="s-popup-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Popup',
    props: {
      value: {
        type: Boolean
      },
      bgc: {
        type: String
      },
      maskClose: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        visible: this.value
      }
    },
    computed: {
      classes () {
        return {

        }
      },
      maskStyles () {
        let result = {};
        if (this.bgc) result['background-color'] = this.bgc;
        return result;
      }
    },
    watch: {
      value (val) {
        this.visible = val;
      }
    },
    methods: {
      cancel () {
        if (!this.maskClose) return false;
        this.visible = false;
        this.$emit('input', false);
      }
    }
  }
</script>
