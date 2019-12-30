<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input"
                               aria-describedby="inputGroupFileAddon01" @change="uploadImage($event)" id="file-input">
                        <label class="custom-file-label" for="file-input">{{ imageName }}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <canvas id="canvas"></canvas>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="form-group">
                    <label for="desc">Opis postu</label>
                    <textarea class="form-control" id="desc" v-model="description"></textarea>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <button class="btn btn-primary" @click="drawImageWithNoFilters" :disabled="!image">Resetuj obrazek
                </button>
            </div>
            <div class="col-4">
                <button class="btn btn-primary" @click="drawRandomFilter" :disabled="!image">Losowy filtr</button>
            </div>
            <div class="col-4">
                <button class="btn btn-primary" :disabled="!image" @click="uploadImageToServer">Wgraj</button>
            </div>
        </div>
    </div>
</template>

<script>
    function randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    };

    function randomColor() {
        return `rgba(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}, 0.5`;
    }

    export default {
        name: "NewPost",

        data() {
            return {
                imageName: 'Wybierz plik',
                image: null,
                canvas: null,
                ctx: null,
                description: ''
            }
        },

        mounted() {
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
        },

        methods: {
            drawImageWithNoFilters() {
                this.ctx.drawImage(this.image, 0, 0);
            },
            drawRandomFilter() {
                this.drawImageWithNoFilters();
                const grd = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);

                grd.addColorStop(0, randomColor());
                grd.addColorStop(1, randomColor());

                this.ctx.fillStyle = grd;
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            },
            uploadImage(event) {
                const self = this;
                const reader = new FileReader();
                self.imageName = event.target.files[0].name;
                reader.readAsDataURL(event.target.files[0]);
                reader.onloadend = (e) => {
                    self.image = new Image();
                    self.image.src = e.target.result;
                    self.image.onload = (ev) => {
                        self.canvas.width = self.image.width;
                        self.canvas.height = self.image.height;
                        self.drawImageWithNoFilters();
                    };
                };
            },

            uploadImageToServer() {
                const self = this;
                let data = new FormData();

                const config = {
                    header: {
                        'Content-Type': 'image/png'
                    }
                };

                self.canvas.toBlob((blob) => {
                    data.append('photo', blob);
                    data.append('description', self.description);

                    self.axios
                        .put('/post/upload', data, config)
                        .then(res => {
                            console.log(res)
                        });
                });
            }
        }
    }
</script>

<style scoped>
    canvas {
        max-width: 20vw;
    }
</style>