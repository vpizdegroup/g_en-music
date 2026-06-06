import { createApp } from 'vue'
import MusicPlayer from './components/MusicPlayer.vue'

const app = createApp({
  components: {
    MusicPlayer
  },
  template: `<MusicPlayer />`
})

app.mount('#app')
