<template>
  <div>
    <h1 class="display-5 mt-3 pb-2 border-bottom">Our Mission</h1>
    <div class="card mt-3">
      <div class="card-header">
        About Us
      </div>
      <div class="card-body">
        <h5 class="card-title">Music for Everybody</h5>
        <p class="card-text">
          Our Mission is to provide high quolified music lecture videos for players.
          Our web based system contributes to all the people who wants to learn how to play music instruments such as guitar, bass, drum, piano etc.. with high quility and low costs.
          User can find any how to video with intuitive user interface and experience.
          Our objective is to be a web-based music technical school. Not only major instruments but also minars.
          Continuously adding new video and easy-use and learn videos.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div class="clearfix">
      <h1 class="display-5 mt-5 pb-2 border-bottom">Our Team</h1>
      <div class="card float-left" style="width: 18rem;" v-for="item in items" :key="item.id">
        <img class="card-img-top" style="height:13rem" :src="item.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <p class="card-text">{{item.position}}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><a class="card-link" href="#">{{item.twitter}}</a></li>
          <li class="list-group-item"><a class="card-link" href="#">{{item.linkedin}}</a></li>
        </ul>
      </div>
    </div>
    <!-- Corporate -->
    <div>
      <h1 class="display-5 mt-5 pb-2 border-bottom clearfix">Corporate</h1>
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    return {
      items: [
        {name: 'Michael Suzuki', position: 'CEO, Founder of Joyful Music', twitter: '@Micheal', linkedin: 'Michael', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbdOtZgDP44GQ6HS64d9W5WjPi1oYBwQ05vCCpbPDZG4GngQ1d6A'},
        {name: 'Taro Tanaka', position: 'Management director and co-founder', twitter: '@TaroTanaka', linkedin: 'Tanaka', image: 'https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif'},
        {name: 'Jimmy Page', position: 'Software Developer', twitter: '@JimmyPage', linkedin: 'Jimmy', image: 'http://jdisearch.com/wp-content/uploads/2018/01/manager%E2%80%99s-personal-image.jpg'}
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  margin-top: 20px;
  margin-right: 20px;
}

</style>
