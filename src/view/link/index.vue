<!--
 - LineExample
 -
 - author: Storm
 - date: 2017/04/17
 -->

<template>
  <div class="LineExample">
    <s-header title="Link"></s-header>

    <section>
      <h3>default</h3>
      <s-link>道具</s-link>
    </section>
  </div>
</template>

<script>
  import Link from '../../components/link';
  export default {
    name: 'LineExample',
    components: {
      sLink: Link
    },
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>
