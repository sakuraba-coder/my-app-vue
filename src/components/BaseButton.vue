<script setup>
// eslint-disable-next-line
const props = defineProps({ color: String });
// eslint-disable-next-line
const emit = defineEmits(["on-click"]);
const onClick = () => {
  emit("on-click");
};
</script>

<template>
  <button class="btn" v-bind:class="props.color" @click="onClick">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 8px;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-size: 14px;
}
.blue {
  background-color: #03a9f4;
}
.green {
  background-color: #00c835;
}
.pink {
  background-color: #ff4081;
}
</style>
