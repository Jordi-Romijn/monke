import { nl, en } from '@braid/vue-formulate-i18n'

export default {
  plugins: [nl, en],
  classes: {
    input (context) {
      switch (context.classification) {
        case 'button':
          return ''
        case 'textarea':
          return 'border border-gray-dark rounded w-full pl-3 pt-3 outline-none text-gray-dark text-lg font-light'
        default:
          return 'border border-gray-dark rounded w-full pl-3 h-14 outline-none text-gray-dark text-lg font-light'
      }
    },
    element ({ classification }) {
      switch (classification) {
        default:
          return ''
      }
    },
    outer (context) {
      if (context.isGrouped) {
        return ''
      } else {
        switch (context.classification) {
          default:
            return 'text-red-500 w-full'
        }
      }
    },
    wrapper (context) {
      switch (context.classification) {
        case 'label':
          return ''
        case 'box':
          return 'flex'
        default:
          return 'text-lg font-medium'
      }
    },
    label (context) {
      switch (context.classification) {
        case 'wrapper':
          return ''
        case 'box':
          return 'text-sm ml-2'
        default:
          return 'text-xl font-semibold'
      }
    },
    help: '',
    error: 'text-xs text-red-400',
    uploadArea: '',
    file: '',
    files: '',
    uploadAreaMask: ''
  }
}
