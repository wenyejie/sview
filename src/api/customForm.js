/**
 * 自定义表单
 *
 * author: Storm
 * date: 2017/04/20
 */

export default {

  getAttr (attrType, subClassId) {

    return new Promise((resolve, reject) => {

      this
        .$http
        .post('/h5/seller/publish/queryAttrByType', {
            attrType: attrType,
            subClassId: subClassId
          }
        ).then(response => {

        if (response.body.code !== '000') {
          reject();
          return false;
        }

        // this.attrs = response.body.data.list;

        this.attrs = [
          {
            "subClassAttrSeq": 1,
            "subClassAttrRule": [{
              "isRequired": 1,
              "attrValueType": 15,
              "showDesc": "游戏币",
              "showType": 3,
              "inputType": 1,
              "ruleId": 1492529144516457,
              "ruleDefaultValue": "-1",
              "inputLimitLen": 20,
              "isPwd": 1,
              "inputLimitRule": 2
            }],
            "subClassAttrId": 1492529144511569,
            "subClassAttrName": "钻石数量",
            "subClassAttrType": 1
          },
          {
            "subClassAttrSeq": 2,
            "subClassAttrRule": [{
              "isRequired": 1,
              "attrValueType": 9,
              "showDesc": null,
              "showType": 2,
              "inputType": 2,
              "ruleId": 1492529144516458,
              "ruleDefaultValue": "鞋子",
              "inputLimitLen": 10,
              "isPwd": 1,
              "inputLimitRule": 1
            }, {
              "isRequired": 1,
              "attrValueType": 9,
              "showDesc": null,
              "showType": 2,
              "inputType": 2,
              "ruleId": 1492529144516459,
              "ruleDefaultValue": "帽子",
              "inputLimitLen": 10,
              "isPwd": 1,
              "inputLimitRule": 1
            }],
            "subClassAttrId": 1492529144511570,
            "subClassAttrName": "装备",
            "subClassAttrType": 1
          },
          {
            "subClassAttrSeq": 3,
            "subClassAttrRule": [{
              "isRequired": 1,
              "attrValueType": 11,
              "showDesc": "少林ID",
              "showType": 3,
              "inputType": 3,
              "ruleId": 1492671283937570,
              "ruleDefaultValue": "少陵",
              "inputLimitLen": 10,
              "isPwd": 1,
              "inputLimitRule": 2
            }, {
              "isRequired": 1,
              "attrValueType": 11,
              "showDesc": "武当拼音",
              "showType": 3,
              "inputType": 3,
              "ruleId": 1492671283937571,
              "ruleDefaultValue": "武当",
              "inputLimitLen": 20,
              "isPwd": 1,
              "inputLimitRule": 3
            }, {
              "isRequired": 1,
              "attrValueType": 11,
              "showDesc": null,
              "showType": 3,
              "inputType": 3,
              "ruleId": 1492671283937572,
              "ruleDefaultValue": "峨眉",
              "inputLimitLen": 20,
              "isPwd": 1,
              "inputLimitRule": 1
            }, {
              "isRequired": 1,
              "attrValueType": 11,
              "showDesc": null,
              "showType": 3,
              "inputType": 3,
              "ruleId": 1492671283937573,
              "ruleDefaultValue": "天山",
              "inputLimitLen": 20,
              "isPwd": 1,
              "inputLimitRule": 1
            }],
            "subClassAttrId": 1492671283934374,
            "subClassAttrName": "门派",
            "subClassAttrType": 1
          }
        ];

        resolve(this.attrs);

        console.log(this.attrs);
      }, () => reject)

    });

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
}
