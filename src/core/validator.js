/**
 * 表单验证
 *
 * author: Storm
 * date: 2017/04/25
 */

// 验证是否符合必填项
const required = (value, required) => value.trim() === '' && !required;

// 验证是否符合最小长度要求
const minlength = (value, minlength) => value.trim().length >= minlength;

// 验证是否为数字类型
const number = value => /^\d+(\.[\d]+)?$/.test(value);

// 验证是否为邮箱类型
const email = value => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);

// 验证是否为手机号码
const tel = value => /^1[\d]{10}$/.test(value);

// 验证两个值是否相等
const equal = (value, anotherValue) => value === anotherValue;

// 判断是否符合验证规则
// const pattern = (value, pattern) => new RegExp(`^${pattern}$`, 'g').test(value);

const min = (value, min) => parseInt(value) >= min;

const max = (value, max) => parseInt(value) <= max;


export default {
  required,
  minlength,
  number,
  email,
  tel,
  equal,
  min,
  max
}
