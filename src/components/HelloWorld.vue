<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="emitAnEvent()">Emit an event go out</button>
    <div style="margin-top: 15px">
      <p>Enter something with $emit...</p>
      <input type="text" @[event]="$emit('inputEmit', $event.target.value)" />
    </div>
    <div style="margin-top: 15px">
      <p>Enter something with v-model...</p>
      <input type="text" v-model="message" />
      <p>{{message}}</p>
    </div>
    <p>Counter: {{counter}}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      counter: 0,
      message: "",
      value: "nguyendai",
      event: "input"
    };
  },
  methods: {
    emitAnEvent() {
      this.$emit("helloCom", {
        message: "This is HelloComponent",
        counter: ++this.counter
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
