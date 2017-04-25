<!--
 - Search
 -
 - author: Storm
 - date: 2017/04/13
 -->

<template>
  <form class="s-search" @submit.prevent="handleSubmit" :class="classes">
    <label class="s-search-label">
      <s-icon type="search" class="s-search-icon"></s-icon>
      <input type="search"
             class="s-search-input"
             :placeholder="placeholder"
             :name="name"
             v-model="searchKey"
             @input="handleInput"
             @keyup.enter="handleEnter">
    </label>
    <button class="s-search-btn"
            type="button"
            @click="handleButtonClick">{{text}}</button>
  </form>
</template>

<script>
  export default {
    name: 'Search',
    props: {
      value: [String, Number],
      name: String,
      placeholder: String,
      text: {
        type: String,
        default: '取消'
      },
      type: {
        type: String,
        validator (val) {
          return ['primary'].includes(val);
        }
      }
    },
    data () {
      return {
        searchKey: this.value
      }
    },
    computed: {
      classes () {
        return {
          [`s-search-${this.type}`]: !!this.type
        }
      }
    },
    methods: {
      handleInput () {
        this.$emit('on-input', this.searchKey);
      },
      handleSubmit ($event) {
        this.$emit('on-submit', $event);
      },
      handleEnter ($event) {
        this.$emit('enter', $event);
      },
      handleButtonClick ($event) {
        this.$emit('on-button-click', $event);
      }
    }
  }
</script>
