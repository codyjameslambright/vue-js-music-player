const app = Vue.createApp({
    data() {
        return {
            current: {},
            index: 0,
            isPlaying: false,
            songs: [
                {
                    title: 'Adventure',
                    artist: 'Benjamin Tissot',
                    src: './assets/bensound-adventure.mp3'
                },
                {
                    title: 'Deep Urban',
                    artist: 'Eugenio Mininni',
                    src: './assets/mixkit-deep-urban.mp3'
                },
                {
                    title: 'Life is a Dream',
                    artist: 'Michael Ramir C.',
                    src: './assets/mixkit-life-is-a-dream.mp3'
                },
                {
                    title: 'Serene View',
                    artist: 'Arulo',
                    src: './assets/mixkit-serene-view.mp3'
                }
            ],
            player: new Audio()
        };
    },
    created() {
        this.current = this.songs[this.index];
        this.player.src = this.current.src;
    },
    methods: {
        play(song) {
            if (typeof song.src != 'undefined') {
                this.current = song;
                this.player.src = this.current.src;
            }

            this.player.play();
            this.player.addEventListener('ended', function() {
                this.index++;

                if (this.index > this.songs.length - 1) {
                    this.index = 0;
                }
    
                this.current = this.songs[this.index];
                this.play(this.current);    
            }.bind(this));
            this.isPlaying = true;
        },
        pause() {
            this.player.pause();
            this.isPlaying = false;
        },
        next() {
            this.index++;
            if (this.index > this.songs.length - 1) {
                this.index = 0;
            }

            this.current = this.songs[this.index];
            this.play(this.current);
        },
        prev() {
            this.index--;
            if (this.index < 0) {
                this.index = this.songs.length -1;
            }

            this.current = this.songs[this.index];
            this.play(this.current);
        }
    }
});

app.mount('#app');