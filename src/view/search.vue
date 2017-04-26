<!--
 - 搜索游戏
 -
 - author: Storm
 - date: 2017/04/17
 -->

<template>

  <s-app>

    <s-main bgc="white">

      <s-search placeholder="请输入游戏名称"
                type="primary"
                v-model="searchKey"
                @on-button-click="searchCancel"
                autofocus
                text="取消"></s-search>

      <div class="content-lg">

        <section class="searchGame-history section">
          <h3 class="section-title">最近搜索</h3>
          <s-cell padding="0"
                  v-for="item in games"
                  :key="item.gameId"
                  @click="choseGame(item)">
            <s-icon type="timefill"></s-icon>
            <span>{{item.gameName}}</span>
            <span slot="right" v-if="!searchKey"><s-icon type="close"></s-icon></span>
          </s-cell>
          <s-cell padding="0"
                  v-if="games.length <= 0">
            <s-icon type="timefill"></s-icon>
            <span>暂无数据...</span>
          </s-cell>
        </section>

        <section class="section">

          <h3 class="section-title">热门游戏</h3>

          <ul class="game game-grid">
            <li class="game-item" v-for="item in hotGames" @click="selectGame(item)">
              <img class="game-icon" src="http://img.la/100x100?s=demo">
              <p class="game-name">{{item.gameName}}</p>
            </li>
          </ul>

        </section>

      </div>

    </s-main>
  </s-app>

</template>

<script>
  import Search from '@/components/search';
  import {gameGrid, gameGridItem} from '@/components/gameGrid';
  import local from '@/untils/local';
  import '@/view/release/release.scss';

  let searchTimer = null;

  let oldSearch = '';

  export default {
    name: 'Search',
    components: {
      sSearch: Search,
      sGameGrid: gameGrid,
      sGameGridItem: gameGridItem,
    },
    props: {},
    data () {
      return {
        games: [
          {gameId: 27, gameName: '阴阳师'},
          {gameId: 28, gameName: '九阴真经3D'}
        ],
        hotGames: [
          {gameId: 27, gameName: '阴阳师'},
          {gameId: 28, gameName: '九阴真经3D'}
        ],
        searchKey: '',
        searching: null
      }
    },
    watch: {
      searchKey () {

        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
          this.searchGame();
        }, 500);

      }
    },
    created () {
      this.games = local.get('gameSearchHistory') || [];
    },
    methods: {

      searchCancel () {
        this.$router.go(-1);
      },
      choseGame (item) {
        let games = local.get('gameSearchHistory') || [];
        const duplication = games.find(hItem => hItem.gameId === item.gameId);
        if (duplication !== undefined) {
          const index = games.indexOf(duplication);
          games.splice(index, 1);
        }
        games.push({
          gameId: item.gameId,
          gameName: item.gameName
        });
        local.set('gameSearchHistory', games);
        // 阴阳师
        this.$router.push({
          path: 'goods',
          query: {gameId: item.gameId, gameName: item.gameName}
        });
      },
      searchGame () {
        if (oldSearch === this.searchKey) return false;
        if (this.searching) return false;
        this.searching = true;
        this
          .$http
          .post('/h5/game/searchGame', {gameName: this.searchKey})
          .then(response => {
            if (response.body.code !== '000') return false;
            this.games = response.body.data.list;
          })
          .finally(() => this.searching = false);
      },

      selectGame (item) {
        // 阴阳师
        this.$router.push({
          path: 'goods',
          query: {gameId: item.gameId, gameName: item.gameName}
        });
      }
    },
    created () {
      document.title = '搜索游戏 - 闪电虎';
    }
  }
</script>

