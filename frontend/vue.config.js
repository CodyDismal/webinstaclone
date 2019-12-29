module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    devServer: {
        proxy: 'http://localhost:3000' // enter dev server url here
    }
}