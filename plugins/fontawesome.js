import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faThLarge,
  faSquare

} from '@fortawesome/free-solid-svg-icons'

import {

} from '@fortawesome/pro-regular-svg-icons'

library.add(
  faThLarge,
  faSquare

)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
