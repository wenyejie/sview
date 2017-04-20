<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/19
 -->

<!--
输入规则 - inputLimitRule
case 1: return '不限制';
case 2: return '数字';
case 3: return '字母';
case 4: return '手机号';
case 5: return '邮箱';
-->

<template>
  <div class="s-form-make">

    <template v-if="options.subClassAttrRule.inputType === 1">
      <s-form-control :label="options.subClassAttrName"
                      :required="required">
        <input :type="type"
               :maxlength="length"
               :name="`formMark${options.subClassAttrRule.ruleId}`"
               :form-mark="json2string(options)"
               :placeholder="`请输入${options.subClassAttrName}`">
      </s-form-control>
    </template>

    <template v-if="options.subClassAttrRule.inputType === 2">
      <s-form-select :label="options.subClassAttrName"
                     placeholder="请选择"
                     name="name"
                     val="id"
                     :form-mark="json2string(options)"
                     :options="gemNames"
                     required></s-form-select>
    </template>

    <template v-if="options.subClassAttrRule.inputType === 3">3</template>

    <s-cell-intro>{{options.subClassAttrRule.showDesc}}</s-cell-intro>
  </div>
</template>

<script>
  import FormControl from '@/components/formControl';
  import FormSelect from '@/components/formSelect';
  export default {
    name: 'FormMake',
    components: {
      sFormControl: FormControl,
      sFormSelect: FormSelect
    },
    props: {
      options: Object
    },
    data () {
      return {}
    },
    computed: {
      length () {
        const length = this.options.subClassAttrRule.inputLimitLen;
        return length > 0 ? length : false;
      },
      required () {
        return this.options.subClassAttrRule.isRequired === 1;
      },
      type () {
        if (this.options.subClassAttrRule.isPwd === 2) return 'password';
        switch (this.options.subClassAttrRule.inputLimitRule) {
          case 2:
            return 'number';
          case 4:
            return 'tel';
          case 5:
            return 'email';
          default:
            return 'text'
        }

      }
    },
    methods: {
      json2string (opts) {
        return JSON.stringify(opts);
      }
    },
    created () {

    }
  }
</script>
