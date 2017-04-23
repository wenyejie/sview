<!--
 - Popup
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <transition :name="`s-popup-${direction}`">
    <div
      v-show="visible"
      class="s-popup"
      :style="styles"
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
      },
      direction: {
        type: String,
        default: 'bottom',
        validator (val) {
          return ['top', 'right', 'bottom', 'left'].includes(val);
        }
      },

      position: {
        type: String,
        validator (val) {
          return ['fixed', 'absolute'].includes(val);
        }
      },

    },
    data () {
      return {
        visible: this.value
      }
    },
    computed: {
      classes () {
        return {
          [`s-popup-${this.direction}`]: !!this.direction
        }
      },
      styles () {
        let result = {};
        if (this.position) result.position = this.position;
        return result;
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
