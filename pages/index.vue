<template>
  <div>
    hallo
    <ul>
      <li v-for="data in list" :key="data">
        {{ data.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{ text: "1" }, { text: "2" }, { text: "3" }],
    };
  },
};
</script>
