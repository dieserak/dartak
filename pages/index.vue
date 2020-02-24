<template>
  <div id="app">
    <div class="settings">
      <div class="settings__item">
        <h2 class="h2">Most used Plays:</h2>
        <div class="settings__actions">
          <Button
            full
            text="1 Spieler – 501 – Doubleout"
            @click.native="setAmountPlayers(1); setScore(501); setCheckout('d'); goNext = true;"
          />
          <Button
            full
            text="2 Spieler – 501 – Doubleout"
            @click.native="setAmountPlayers(2); setScore(501); setCheckout('d'); goNext = true;"
          />
        </div>
      </div>
      <div class="accordion" @click="moreSettingsVisible = !moreSettingsVisible">
        Erweitert
        <IconArrow
          class="accordion__icon"
          :class="{'accordion__icon--active': moreSettingsVisible}"
        />
      </div>
      <div v-if="moreSettingsVisible" class="accordion__item">
        <div class="settings__item">
          Players:
          <br />
          <!-- have to be radiobuttons -->
          <input type="radio" name="amountPlayers" @click="setAmountPlayers(1)" />
          1
          <input type="radio" name="amountPlayers" @click="setAmountPlayers(2)" />
          2
          <input type="radio" name="amountPlayers" @click="setAmountPlayers(3)" />
          3
          <input type="radio" name="amountPlayers" @click="setAmountPlayers(4)" />
          4
        </div>
        <div class="settings__item">
          X01
          <br />
          <input type="radio" name="x01" @click="setScore(301)" />
          301
          <input type="radio" name="x01" @click="setScore(501)" />
          501
          <input type="radio" name="x01" @click="setScore(701)" />
          701
        </div>
        <div class="settings__item">
          Checkout
          <br />
          <input type="radio" name="checkout" @click="setCheckout('s')" />
          Singleout
          <input type="radio" name="checkout" @click="setCheckout('d')" />
          Doubleout
          <input type="radio" name="checkout" @click="setCheckout('t')" />
          Masterout
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import IconArrow from "~/assets/arrow_drop_down-24px.svg?inline";

export default {
  name: "App",
  components: {
    IconArrow,
    Button
  },
  data() {
    return {
      moreSettingsVisible: false,
      amountPlayers: 2,
      score: 501,
      checkout: "d"
    };
  },
  methods: {
    setAmountPlayers(amount) {
      this.amountPlayers = amount;
    },
    setScore(score) {
      this.score = score;
    },
    setCheckout(checkout) {
      this.checkout = checkout;
      this.$router.push({name: "match"});
      // , params: { amountPlayers: this.amountPlayers, score: this.score, checkout: this.checkout }
    // <!-- <Match v-else :amount-players="amountPlayers" :score="score" :checkout="checkout" /> -->
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Bebas+Neue|Lora|Nunito|PT+Sans|Playfair+Display&display=swap");
@import "./styles/mixins.scss";
@import "./styles/variables.scss";

:root {
  /* spacing */
  --xs: 4px;
  --s: 8px;
  --m: 16px;
  --l: 24px;
  --xl: 32px;
  --xxl: 72px;

  /* color */
  --color-primary: #455a64;
  --color-primary-hover: #607d8b;
  --primary-color-light: #cfd8dc;
  --primary-color-text: #ffffff;
  --accent-color: #03a9f4;
  --primary-text-color: #2c3e50;
  --secondary-text-color: #757575;
  --divider-color: #bdbdbd;

  /* text */
  --text-base-size: 1em;
  --text-scale-ratio: 1.2;
  --text-xs: calc((1em / var(--text-scale-ratio)) / var(--text-scale-ratio));
  --text-sm: calc(var(--text-xs) * var(--text-scale-ratio));
  --text-md: calc(
    var(--text-sm) * var(--text-scale-ratio) * var(--text-scale-ratio)
  );
  --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
  --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
  --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
  --text-xxxl: calc(var(--text-xxl) * var(--text-scale-ratio));
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: var(--divider-color);
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

html,
body,
#app {
  height: 100%;
}
html,
body {
  margin: 0;
}

#app,
button {
  font-family: "Nunito", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary-text-color);
  font-size: 16px;
}

h1,
h2,
h3 {
  font-family: "Playfair Display";
}

h2 {
  font-size: 32px;
}

.settings__actions {
  @include desktop {
    display: grid;
    grid-template-columns: 50% 50%;
  }
}

.u-v-centered {
  display: flex;
  align-items: center;
}

.u-mr-s {
  margin-right: var(--s);
}

.settings {
  margin: var(--m);
  text-align: center;

  &__item {
    padding-bottom: var(--m);
  }
}

.input {
  height: 40px;
  border-radius: 2px;
  border: 1px solid #ccc;
  font-size: 24px;
  &--full-width {
    width: 100%;
  }
}

.accordion {
  display: flex;
  align-items: center;
  margin: var(--m) 0;
  cursor: pointer;
  justify-content: center;
  &__icon {
    &--active {
      transform: rotate(180deg);
    }
  }
}
</style>