<template>
  <div>
    <div class="header">
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Over</li>
      </ul>
    </div>
    <FormulateInput type="text" label="What is your name?" v-model="value" />
    <strong
      >Hello <em>{{ value }}</em></strong
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "Ey",
    };
  },
};
</script>

<style>
.header {
  max-width: 100%;
  margin: 0;
  height: 4rem;
  padding: 1.5rem 1rem;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
}

.header ul {
  display: flex;
}

.header li {
  text-decoration: none;
  display: flex;
  margin-left: 2rem;
  font-size: 1rem;
  font-weight: bold;
}
</style>
