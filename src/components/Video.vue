<template>
   <div>
      <div class="card mb-2 w-auto mt-3">
         <video class="card-img-top" controls>
            <source :src="videoFileUrl" type="video/mp4" v-if="videoFileUrl != null">
            Your browser does not support the video tag.
         </video>
         <div class="card-body">
            <h5 class="card-title text-left">{{title}}</h5>
            <div class="clearfix">
               <p class="text-muted float-left">{{view}} Views</p>
               <p class="card-text text-right text-muted float-right">
                  <span class="mr-3">
                  <i class="fas fa-thumbs-up" style="font-size:1.5em"></i>
                  {{good}}
                  </span>
                  <span class="mr-3">
                  <i class="fas fa-thumbs-down" style="font-size:1.5em"></i>
                  {{bad}}
                  </span>
                  <span>
                  <i class="fas fa-share-square" style="font-size:1.5em"></i>
                  share
                  </span>
               </p>
            </div>
            <!-- clearfix end -->
            <div class="clearfix mt-2">
               <div class="float-left">
                  <img :src='authorThumbnail' class="rounded-circle" width="50" height="50">
                  <span>{{author}}</span>
               </div>
               <div class="float-right">
                  <button type="button" class="btn btn-primary">Subscribe</button>
               </div>
            </div>
            <div class="mt-4 text-left">
               {{description}}
            </div>
         </div>
      </div>
      <video-comment />
   </div>
</template>

<script>
import axios from 'axios'
import VideoComment from '@/components/VideoComment'

export default {
  name: 'Video',
  components: {
    'video-comment': VideoComment
  },
  data () {
    return {
      items: null,
      videoId: null,
      title: null,
      view: null,
      author: null,
      price: null,
      good: null,
      bad: null,
      description: null,
      imageFilePath: null,
      imageFileUrl: null,
      videoFilepath: null,
      videoFileUrl: null,
      authorThumbnail: null,
      apiUrl: null
    }
  },
  mounted () {
    const videoId = this.$route.query.video_id
    this.apiUrl = `${this.$data.apiScheme}${this.$data.apiHostname}:${this.$data.apiPort}`

    axios
      .get(this.apiUrl + `/api/video/show?video_id=${videoId}`)
      .then(response => {
        var videoItem = response.data.items.video
        var authorItem = response.data.items.author
        this.title = videoItem.title
        this.view = videoItem.view
        this.author = videoItem.author_name
        this.price = videoItem.price
        this.good = videoItem.good
        this.bad = videoItem.bad
        this.description = videoItem.description
        this.imageFileUrl = `${this.apiUrl}${videoItem.thumbnail.url}`
        this.videoFileUrl = `${this.apiUrl}${videoItem.video_file.url}`
        this.authorThumbnail = `${this.apiUrl}${authorItem.thumbnail.url}`
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
