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
          <icon type="appreciate"></icon>
          <p>appreciate</p>
        </div>
        <div>
          <icon type="check"></icon>
          <p>check</p>
        </div>
        <div>
          <icon type="close"></icon>
          <p>close</p>
        </div>
        <div>
          <icon type="edit"></icon>
          <p>edit</p>
        </div>
        <div>
          <icon type="favorfill"></icon>
          <p>favorfill</p>
        </div>
        <div>
          <icon type="favor"></icon>
          <p>favor</p>
        </div>
        <div>
          <icon type="roundcheckfill"></icon>
          <p>roundcheckfill</p>
        </div>
        <div>
          <icon type="roundcheck"></icon>
          <p>roundcheck</p>
        </div>
        <div>
          <icon type="roundclosefill"></icon>
          <p>roundclosefill</p>
        </div>
        <div>
          <icon type="roundclose"></icon>
          <p>roundclose</p>
        </div>
        <div>
          <icon type="search"></icon>
          <p>search</p>
        </div>
        <div>
          <icon type="timefill"></icon>
          <p>timefill</p>
        </div>
        <div>
          <icon type="time"></icon>
          <p>time</p>
        </div>
        <div>
          <icon type="unfold"></icon>
          <p>unfold</p>
        </div>
        <div>
          <icon type="commentfill"></icon>
          <p>commentfill</p>
        </div>
        <div>
          <icon type="comment"></icon>
          <p>comment</p>
        </div>
        <div>
          <icon type="likefill"></icon>
          <p>likefill</p>
        </div>
        <div>
          <icon type="like"></icon>
          <p>like</p>
        </div>
        <div>
          <icon type="back"></icon>
          <p>back</p>
        </div>
        <div>
          <icon type="more"></icon>
          <p>more</p>
        </div>
        <div>
          <icon type="right"></icon>
          <p>right</p>
        </div>
        <div>
          <icon type="moreandroid"></icon>
          <p>moreandroid</p>
        </div>
        <div>
          <icon type="deletefill"></icon>
          <p>deletefill</p>
        </div>
        <div>
          <icon type="delete"></icon>
          <p>delete</p>
        </div>
        <div>
          <icon type="fold"></icon>
          <p>fold</p>
        </div>
        <div>
          <icon type="appreciatefill"></icon>
          <p>appreciatefill</p>
        </div>
        <div>
          <icon type="infofill"></icon>
          <p>infofill</p>
        </div>
        <div>
          <icon type="info"></icon>
          <p>info</p>
        </div>
        <div>
          <icon type="warnfill"></icon>
          <p>warnfill</p>
        </div>
        <div>
          <icon type="warn"></icon>
          <p>warn</p>
        </div>
        <div>
          <icon type="female"></icon>
          <p>female</p>
        </div>
        <div>
          <icon type="male"></icon>
          <p>male</p>
        </div>
        <div>
          <icon type="add1"></icon>
          <p>add1</p>
        </div>
        <div>
          <icon type="move"></icon>
          <p>move</p>
        </div>
        <div>
          <icon type="triangledownfill"></icon>
          <p>triangledownfill</p>
        </div>
        <div>
          <icon type="triangleupfill"></icon>
          <p>triangleupfill</p>
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
