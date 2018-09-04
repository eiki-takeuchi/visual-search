<template>
<div>
<div class="card float-left" style="width: 18rem;" v-for="item in items" :key="item.id">
  <!--
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <img :src="image_src">
  -->
  <img class="card-img-top" :src="item.image">
  <div class="card-body" style="height: 15rem">
    <h5 class="card-title">{{item.program}}</h5>
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <router-link to='/video' class="btn btn-primary">Watch Video</router-link>

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
        {program: '超初心者プログラム１', 'title': 'ストロークをしてみよう', 'explanation': '初心者向けの動画です。このコースではさらに「超初心者」「中初心者」「脱初心者」に別れています。', image: 'https://guitarlessons-com-public.s3.amazonaws.com/images/3d70f76-8-your-first-guitar-chords.jpg'},
        {program: '超初心者プログラム２', 'title': 'ドレミファをしてみよう', 'explanation': '中級者向けのコースです。初心者の次に学ぶコースとなっています。', image: 'https://guitarlessons-com-public.s3.amazonaws.com/images/3d70f76-8-your-first-guitar-chords.jpg'},
        {program: '超初心者プログラム３', 'title': 'セッティングをしてみよう', 'explanation': '上級者コースです。中級者を脱し、実際に演奏できるレベル、さらに難関なテクニックを紹介します。', image: 'https://guitarlessons-com-public.s3.amazonaws.com/images/3d70f76-8-your-first-guitar-chords.jpg'},
        {program: '中初心者プログラム１', 'title': 'Fをひいてみよう', 'explanation': '音楽理論を学習します。すべての基礎となる音の構成について学んで行きます。', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_mL2vNub6sroLAFNK0CC5Jldam6acWzIOtxNjd7SQKlS-bSA'},
        {program: '中初心者プログラム２', 'title': 'カッティングをしてみよう', 'explanation': 'コースで学習した内容を基に実際に音楽を演奏してみます。', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_mL2vNub6sroLAFNK0CC5Jldam6acWzIOtxNjd7SQKlS-bSA'},
        {program: '中初心者プログラム３', 'title': 'アルペジオをしてみよう', 'explanation': 'コースで学習した内容を基に実際に音楽を演奏してみます。', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_mL2vNub6sroLAFNK0CC5Jldam6acWzIOtxNjd7SQKlS-bSA'},
        {program: '脱初心者プログラム１', 'title': 'F#をひいてみよう', 'explanation': '音楽理論を学習します。すべての基礎となる音の構成について学んで行きます。', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKYEFd7Zf7S4u5W1UOBs_OaOUTQXFblhdjIc7Q88XrpaG7BQe'},
        {program: '脱初心者プログラム２', 'title': '右手を使ってみよう', 'explanation': 'コースで学習した内容を基に実際に音楽を演奏してみます。', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKYEFd7Zf7S4u5W1UOBs_OaOUTQXFblhdjIc7Q88XrpaG7BQe'},
        {program: '脱初心者プログラム３', 'title': 'ピッキングを覚えよう', 'explanation': 'コースで学習した内容を基に実際に音楽を演奏してみます。', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKYEFd7Zf7S4u5W1UOBs_OaOUTQXFblhdjIc7Q88XrpaG7BQe'}
      ],
      image_src: require('../assets/images/samples/guitar/guitar_sample_1.jpg')
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
