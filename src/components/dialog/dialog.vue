<!--
 - author: Storm
 - date: 2017/03/29
 -->

<template>
  <transition name="s-dialog">
    <section
      class="s-dialog"
      :class="classes"
      v-show="visible">
      <div class="s-dialog-mark"></div>
      <div class="s-dialog-content" :style="contentStyles">
        <a v-if="showClose" class="s-dialog-close s-icon s-icon-close"></a>
        <header v-if="showHeader" class="s-dialog-header">
          <h4>
            <slot name="header">{{title}}</slot>
          </h4>
        </header>
        <div class="s-dialog-body">
          <slot>
            <div v-html="body"></div>
          </slot>
        </div>
        <footer v-if="showFooter" class="s-dialog-footer">
          <slot name="footer">
            <button v-if="showCancel" @click="cancel" class="s-dialog-cancel">{{cancelText}}</button>
            <button v-if="showOk" @click="ok" type="primary" class="s-dialog-ok">{{okText}}</button>
          </slot>
        </footer>
      </div>
    </section>
  </transition>
</template>

<script>
  export default {
    name: 'Dialog',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '提示'
      },
      showCancel: {
        type: Boolean,
        default: true
      },
      showOk: {
        type: Boolean,
        default: true
      },
      showHeader: {
        type: Boolean,
        default: false
      },
      showFooter: {
        type: Boolean,
        default: true
      },
      showBackground: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: ''
      },
      backgroundClose: {
        type: Boolean,
        default: false
      },
      showClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      okText: {
        type: String,
        default: '确定'
      },
      duration: {
        type: Number,
        default: 0
      },
      body: {
        type: String
      },
      size: {
        type: String,
        default: '',
        validator (val) {
          return ['lg', 'sm', 'auto', ''].includes(val);
        }
      },
      width: {
        type: [Number, String]
      }
    },
    data () {
      return {
        visible: this.value
      }
    },
    methods: {
      ok () {
        this.$emit('ok');
        this.remove();
      },
      cancel () {
        this.$emit('cancel');
        this.remove();
      },
      remove () {
        document.body.classList.remove('s-dialog-overflow');
        this.visible = false;
        this.$emit('input', false);
      },
      countdown () {
        clearTimeout(this.timer);
        this.timer = setTimeout(this.remove, this.duration);
      }
    },
    computed: {
      classes () {
        return {
          [`s-dialog-${this.size}`]: !!this.size
        }
      },
      contentStyles () {
        return {
          width: this.width + (/^\d+$/.test(this.width) ? 'px' : '')
        };
      }
    },
    watch: {
      value (val) {
        this.visible = val;
      }
    },
    mounted () {
      document.body.classList.add('s-dialog-overflow');
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
