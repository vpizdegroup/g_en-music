<template>
  <div class="phone-frame">
    <div class="notch"></div>
    <div class="status-icons">
      <div class="status-icon"></div>
    </div>

    <div class="header">
      <div class="header-logo">✦</div>
      <div></div>
    </div>

    <button class="ai-button" @click="openPlayer">
      <div class="ai-button-logo"></div>
      <span>gen AI</span>
    </button>

    <div class="content">
      <div class="playlists-container">
        <div v-for="playlist in playlists" :key="playlist.id" class="playlist-card" @click="selectPlaylist(playlist)">
          <div class="playlist-icon"></div>
        </div>
      </div>
    </div>

    <div v-if="currentTrack" class="player-bar" @click="openPlayer">
      <div class="track-name">{{ currentTrack.name }}</div>
      <div class="play-button">▶</div>
    </div>

    <div :class="['player-modal', { active: isPlayerOpen }]" @click.self="closePlayer">
      <div class="player-content">
        <div class="player-header">
          <div></div>
          <button class="close-button" @click="closePlayer">×</button>
        </div>

        <div class="player-body">
          <div class="album-art">
            <div class="album-icon"></div>
          </div>

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

          <div class="controls">
            <button class="control-button" @click="previousTrack">⏮</button>
            <button class="control-button play" @click="togglePlay">{{ isPlaying ? '⏸' : '▶' }}</button>
            <button class="control-button" @click="nextTrack">⏭</button>
          </div>
        </div>

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
  name: 'App',
  data() {
    return {
      isPlayerOpen: false,
      isPlaying: false,
      currentTime: 0,
      duration: 180,
      progress: 0,
      currentTrack: null,
      playInterval: null,
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
      if (this.tracks.length > 0) {
        this.currentTrack = this.tracks[0];
        this.openPlayer();
      }
    },
    togglePlay() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.startPlayback();
      } else {
        if (this.playInterval) clearInterval(this.playInterval);
      }
    },
    startPlayback() {
      if (this.playInterval) clearInterval(this.playInterval);
      this.playInterval = setInterval(() => {
        if (this.isPlaying) {
          this.currentTime += 0.1;
          this.progress = (this.currentTime / this.duration) * 100;
          if (this.currentTime >= this.duration) {
            this.nextTrack();
          }
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
      this.duration = this.currentTrack.duration || 180;
      if (this.isPlaying) this.startPlayback();
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
      this.duration = this.currentTrack.duration || 180;
      if (this.isPlaying) this.startPlayback();
    },
    seek(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const percentage = (event.clientX - rect.left) / rect.width;
      this.currentTime = Math.max(0, Math.min(percentage * this.duration, this.duration));
      this.progress = (this.currentTime / this.duration) * 100;
    },
    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
  },
  mounted() {
    if (this.tracks.length > 0) {
      this.currentTrack = this.tracks[0];
    }
  },
  beforeUnmount() {
    if (this.playInterval) clearInterval(this.playInterval);
  }
};
</script>