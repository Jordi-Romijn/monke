<template>
  <div>
    hallo
    <ul>
      <li v-for="data in list" :key="data">
        {{ data.text }}
      </li>
    </ul>
    {{ $t('hallo') }}
    <nuxt-link 
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
      {{ locale.name }}e
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{ text: "1" }, { text: "2" }, { text: "3" }],
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    }
  }
};
</script>
