<!--
 - Tabs
 -
 - author: Storm
 - date: 2017/04/10
 -->

<template>
  <div class="s-tabs" :class="classes">
    <div class="s-tabs-nav">
      <ul>
        <li
          v-for="nav in navList"
          :class="nav._uid === activeIndex ? 'on' : ''"
          @click="changeNav(nav._uid)"
          class="s-tabs-nav-item">{{nav.label}}</li>
      </ul>
    </div>
    <div class="s-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      value: {
        type: [String, Number],
        default: 0
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (val) {
          return ['horizontal', 'vertical'].includes(val);
        }
      }
    },
    data () {
      return {
        navList: [],
        activeIndex: this.value
      }
    },
    computed: {
      classes () {
        return {
          [`s-tabs-${this.direction}`]: !!this.direction
        }
      }
    },
    methods: {
      changeNav (id) {
        if (this.activeIndex === id) return false;
        this.activeIndex = id;
        this.$emit('input', id);
      },
      getPanel () {
        return this.$children.filter(item => item.$options.name === 'TabsPanel');
      },
      init () {
        const tabPanels = this.getPanel();
        let num = 0;
        tabPanels.forEach((panel) => {
          this.navList.push({
            label: panel.label,
            _uid: panel._uid
          });
          if (panel.active) {
            this.activeIndex = panel._uid;
          } else {
            ++num;
            if (num >= tabPanels.length)
              this.activeIndex = tabPanels[0]._uid;
          }
        });
      }
    },
    watch: {
      value (val) {
        this.activeIndex = val;
      }
    },
    mounted () {
      this.init();
    }
  }
</script>
