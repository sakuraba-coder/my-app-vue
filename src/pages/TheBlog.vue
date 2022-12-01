<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = ref(route.params.id);

watch(route, () => {
  id.value = route.params.id;
});

const posts = ref([]);
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  posts.value = response.json();
};
fetchData();
</script>

<template>
  <p>blog pages</p>

  <!-- <div>test{{ posts.value }}</div> -->

  <!-- <ul>
    <li v-for="post in posts" :key="post.id">
      {{ post.id }}:{{ post.title }}
      <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
    </li>
  </ul> -->

  <!-- <ul>
    <li v-for="test in tests" :key="test.id">
      {{ test.id }} : {{ test.name }}
    </li>
  </ul> -->
</template>

<style scoped>
ul {
  margin-top: 12px;
}

li {
  margin-top: 8px;
  border: 1px solid #ccc;
  padding: 8px;
}

li:hover {
  background-color: #eee;
}
</style>
