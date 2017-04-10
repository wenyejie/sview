<!--
 - author: Storm
 - date: 2017/04/29
 -->

<template>
  <transition name="s-message">
    <section
      class="s-message"
      :class="classes"
      v-show="visible">
      <div v-if="showMark" class="s-message-mark"></div>
      <div class="s-message-content">
        <div v-if="type" class="s-message-icon" :class="iconClasses">
          <s-icon :type="icon"></s-icon>
        </div>
        <slot>
          <div v-html="body"></div>
        </slot>
      </div>
    </section>
  </transition>
</template>

<script>
  export default {
    name: 'Message',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      showMark: {
        type: Boolean,
        default: true
      },
      duration: {
        type: Number,
        default: 3000
      },
      body: {
        type: String
      },
      type: {
        type: String
      },
      icon: {
        type: String
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
          [`s-message-${this.type}`]: !!this.type,
          [`s-message-hasIcon`]: !!this.type
        };
      },
      iconClasses () {
        return {
          [`s-message-icon-${this.type}`]: !!this.type
        }
      }
    },
    methods: {
      ok () {
        this.$emit('ok');
        this.remove();
      },
      remove () {
        document.body.classList.remove('s-message-overflow');
        this.visible = false;
        this.$emit('input', false);
      },
      countdown () {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.ok, this.duration);
      }
    },
    watch: {
      value (val) {
        this.visible = val;
      }
    },
    mounted () {
      if (this.duration > 0) {
        this.countdown();
      } else {
        clearTimeout(this.timer);
      }
    }
  }
</script>

<style scoped>
</style>
