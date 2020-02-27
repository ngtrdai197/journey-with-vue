<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :msg="message" @helloCom="receiveData" @inputEmit="inputEmitEvent" />
    <h6>{{inputEvent}}</h6>
    <h6>{{handleShow}}</h6>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "Welcome to my Vue app =))",
      messageReceived: "",
      counter: 0,
      inputEvent: ""
    };
  },
  computed: {
    handleShow() {
      return this.counter > 5 && this.counter < 10 ? this.messageReceived : "";
    }
  },
  methods: {
    receiveData($event) {
      this.messageReceived = $event.message;
      this.counter = $event.counter;
    },
    inputEmitEvent($event) {
      this.inputEvent = $event;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
