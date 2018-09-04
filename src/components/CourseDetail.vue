<template>
<div>
<div class="card float-left" style="width: 18rem;" v-for="item in items" :key="item.id">
  <!--<img class="card-img-top" src=".../100px180/" alt="Card image cap">-->
  <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text" style="height:6rem">{{item.explanation}}</p>
    <router-link to='/courseVideos' class="btn btn-primary">Course Videos</router-link>

  </div>
</div>
</div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'CoursesDetail',
  data () {
    return {
      items: [
        {'title': '初心者', 'explanation': '初心者向けの動画です。このコースではさらに「超初心者」「中初心者」「脱初心者」に別れています。'},
        {'title': '中級者', 'explanation': '中級者向けのコースです。初心者の次に学ぶコースとなっています。'},
        {'title': '上級者', 'explanation': '上級者コースです。中級者を脱し、実際に演奏できるレベル、さらに難関なテクニックを紹介します。'},
        {'title': '音楽理論', 'explanation': '音楽理論を学習します。すべての基礎となる音の構成について学んで行きます。'},
        {'title': 'SONGSレパートリー', 'explanation': 'コースで学習した内容を基に実際に音楽を演奏してみます。'}
      ]
    }
  }
  /*
  mounted () {
    axios
      .get('http://13.251.133.62:8081/api/video')
      .then(response => (this.items = response.data.items))
  }
  */
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  margin-top: 20px;
  margin-right: 20px;
}

</style>
