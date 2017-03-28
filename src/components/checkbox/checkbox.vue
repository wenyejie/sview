<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <label class="s-checkbox" :class="classes">
    <input
      class="s-checkbox-input"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :checked="val"
      @change="change"
    >
    <span class="s-checkbox-inner"></span>
    <span class="s-checkbox-text"><slot>{{label}}</slot></span>
  </label>
</template>

<script>
  import './checkbox.scss';
  export default {
    name: 'Checkbox',
    props: {
      value: {},
      type: {
        type: String
      },
      size: {},
      label: {
        type: [String, Number]
      },
      name: String,
      disabled: Boolean
    },

    data () {
      return {
        isGroup: false,
        val: this.value
      }
    },
    methods: {
      change (event) {

        // 如果radio被禁用则推出change事件
        if (this.disabled) return false;

        // 更改当前值并向上传递
        const checked = event.target.checked;
        this.val = checked;
        this.$emit('input', checked);

        // 如果是group则向上传递事件
        if (this.isGroup) {
          this.$parent.change(this.label);
        }

      }
    },
    mounted () {

      // one of radio group?
      if (this.$parent.$options.name === 'CheckGroup') {
        this.isGroup = true;
      }

    },
    computed: {
      classes () {
        return {
          's-checkbox-disabled': !!this.disabled,
          [`s-checkbox-${this.type}`]: !!this.type
        }
      }
    },
    watch: {
      value (val) {
        this.val = val;
      }
    }
  }
</script>
