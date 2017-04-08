<!--
 - author: Storm
 - date: 2017/04/01
 -->

<template>
    <input
      :checked="checked"
      :disabled="disabled"
      :name="name"
      @change="handleChange"
      @click="handleClick"
      type="checkbox"
      class="s-switch"
    >
</template>

<script>
  export default {
    name: 'Switch',
    props: {
      value: {
        type: Boolean
      },
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      },
      disabled: {
        type: Boolean
      },
      name: {
        type: String
      },
      checked: {
        type: Boolean
      }
    },
    data () {
      return {
        isChecked: this.checked,
        val: this.value
      }
    },
    methods: {
      handleChange ($event) {
        this.$emit('change', this.isChecked ? this.trueValue : this.falseValue, $event);
      },
      handleClick ($event) {
        this.isChecked = $event.target.checked;
        this.$emit('input', $event.target.checked ? this.trueValue : this.falseValue);
      }
    },
    created() {
      this.$emit('input', this.isChecked ? this.trueValue : this.falseValue);
    },
    watch: {
      value () {
        this.isChecked = this.value === this.trueValue;
      }
    }
  }
</script>
