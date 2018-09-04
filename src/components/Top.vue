<template>
  <div>
    <div class="card float-left" v-for="item in items" :key="item.id">
      <img :src="createImageUrl(item.thumbnail.url)" style="width:280px; height:180px">
      <div class="card-body text-left">
        <h6 class="card-title mb-2">
          <router-link :to="'/video?video_id=' + item.id" class="text-dark">{{item.id}} {{truncateWordLength(item.title)}}</router-link>
        </h6>
        <p class="card-text mb-2">
          <small class="text-muted">
            {{item.author}}
          </small>
        </p>
        <!-- Star rating -->
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="text-right">({{item.view}})</span>
        <p class="card-text text-right mt-1">{{item.price}}円</p>
        <!-- Star rating End -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Top',
  data () {
    return {
      items: null,
      apiUrl: null
    }
  },
  methods: {
    truncateWordLength (title) {
      var stringLength = 14
      if (title.length < stringLength) {
        return title
      } else {
        return title.substring(0, stringLength) + '...'
      }
    },
    createImageUrl (imageFilePath) {
      let imageFullUrl = `${this.$data.apiScheme}${this.$data.apiHostname}:${this.$data.apiPort}` + imageFilePath
      return imageFullUrl
    }
  },
  mounted () {
    this.apiUrl = `${this.$data.apiScheme}${this.$data.apiHostname}:${this.$data.apiPort}`
    axios
      .get(`${this.apiUrl}/api/video`)
      .then(response => (this.items = response.data.items))
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  margin-top: 20px;
  margin-right: 20px;
}

.nav-link-color{
  color: black;
}

/* Card */

/* Rating */
.checked {
    color: orange;
}
</style>
