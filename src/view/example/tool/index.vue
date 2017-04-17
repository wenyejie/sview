<!--
 - Title
 -
 - author: Storm
 - date: 2017/04/07
 -->

<template>
  <div class="tool">
    <h1>Tool</h1>

    <section>
      <h3 class="example-title">SVG 2 BASE64</h3>
      <s-row :gutter="10">
        <s-col span="20">
          <textarea v-model="textarea" rows="10"></textarea>
        </s-col>
        <s-col span="4">
          <s-button type="primary" @click="svg2base64()">2 BASE64</s-button>
          <s-button type="success" @click="base642svg()">2 SVG</s-button>
        </s-col>
      </s-row>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Tool',
    props: {},
    data () {
      return {
        textarea: ''
      }
    },
    methods: {
      svg2base64 () {
        let ret = this.textarea;
        ret = ret.replace(/\n/g, '');
        ret = ret.replace('<!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->', '');
        ret = ret.replace('<desc>Created with Sketch.</desc>', '');
        ret = ret.replace('<defs></defs>', '');
        ret = ret.replace(/</g, '%3C');
        ret = ret.replace(/>/g, '%3E');
        ret = ret.replace(/\stransform="[^"]+"/g, '');
        ret = ret.replace(/\swidth="[^"]+"/g, '');
        ret = ret.replace(/\sheight="[^"]+"/g, '');
        ret = ret.replace(/\sviewBox="[^"]+"/g, '');
        ret = ret.replace(/\sversion="[^"]+"/g, '');
        ret = ret.replace(/xmlns:xlink="[^"]+"/g, '');
        ret = ret.replace(/\sid="[^"]+"/g, '');
        ret = ret.replace(/[\s]{2,}/g, ' ');
        ret = ret.replace(/%3E %3C/g, '%3E%3C');
        //ret = ret.replace(/"\s(\w)/g, '"$1');
        ret = 'data:image/svg+xml;charset=utf8,' + ret;
        this.textarea = ret;
      },
      base642svg () {
        let ret = this.textarea;

        ret = ret.replace(/%3C/g, '<');
        ret = ret.replace(/%3E/g, '>');
        ret = ret.replace('data:image/svg+xml;charset=utf8,', '');

        this.textarea = ret;
      }
    }
  }
</script>

<style scoped>
  textarea {
    width: 100%;
  }
</style>
