<template>
<div>
<div class="card float-left" style="width: 18rem;" v-for="item in items" :key="item.id">
  <div class="card-body">
    <router-link to='/courseDetail' class="text-dark">
    <h5 class="card-title">{{item.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{item.subtitle}}</h6>
    <router-link to='test'>Jump to link</router-link>
    </router-link>
  </div>
</div>
</div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Courses',
  data () {
    return {
      items: [
        {'title': 'Accoustic Guitar', 'subtitle': 'Guitar Course'},
        {'title': 'Electric Guitar', 'subtitle': 'Bass Course'},
        {'title': 'Bass', 'subtitle': 'Bass Course'},
        {'title': 'Drum', 'subtitle': 'Drum Course'},
        {'title': 'Piano', 'subtitle': 'Piano Course'},
        {'title': 'Keyboard', 'subtitle': 'Keyboard Course'},
        {'title': 'Violine', 'subtitle': 'Violine Course'},
        {'title': 'Saxphone', 'subtitle': 'Piano Course'},
        {'title': 'Vocal', 'subtitle': 'Keyboard Course'},
        {'title': 'Ukrere', 'subtitle': 'Violine Course'},
        {'title': 'DJ', 'subtitle': 'Violine Course'},
        {'title': 'Okarina', 'subtitle': 'Piano Course'},
        {'title': 'Dance', 'subtitle': 'Keyboard Course'},
        {'title': 'Trunpet', 'subtitle': 'Violine Course'},
        {'title': 'Electon', 'subtitle': 'Violine Course'},
        {'title': 'Cralinet', 'subtitle': 'Piano Course'},
        {'title': 'Jumbe', 'subtitle': 'Keyboard Course'},
        {'title': 'Flute', 'subtitle': 'Violine Course'}
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
