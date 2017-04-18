<!--
 - 表单下拉控件
 -
 - author: Storm
 - date: 2017/04/18
 -->

<template>
  <div class="s-form-select">

    <div class="s-cell" :class="classes" @click="handleClick">
      <div class="s-cell-left" v-html="label"></div>
      <div class="s-cell-right">
        <span class="s-placeholder" v-if="!subLabel">{{placeholder}}</span>
        <span class="s-value" v-if="subLabel">{{subLabel}}</span>
        <s-icon type="fold" :class="{'s-form-select-fold': fold}"></s-icon>
      </div>
    </div>

    <transition name="s-form-select">
      <ul class="s-form-select-list" v-show="fold" :style="listStyles">
        <li class="s-form-select-item"
            v-for="item in opts"
            :class="{'selected': item.selected}"
            @click="selectItem(item)">{{item[name]}}</li>
      </ul>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'formSelect',
    props: {
      value: {},
      label: [Number, String],
      placeholder: String,
      required: Boolean,
      disabled: Boolean,
      readonly: Boolean,
      state: Boolean,
      options: {
        type: [Object, Array],
        default () {
          return [];
        }
      },
      name: String,
      val: String
    },
    data () {
      return {
        fold: this.state,
        subLabel: null,
        selected: null,
        opts: this.options
      }
    },
    computed: {
      classes () {
        return {
          [`s-form-required`]: !!this.required,
          [`s-form-disabled`]: !!this.disabled,
          [`s-form-readonly`]: !!this.readonly
        }
      },
      listStyles () {
        let sty = {};
        const length = this.options.length >=5 ? 5 : this.options.length;
        sty.height =  (56 * length + 29) / 100 + 'rem';
        return sty;
      }
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal) return false;
        this.listen();
      },
      state () {
        this.fold = this.state;
      },
      options () {
        this.opts = this.options;
      }
    },
    created () {
      this.value && this.listen();
    },
    methods: {
      listen () {
        if (!this.options) return false;
        for (let item of this.options) {
          if (this.value === (this.val ? item[this.val] : item)) {
            this.subLabel = item[this.name];
            this.selected = item;
            item.selected = true;
            return false;
          }
        }
      },
      handleClick () {
        this.fold = !this.fold;
      },
      selectItem (item) {

        // 如果当前项已经被选中则退出
        if (item.selected) return false;

        // 设置为选中
        item.selected = true;

        // 移除旧的选中值
        if (this.selected) delete this.selected.selected;

        // 保存选中的值
        this.selected = item;

        // 获取到当前选中的值
        let val = this.val ? item[this.val] : item;

        // 改变v-model的值
        this.$emit('input', val);

        // change方法
        this.$emit('on-change', val);

        // 修改右侧文字
        this.subLabel = item[this.name];

        // 修改箭头方向
        this.fold = false;
      }
    }
  }
</script>
