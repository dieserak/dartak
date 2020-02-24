<template>
  <div id="app">
    <div class="settings">
      <div class="settings__item">
        <h2>Most used Plays:</h2>
        <div class="settings__actions">
          <v-btn
            outlined
            @click.native="setAll(1, 501, 'd')"
          >1 Spieler – 501 – Doubleout</v-btn>
          <v-btn
            outlined
            @click.native="setAll(2, 501, 'd')"
          >2 Spieler – 501 – Doubleout</v-btn>
        </div>
      </div>
      <v-expansion-panels accordion class="mt-2">
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu-down">Erweitert</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-radio-group v-model="amountPlayers">
              <v-radio label="1" :value="1"></v-radio>
              <v-radio label="2" :value="2"></v-radio>
              <v-radio label="3" :value="3"></v-radio>
              <v-radio label="4" :value="4"></v-radio>
            </v-radio-group>

            <v-radio-group v-model="score">
              <v-radio label="301" :value="301"></v-radio>
              <v-radio label="501" :value="501"></v-radio>
              <v-radio label="701" :value="701"></v-radio>
            </v-radio-group>

            <v-radio-group v-model="checkout">
              <v-radio label="Singleout" value="s"></v-radio>
              <v-radio label="Doubleout" value="d"></v-radio>
              <v-radio label="Masterout" value="t"></v-radio>
            </v-radio-group>
            <v-btn
              :disabled="!(amountPlayers && score && checkout)"
              outlined
              @click.native="setAll(amountPlayers, score, checkout)"
            >{{ amountPlayers }} Spieler – {{score}} – {{stringOfCheckout}} – bestätigen</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import IconArrow from "~/assets/arrow_drop_down-24px.svg?inline";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    IconArrow
  },
  data() {
    return {
      checkout: "s",
      amountPlayers: 2,
      score: 501,
      moreSettingsVisible: false
    };
  },
  computed:{
    stringOfCheckout(){
      if(this.checkout === "s") return "Singleout"
      if(this.checkout === "d") return "Doubleout"
      if(this.checkout === "t") return "Masterout"
    }
  },
  methods: {
    setAll(amount, score, checkout){
      this.setAmountPlayers(amount);
      this.setScore(score);
      this.setCheckout(checkout);
      this.submit();
    },
    setAmountPlayers(amount) {
      this.$store.commit("setAmountPlayers", amount);
    },
    setScore(score) {
      this.$store.commit("setScore", score);
    },
    setCheckout(checkout) {
      this.$store.commit("setCheckout", checkout);
    },
    submit() {
      this.$router.push({ name: "match" });
    }
  }
};
</script>