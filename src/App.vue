<template>
<div id="app" class="container-fluid">
  <!--Navbar-->
  <nav-header/>

  <div class="row">
    <!-- Side NavBar -->
    <div class="col-2">
      <sidebar/>
    </div>
    <!-- Main Content -->
    <div class="col-sm">
      <router-view/>
    </div>
  </div>
</div>
</template>
<script>

import SideBar from '@/components/SideBar'
import NavHeader from '@/components/NavHeader'

export default {
  name: 'App',
  components: {
    'nav-header': NavHeader,
    'sidebar': SideBar
  }
}
</script>

<style>
</style>
