<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/19
 -->

<template>
  <div class="s-form-make">

    <template v-if="options.subClassAttrRule[0].inputType === 1">
      <s-form-control :label="options.subClassAttrName"
                      :required="required(options.subClassAttrRule[0])">
        <input :type="type(options.subClassAttrRule[0])"
               :maxlength="length(options.subClassAttrRule[0])"
               :min="options.subClassAttrRule[0].inputLimitRule === 2 ? 0 : undefined"
               @input="inputChange(options, $event)"
               :placeholder="`请输入${options.subClassAttrName}`">
      </s-form-control>
      <s-cell-intro v-if="options.subClassAttrRule[0].showDesc">{{options.subClassAttrRule[0].showDesc}}</s-cell-intro>
    </template>

    <template v-if="options.subClassAttrRule[0].inputType === 2">
      <s-form-select :label="options.subClassAttrName"
                     placeholder="请选择"
                     name="ruleDefaultValue"
                     val="ruleId"
                     :options="options.subClassAttrRule"
                     :required="required(options.subClassAttrRule[0])"></s-form-select>
      <s-cell-intro v-if="options.subClassAttrRule[0].showDesc">{{options.subClassAttrRule[0].showDesc}}</s-cell-intro>
    </template>

    <template v-if="options.subClassAttrRule[0].inputType === 3">

      <s-form-select :label="options.subClassAttrName"
                     placeholder="请选择"
                     name="ruleDefaultValue"
                     val="ruleId"
                     v-model="selectModel"
                     :options="options.subClassAttrRule"
                     :required="required(options.subClassAttrRule[0])"></s-form-select>

      <template v-for="item in options.subClassAttrRule">
        <s-form-control :label="item.ruleDefaultValue"
                        :key="item.ruleId"
                        v-if="item.selected"
                        :required="required(item)">
          <input :type="type(item)"
                 :maxlength="length(item)"
                 :placeholder="`请输入${options.subClassAttrName}`">
        </s-form-control>
        <s-cell-intro v-if="item.showDesc && item.selected">{{item.showDesc}}</s-cell-intro>
      </template>

    </template>
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
      options: Object,
      value: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data () {
      return {
        model: null,
        selectModel: null,
        modelValue: this.value
      }
    },
    computed: {},
    watch: {
      value (val) {
        this.modelValue = val;
      }
    },
    methods: {
      saveValue (options, result, value) {
        if (result) {
          result.attrValue = value;
        } else {
          this.modelValue.push({
            attrId: options.subClassAttrId,
            attrName: options.subClassAttrName,
            attrType: options.subClassAttrType,
            attrValue: value,
            ruleId: options.subClassAttrRule[0].ruleId
          });
        }
        this.$emit('input', this.modelValue);
      },
      inputChange (options, $event) {

        const result = this.modelValue.find(item => item.attrId === options.subClassAttrId);

        const value = $event.target.type !== 'number' ? $event.target.value : parseInt($event.target.value);

        this.saveValue(options, result, value);

      },
      required (item) {
        return item.isRequired === 1;
      },
      length (item) {
        const length = item.inputLimitLen;
        return length > 0 ? length : false;
      },
      type (item) {
        if (item.isPwd === 2) return 'password';


        /*输入规则 - inputLimitRule
         case 1: return '不限制';
         case 2: return '数字';
         case 3: return '字母';
         case 4: return '手机号';
         case 5: return '邮箱';*/
        switch (item.inputLimitRule) {
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
    created () {

    }
  }
</script>
