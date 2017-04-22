<!--
 - author: Storm
 - date: 2017/03/28
 -->

<template>
  <div class="iconExample">
    <h1>ICON</h1>

    <section>
      <h3 class="example-title">type - 类型</h3>
      <div class="iconExample-type">
        <div>
          <s-icon type="appreciate"></s-icon>
          <p>appreciate</p>
        </div>
        <div>
          <s-icon type="check"></s-icon>
          <p>check</p>
        </div>
        <div>
          <s-icon type="close"></s-icon>
          <p>close</p>
        </div>
        <div>
          <s-icon type="edit"></s-icon>
          <p>edit</p>
        </div>
        <div>
          <s-icon type="favorfill"></s-icon>
          <p>favorfill</p>
        </div>
        <div>
          <s-icon type="favor"></s-icon>
          <p>favor</p>
        </div>
        <div>
          <s-icon type="roundcheckfill"></s-icon>
          <p>roundcheckfill</p>
        </div>
        <div>
          <s-icon type="roundcheck"></s-icon>
          <p>roundcheck</p>
        </div>
        <div>
          <s-icon type="roundclosefill"></s-icon>
          <p>roundclosefill</p>
        </div>
        <div>
          <s-icon type="roundclose"></s-icon>
          <p>roundclose</p>
        </div>
        <div>
          <s-icon type="search"></s-icon>
          <p>search</p>
        </div>
        <div>
          <s-icon type="timefill"></s-icon>
          <p>timefill</p>
        </div>
        <div>
          <s-icon type="time"></s-icon>
          <p>time</p>
        </div>
        <div>
          <s-icon type="unfold"></s-icon>
          <p>unfold</p>
        </div>
        <div>
          <s-icon type="commentfill"></s-icon>
          <p>commentfill</p>
        </div>
        <div>
          <s-icon type="comment"></s-icon>
          <p>comment</p>
        </div>
        <div>
          <s-icon type="likefill"></s-icon>
          <p>likefill</p>
        </div>
        <div>
          <s-icon type="like"></s-icon>
          <p>like</p>
        </div>
        <div>
          <s-icon type="back"></s-icon>
          <p>back</p>
        </div>
        <div>
          <s-icon type="more"></s-icon>
          <p>more</p>
        </div>
        <div>
          <s-icon type="right"></s-icon>
          <p>right</p>
        </div>
        <div>
          <s-icon type="moreandroid"></s-icon>
          <p>moreandroid</p>
        </div>
        <div>
          <s-icon type="deletefill"></s-icon>
          <p>deletefill</p>
        </div>
        <div>
          <s-icon type="delete"></s-icon>
          <p>delete</p>
        </div>
        <div>
          <s-icon type="fold"></s-icon>
          <p>fold</p>
        </div>
        <div>
          <s-icon type="appreciatefill"></s-icon>
          <p>appreciatefill</p>
        </div>
        <div>
          <s-icon type="infofill"></s-icon>
          <p>infofill</p>
        </div>
        <div>
          <s-icon type="info"></s-icon>
          <p>info</p>
        </div>
        <div>
          <s-icon type="warnfill"></s-icon>
          <p>warnfill</p>
        </div>
        <div>
          <s-icon type="warn"></s-icon>
          <p>warn</p>
        </div>
        <div>
          <s-icon type="female"></s-icon>
          <p>female</p>
        </div>
        <div>
          <s-icon type="male"></s-icon>
          <p>male</p>
        </div>
        <div>
          <s-icon type="add1"></s-icon>
          <p>add1</p>
        </div>
        <div>
          <s-icon type="move"></s-icon>
          <p>move</p>
        </div>
        <div>
          <s-icon type="triangledownfill"></s-icon>
          <p>triangledownfill</p>
        </div>
        <div>
          <s-icon type="triangleupfill"></s-icon>
          <p>triangleupfill</p>
        </div>
        <div>
          <s-icon type="link"></s-icon>
          <p>link</p>
        </div>
        <div>
          <s-icon type="picfill"></s-icon>
          <p>picfill</p>
        </div>
        <div>
          <s-icon type="pic"></s-icon>
          <p>pic</p>
        </div>
        <div>
          <s-icon type="success"></s-icon>
          <p>success</p>
        </div>
        <div>
          <s-icon type="error"></s-icon>
          <p>error</p>
        </div>
        <div>
          <s-icon type="loading"></s-icon>
          <p>loading</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'IconExample',
    props: {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .iconExample-type {
    overflow: hidden;

    & div {
      float: left;
      display: block;
      width: 140px;
      height: 140px;
      padding: 40px 0;
      text-align: center;
      margin: 30px;
      border: 1px solid #d7dde4;
      border-radius: .25em;

      & .s-icon {
        font-size: 32px;
      }

      &:hover {
        box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
      }

    }
  }
</style>
