<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="s-checkbox-group" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CheckboxGroup',
    props: {
      value: {
        type: Array,
        default: []
      },
      size: String,
      type: {},
      vertical: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        groups: this.value,
        oldVal: null
      }
    },
    methods: {
      update () {
        const value = this.value;

        // 遍历所有子元素，给予选中/不选中
        this.groups.forEach(item => {
          this.$children.forEach(child => {
            child.val = child.label === value;
          });
        });
      },
      change (value) {
        if (this.oldVal === value) return false;
        this.oldVal = value;
        this.updateGroups(value);
      },
      updateGroups (val) {

        if (this.groups.includes(val)) {
          this.groups.splice(this.groups.indexOf(val), 1);
        } else {
          this.groups.push(val);
        }
        this.$emit('input', this.groups);
        this.$emit('change', this.groups);
      }
    },
    computed: {
      classes () {
        return {
          [`s-checkbox-group-${this.size}`]: !!this.size,
          [`s-checkbox-group-${this.type}`]: !!this.type,
          [`s-checkbox-group-vertical`]: this.vertical
        }
      }
    },
    mounted () {
      this.update();
      this.change(this.value);

    },
    watch: {
      value (val, oldVal) {
        if (val !== oldVal) {
          this.update();
          this.change(val);
        }
      }
    }
  }
</script>

<style scoped>
</style>
