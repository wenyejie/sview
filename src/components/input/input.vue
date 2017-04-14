<!--
 - Input
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <div class="s-input" :class="classes">
    <div class="s-input-left" v-if="left"><slot name="left"></slot></div>
    <input
      class="s-input-box"
      :disabled="disabled"
      :placeholder="placeholder"
      :minlength="minlength"
      :maxlength="maxlength"
      :name="name"
      :value="val"
      :type="type"
      @keyup.enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @input="handleInput"
    >
    <div class="s-input-right" v-if="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: {
        type: [Number, String]
      },
      type: {
        type: String,
        default: 'text'
      },
      block: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      placeholder: {
        type: String
      },
      minlength: {
        type: [Boolean, String]
      },
      maxlength: {
        type: [Boolean, String]
      },
      name: {
        type: String
      }
    },
    data () {
      return {
        val: this.value,
        left: false,
        right: false
      }
    },
    computed: {
      classes () {
        return {
          [`s-input-block`]: !!this.block
        };
      }
    },
    watch: {
      value (val) {
        this.val = val;
      }
    },
    methods: {
      handleEnter ($event) {
        this.$emit('enter', $event);
      },
      handleFocus ($event) {
        this.$emit('focus', $event);
      },
      handleBlur ($event) {
        this.$emit('blur', $event);
      },
      handleChange ($event) {
        this.$emit('change', $event);
      },
      handleInput ($event) {
        const value = $event.target.value;
        this.$emit('input',value);
      }
    },
    mounted () {
      this.left = !!this.$slots.left;
      this.right = !!this.$slots.right;
    }
  }
</script>
