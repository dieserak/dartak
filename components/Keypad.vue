<template>
  <div class="keypad">
    <v-radio-group style="grid-column: 2 / 4;" v-model="multiplicator" row>
      <v-radio label="Single" value @change="setMultiplikator('')"></v-radio>
      <v-radio label="Double" value="d" @change="setMultiplikator('d')"></v-radio>
      <v-radio label="Triple" value="t" @change="setMultiplikator('t')"></v-radio>
    </v-radio-group>
    <span @click="addNum('1')">1</span>
    <span @click="addNum('2')">2</span>
    <span @click="addNum('3')">3</span>
    <span @click="addNum('4')">4</span>
    <span @click="addNum('5')">5</span>
    <span @click="addNum('6')">6</span>
    <span @click="addNum('7')">7</span>
    <span @click="addNum('8')">8</span>
    <span @click="addNum('9')">9</span>
    <span @click="removeLast()">del</span>
    <span @click="addNum('0')">0</span>
    <span @click="enter()">-></span>
  </div>
</template>

<script>
export default {
  name: "Keypad",
  data() {
    return {
      input: "",
      multiplicator: ""
    };
  },
  computed: {
    multiValue() {
      return this.multiplicator + this.input;
    }
  },
  methods: {
    enter() {
      this.$emit("KeypadEnter", this.multiValue);
      this.input = "";
      this.multiplicator = "";
    },
    addNum(num) {
      this.input += num;
      this.$emit("KeypadClicked", this.multiValue);
    },
    removeLast() {
      this.input = this.input.slice(0, -1);
      this.$emit("KeypadClicked", this.multiValue);
    },
    setMultiplikator(multi) {
      this.multiplicator = multi;
      this.$emit("KeypadClicked", this.multiValue);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins.scss";

.keypad {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid var(--divider-color);
  border-left: 1px solid var(--divider-color);
  grid-auto-rows: 1fr;
  @include desktop {
    grid-column: 1 / span 2;
  }

  span {
    cursor: pointer;
    min-height: 44px;
    border-top: 1px solid var(--divider-color);
    border-right: 1px solid var(--divider-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>