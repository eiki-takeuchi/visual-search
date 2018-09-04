import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Video from '@/components/Video'
import Courses from '@/components/Courses'
import CourseDetail from '@/components/CourseDetail'
import CourseVideos from '@/components/CourseVideos'
import Popular from '@/components/Popular'
import Bookmark from '@/components/Bookmark'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/popular',
      name: 'popular',
      component: Popular
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: Bookmark
    },

    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/CourseDetail',
      name: 'CourseDetail',
      component: CourseDetail
    },
    {
      path: '/CourseVideos',
      name: 'CourseVideos',
      component: CourseVideos
    }

  ]
})
