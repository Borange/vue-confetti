import Confetti from './confetti'

export default {
  install (Vue, options) {
    if (this.installed) {
      return
    }
    this.installed = true
    Vue.prototype.$confetti = new Confetti(options)
  }
}
