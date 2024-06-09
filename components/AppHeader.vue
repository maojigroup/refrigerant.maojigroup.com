<script setup lang="ts">
const NAV_LINKS = [
  { title: 'Home', url: '/' },
  { title: 'Products', url: '/products/' },
  { title: 'Contact', url: '/contact/' },
  { title: 'About Us', url: '/#about-us' },
];
</script>

<template>
  <div class="sticky top-0 z-50 bg-white md:border-b">
    <header
      class="container relative z-10 flex items-center justify-between py-4"
    >
      <img
        class="h-6 w-auto lg:h-8"
        src="/logo@1x.png"
        width="673"
        height="60"
        alt="MAOJI GROUP | MAOJI gas"
      />

      <headless-menu as="div" class="relative md:hidden">
        <div>
          <headless-menu-button>
            <Icon class="!block" name="material-symbols:menu" size="24px" />
          </headless-menu-button>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="scale-95 transform opacity-0"
          enter-to-class="scale-100 transform opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="scale-100 transform opacity-100"
          leave-to-class="scale-95 transform opacity-0"
        >
          <headless-menu-items
            class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <headless-menu-item
                v-for="(link, i) of NAV_LINKS"
                :key="i"
                v-slot="{ active, close }"
              >
                <router-link
                  class="block w-full rounded-md px-2 py-2 text-sm"
                  :class="[
                    active ? 'bg-primary-500 text-white' : 'text-gray-900',
                  ]"
                  :to="link.url"
                  @click.capture="close"
                  >{{ link.title }}</router-link
                >
              </headless-menu-item>
            </div>
          </headless-menu-items>
        </transition>
      </headless-menu>
      <nav class="hidden space-x-3 uppercase md:block">
        <router-link
          v-for="(link, i) of NAV_LINKS"
          :key="i"
          class="rounded bg-neutral-100 px-4 py-2 hover:text-primary-500"
          :to="link.url"
          :active-class="link.url.includes('#') ? '' : 'text-primary-500'"
          >{{ link.title }}</router-link
        >
      </nav>
    </header>
  </div>
</template>
