<template>
   <div>
      <div class="mb-2 w-auto mt-3 border pl-3 pr-3 pb-3" v-for="item in items" :key="item.id">
         <div class="mt-3 text-left">
            <div class="float-left mr-3">
               <img :src='createImageUrl(item.user.thumbnail.url)' width="50" height="50" class="rounded-circle">
            </div>
            <div class="mb-3">
               <div>{{item.user.username}}</div>
               <div>{{item.comment.created_at | formatDate}}</div>
            </div>
            <div class="ml-5">
               <div>{{item.comment.comment}}</div>
               <span>
               <i class="fas fa-thumbs-up"></i>
               {{item.comment.good}}
               </span>
               <span class="mr-3">
               <i class="fas fa-thumbs-down"></i>
               {{item.comment.bad}}
               </span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'VideoComment',
  data () {
    return {
      items: null
    }
  },
  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('YYYY-MM-DD hh:mm')
      }
    }
  },
  methods: {
    createImageUrl (imageFilePath) {
      let imageFullUrl = `${this.$data.apiScheme}${this.$data.apiHostname}:${this.$data.apiPort}` + imageFilePath
      return imageFullUrl
    }
  },
  mounted () {
    var videoId = this.$route.query.video_id
    var apiUrl = `${this.$data.apiScheme}${this.$data.apiHostname}:${this.$data.apiPort}`
    var commentApiUrl = `${apiUrl}/api/comment?video_id=${videoId}`
    axios
      .get(commentApiUrl)
      .then(response => (this.items = response.data.items))
  }
}

</script>

<style scoped>
</style>
