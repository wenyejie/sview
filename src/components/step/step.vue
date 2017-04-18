<!--
 - Step
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <li class="s-step" :class="'s-step-' + status">
    <div class="s-step-desc" v-if="hasDesc"><slot></slot></div>
    <div class="s-step-label">{{label}}</div>
  </li>
</template>

<script>
  export default {
    name: 'Step',
    props: {
      label: String
    },
    data () {
      return {
        status: '',
        hasDesc: true
      }
    },
    methods: {
      init () {

        const activeIndex = this.$parent.activeIndex;
        const status = this.$parent.status;
        const _uid = this._uid;
        let currentIndex = 0;
        for (let index in this.$parent.$children) {
          if (_uid === this.$parent.$children[index]._uid) {
            currentIndex = parseInt(index);
            break;
          }
        }

        if (activeIndex > currentIndex) {
          this.status = 'success';
        } else if (activeIndex < currentIndex) {
          this.status = 'default';
        } else {
          this.status = status;
        }

      }
    },
    mounted () {
      this.init();
      this.hasDesc = !!this.$slots.default;
    }
  }
</script>
