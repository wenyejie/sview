<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
  const prefix = 's-icon';

  export default {
    name: 'Icon',
    props: {
      type: String,
      size: [Number, String],
      color: String
    },
    computed: {
      classes () {
        return `${prefix} ${prefix}-${this.type}`;
      },
      styles () {
        let css = {};
        if (this.size) {
          css['font-size'] = `.${this.size}rem`;
        }

        if (this.color) {
          css.color = this.color;
        }
        return css;
      }
    }
  }
</script>
