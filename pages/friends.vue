<script setup lang="ts">
useHead({
  title: "Friends"
})

definePageMeta({
  layout: "pages"
})

const links = ref([
  {
    title: "Example Domain",
    link: "https://example.com/",
    iconUrl: "https://www.iana.org/_img/bookmark_icon.ico",
    description: "This domain is for use in illustrative examples in documents."
  },
  {
    title: "Yukina's Blog",
    link: "https://blog.cnmobile.link/",
    iconUrl: "https://cos.cnmobile.link/avatar/me.webp",
    description: "May all the beauty be blessed.——《Moon Halo》"
  },
  {
    title: "Yazawazi's Blog",
    link: "https://yazawazi.moe/",
    iconUrl: "https://yazawazi.moe/static/logo.png",
    description: "On the side of the sky"
  }
])
</script>

<template>
  <div class="container mx-auto px-8">
    <div class="text-left py-4">
      <h1 class="text-5xl font-light">Friends</h1>
    </div>
    <div class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <LinkCard
            v-for="link in links" :key="link.link" :title="link.title" :link="link.link" :icon-url="link.iconUrl"
            :description="link.description"/>
      </div>
    </div>
  </div>
</template>
