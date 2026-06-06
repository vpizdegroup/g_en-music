<template>
  <div class="phone-frame">
    <!-- Notch and Status Icons -->
    <div class="notch"></div>
    <div class="status-icons">
      <div class="status-icon"></div>
    </div>

    <!-- Header with Logo -->
    <div class="header">
      <div class="header-logo">✦</div>
      <div></div>
    </div>

    <!-- AI Button (Pill) -->
    <button class="ai-button" @click="openPlayer">
      <div class="ai-button-logo"></div>
      <span>gen AI</span>
    </button>

    <!-- Content Area with Playlists -->
    <div class="content">
      <div class="playlists-container">
        <div 
          v-for="playlist in playlists" 
          :key="playlist.id"
          class="playlist-card"
          @click="selectPlaylist(playlist)"
        >
          <div class="playlist-icon"></div>
        </div>
      </div>
    </div>

    <!-- Player Bar (shows if track is playing) -->
    <div v-if="currentTrack" class="player-bar" @click="openPlayer">
      <div class="track-name">{{ currentTrack.name }}</div>
      <div class="play-button">▶</div>
    </div>

    <!-- Full Player Modal -->
    <div :class="['player-modal', { active: isPlayerOpen }]" @click.self="closePlayer">
      <div class="player-content">
        <!-- Player Header -->
        <div class="player-header">
          <div></div>
          <button class="close-button" @click="closePlayer">×</button>
        </div>

        <!-- Player Body -->
        <div class="player-body">
          <!-- Album Art -->
          <div class="album-art">
            <div class="album-icon"></div>
          </div>

          <!-- Progress Container -->
          <div class="progress-container">
            <div class="progress-bar" @click="seek">
              <div class="progress" :style="{ width: progress + '%' }"></div>
              <div class="progress-handle" :style="{ left: progress + '%' }"></div>
            </div>
            <div class="time-display">
              <span>{{ formatTime(currentTime) }}</span>
              <span>{{ formatTime(duration) }}</span>
            </div>
          </div>

          <!-- Controls -->
          <div class="controls">
            <button class="control-button" @click="previousTrack">⏮</button>
            <button class="control-button play" @click="togglePlay">
              {{ isPlaying ? '⏸' : '▶' }}
            </button>
            <button class="control-button" @click="nextTrack">⏭</button>
          </div>
        </div>

        <!-- Player Footer -->
        <div class="player-footer">
          <div class="lyrics-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>lyrics</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayer',
  data() {
    return {
      isPlayerOpen: false,
      isPlaying: false,
      currentTime: 0,
      duration: 180,
      progress: 0,
      currentTrack: null,
      playlists: [
        { id: 1, name: 'Playlist 1' },
        { id: 2, name: 'Playlist 2' },
        { id: 3, name: 'Playlist 3' },
        { id: 4, name: 'Playlist 4' }
      ],
      tracks: [
        { id: 1, name: 'Track 1', duration: 240 },
        { id: 2, name: 'Track 2', duration: 200 },
        { id: 3, name: 'Track 3', duration: 180 },
        { id: 4, name: 'Track 4', duration: 210 }
      ]
    };
  },
  methods: {
    openPlayer() {
      if (!this.currentTrack && this.tracks.length > 0) {
        this.currentTrack = this.tracks[0];
      }
      this.isPlayerOpen = true;
    },
    closePlayer() {
      this.isPlayerOpen = false;
    },
    selectPlaylist(playlist) {
      // Select first track from playlist
      if (this.tracks.length > 0) {
        this.currentTrack = this.tracks[0];
        this.openPlayer();
      }
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.startPlayback();
      }
    },
    startPlayback() {
      const interval = setInterval(() => {
        if (this.isPlaying) {
          this.currentTime += 0.1;
          this.progress = (this.currentTime / this.duration) * 100;
          
          if (this.currentTime >= this.duration) {
            this.nextTrack();
          }
        } else {
          clearInterval(interval);
        }
      }, 100);
    },
    nextTrack() {
      const currentIndex = this.tracks.findIndex(t => t.id === this.currentTrack.id);
      if (currentIndex < this.tracks.length - 1) {
        this.currentTrack = this.tracks[currentIndex + 1];
      } else {
        this.currentTrack = this.tracks[0];
      }
      this.currentTime = 0;
      this.progress = 0;
      if (this.isPlaying) {
        this.startPlayback();
      }
    },
    previousTrack() {
      const currentIndex = this.tracks.findIndex(t => t.id === this.currentTrack.id);
      if (currentIndex > 0) {
        this.currentTrack = this.tracks[currentIndex - 1];
      } else {
        this.currentTrack = this.tracks[this.tracks.length - 1];
      }
      this.currentTime = 0;
      this.progress = 0;
      if (this.isPlaying) {
        this.startPlayback();
      }
    },
    seek(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const percentage = (event.clientX - rect.left) / rect.width;
      this.currentTime = percentage * this.duration;
      this.progress = percentage * 100;
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
  },
  mounted() {
    // Initialize first track
    if (this.tracks.length > 0) {
      this.currentTrack = this.tracks[0];
    }
  }
};
</script>

<style scoped>
/* Component specific styles if needed */
</style>
