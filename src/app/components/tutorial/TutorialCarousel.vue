<template>
  <v-carousel
    light
    hide-delimiter-background
    v-model="carousel"
    :touch="touch"
    :continuous="false"
    :show-arrows="false"
  >
    <TutorialCarouselItem
      :title="$t('tutorial.step1.title')"
      :text="$t('tutorial.step1.text')"
      :image="'step-1.svg'"
      @next="next()"
      @skip="skip()"
    />
    <TutorialCarouselItem
      :title="$t('tutorial.step2.title')"
      :text="$t('tutorial.step2.text')"
      :image="'step-2.svg'"
      @next="next()"
      @skip="skip()"
    />
    <TutorialCarouselItem
      last
      :title="$t('tutorial.step3.title')"
      :text="$t('tutorial.step3.text')"
      :image="'step-3.svg'"
      @next="next()"
      @skip="skip()"
    />
  </v-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api"
import TutorialCarouselItem from "@/app/components/tutorial/TutorialCarouselItem.vue"
import { setHasDoneTutorial } from "@/app/reactive/tutorial.state"

export default defineComponent({
  components: { TutorialCarouselItem },
  setup(props, { root }) {
    const carousel = ref(0)

    const touch = {
      left: () => carousel.value--,
      right: () => carousel.value++,
    }

    function next() {
      if (carousel.value === 2) {
        return skip()
      }
      carousel.value = carousel.value + 1
    }

    function skip() {
      setHasDoneTutorial(true)
      root.$router.replace({ name: "home" })
    }

    return { carousel, touch, skip, next }
  },
})
</script>
