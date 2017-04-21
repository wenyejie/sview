<!--
 - 表单生成
 -
 - author: Storm
 - date: 2017/04/19
 -->

<template>
  <div class="s-form-make">
    <template v-if="formData.attrRule[0].inputType === 1">
      <s-form-control :label="formData.attrName"
                      :required="required(formData.attrRule[0])">

        <input v-if="type(formData.attrRule[0]) === 'password'"
               type="password"
               :maxlength="length(formData.attrRule[0])"
               v-model.trim.number="formData.modelValue"
               @input="inputChange(formData, $event)"
               :placeholder="`请输入${formData.attrName}`">

        <input v-if="type(formData.attrRule[0]) === 'number'"
               type="number"
               :maxlength="length(formData.attrRule[0])"
               :min="min(formData.attrRule[0])"
               v-model.trim.number="formData.modelValue"
               @input="inputChange(formData, $event)"
               :placeholder="`请输入${formData.attrName}`">

        <input v-if="type(formData.attrRule[0]) === 'tel'"
               type="number"
               maxlength="11"
               minlength="11"
               :min="min(formData.attrRule[0])"
               v-model.trim.number="formData.modelValue"
               @input="inputChange(formData, $event)"
               :placeholder="`请输入${formData.attrName}`">

        <input v-if="type(formData.attrRule[0]) === 'email'"
               type="email"
               :maxlength="length(formData.attrRule[0])"
               v-model.trim="formData.modelValue"
               @input="inputChange(formData, $event)"
               :placeholder="`请输入${formData.attrName}`">

        <input v-if="type(formData.attrRule[0]) === 'text'"
               type="text"
               :maxlength="length(formData.attrRule[0])"
               v-model.trim="formData.modelValue"
               @input="inputChange(formData, $event)"
               :placeholder="`请输入${formData.attrName}`">
      </s-form-control>
      <s-cell-intro v-if="formData.attrRule[0].showDesc">{{formData.attrRule[0].showDesc}}</s-cell-intro>
    </template>

    <template v-if="formData.attrRule[0].inputType === 2">
      <s-form-select :label="formData.attrName"
                     placeholder="请选择"
                     name="ruleDefaultValue"
                     val="ruleId"
                     :options="formData.attrRule"
                     v-model="selectModel"
                     @on-change="selectChange(formData, $event)"
                     :required="required(formData.attrRule[0])"></s-form-select>
      <s-cell-intro v-if="formData.attrRule[0].showDesc">{{formData.attrRule[0].showDesc}}</s-cell-intro>
    </template>

    <template v-if="formData.attrRule[0].inputType === 3">

      <s-form-select :label="formData.attrName"
                     placeholder="请选择"
                     name="ruleDefaultValue"
                     val="ruleId"
                     v-model="hybridModelValue"
                     :options="formData.attrRule"
                     :required="required(formData.attrRule[0])"></s-form-select>

      <template v-for="item in formData.attrRule">
        <s-form-control :label="item.ruleDefaultValue"
                        :key="item.ruleId"
                        v-if="item.ruleId === hybridModelValue"
                        :required="required(item)">

          <input v-if="type(item) === 'password'"
                 type="password"
                 :maxlength="length(item)"
                 v-model.trim.number="formData.modelValue"
                 @input="hybridChange(formData, item, $event.target)"
                 :placeholder="`请输入${formData.attrName}`">

          <input v-if="type(item) === 'number'"
                 type="number"
                 :maxlength="length(item)"
                 :min="min(item)"
                 v-model.trim.number="formData.modelValue"
                 @input="hybridChange(formData, item, $event.target)"
                 :placeholder="`请输入${formData.attrName}`">

          <input v-if="type(item) === 'tel'"
                 type="tel"
                 maxlength="11"
                 minlength="11"
                 v-model.trim="formData.modelValue"
                 @input="hybridChange(formData, item, $event.target)"
                 :placeholder="`请输入${formData.attrName}`">

          <input v-if="type(item) === 'email'"
                 type="email"
                 :maxlength="length(item)"
                 v-model.trim="formData.modelValue"
                 @input="hybridChange(formData, item, $event.target)"
                 :placeholder="`请输入${formData.attrName}`">

          <input v-if="type(item) === 'text'"
                 type="text"
                 :maxlength="length(item)"
                 v-model.trim="formData.modelValue"
                 @input="hybridChange(formData, item, $event.target)"
                 :placeholder="`请输入${formData.attrName}`">
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
        modelValue: this.value,
        formData: this.options,
        hybridModelValue: null
      }
    },
    computed: {},
    watch: {
      value (val) {
        this.modelValue = val;
      },
      options (val) {
        this.formData = val;
      }
    },
    methods: {
      saveValue (options, value, ruleId) {
        const result = this.modelValue.find(item => item.attrId === options.attrId);

        if (result) {
          result.attrValue = value;
        } else {
          this.modelValue.push({
            attrId: options.attrId,
            attrName: options.attrName,
            attrType: options.attrType,
            attrValue: value,
            ruleId: ruleId
          });
        }
        this.$emit('input', this.modelValue);
      },

      // 混合选择框
      hybridChange (formData, item, $target) {
        const value = $target.type !== 'number' ? $target.value : parseInt($target.value);
        this.saveValue(formData, value, item.ruleId);
      },

      // 选择框
      selectChange (formData, ruleId) {
        let value = formData.attrRule.find(item => item.ruleId === ruleId);
        value = value.ruleDefaultValue;
        this.saveValue(formData, value, ruleId);
      },

      // 输入框
      inputChange (formData, $event) {

        const value = $event.target.type !== 'number' ? $event.target.value : parseInt($event.target.value);

        this.saveValue(formData, value, formData.attrRule[0].ruleId);

      },

      // 最小数组
      min (item) {
        return item.inputLimitRule === 2 ? 0 : undefined;
      },

      // 验证是否必填
      required (item) {
        return item.isRequired === 1;
      },

      // 长度
      length (item) {
        const length = item.inputLimitLen;
        return length > 0 ? length : false;
      },


      type (item) {
        if (item.isPwd === 1) return 'password';


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
