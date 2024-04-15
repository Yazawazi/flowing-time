// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
    modules: ["@nuxt/fonts", "@nuxt/image"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    fonts: {
        families: [
            {name: "Monaco", provider: "local"}
        ]
    }
})
