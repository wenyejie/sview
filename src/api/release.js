/**
 * 商品
 *
 * author: Storm
 * date: 2017/04/20
 */

// 表单存储信息
const FORM_STORAGE_INFO = 'releaseInfo';

export default {

  getInfo () {
    return localStorage.getItem(FORM_STORAGE_INFO);
  },

  setInfo (data) {
    localStorage.setItem(FORM_STORAGE_INFO, data);
  },

  /**
   * 获取属性信息
   * @param atttrType 属性类型
   * @param subClassId 类型ID
   */
  getAttr (atttrType, subClassId) {

    console.log(this);

    return new Promise((resolve, reject) => {
      this
        .$http
        .post(
          '/h5/seller/publish/queryAttrByType', {
            attrType: atttrType,
            subClassId: subClassId
          }
        )
        .then(
          response => {
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
          },
          response => reject
        )

    });

  }

}
