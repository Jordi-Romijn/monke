import Vue from 'vue'

Vue.directive('href', (el, bindings, vnode) => {
  if (el.querySelector('a[href]') === null) {
    // Directive v-href set on element that does not contain an A element.
    return
  }

  if (bindings.value === false) {
    // Explicitly omitted
    return
  }

  el.classList.add('cursor-pointer')

  el.addEventListener('click', (clicked) => {
    // Usage: v-href on parent element (previously data-href)
    if (clicked.tagName === 'A' && clicked.getAttribute('href')) {
      // Just follow a when clicked on it
      return
    }

    const a = el.querySelector('a')

    if (a) {
      const target = a.getAttribute('target')

      if (typeof target !== typeof undefined && target) {
        window.open(a.getAttribute('href'), target)
      } else {
        vnode.context.$router.push({
          path: a.getAttribute('href')
        })
      }
    }
  })
})
