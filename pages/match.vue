<template>
  <div class="match">
    <div class="scoreboard" :class="{'scoreboard--1': amountPlayers === 1}">
      <div
        v-for="player in players"
        :key="player.id"
        class="scoreboard-item"
        :class="{'scoreboard-item--disabled': turn !== player.id}"
      >
        <div>
          <v-btn @click.native="removeLastShot()">Letzten Wurf entfernen <v-icon>mdi-delete</v-icon></v-btn>

          <div class="scoreboard-item__player">Spieler {{ `${player.id}` }}</div>
          <div class="scoreboard-item__score">{{ player.score }}</div>
          <div>
            <div class="scoreboard-item__shot">
              <span v-for="(lastShot, i) in player.history" :key="`item${i}`">
                <span v-if="i % 3 === 0 && i !== 0">|</span>
                {{ lastShot }}
              </span>
            </div>
          </div>
          <Checkout :checkout="player.score" />
        </div>
        <v-text-field
          :ref="`input${player.id}`"
          v-model="player.shot"
          placeholder="Geworfener Dart"
          filled
          :readonly="$_isMobile"
          @keyup.enter="setNewScore()"
        ></v-text-field>
      </div>
      <Keypad @KeypadEnter="setNewScore()" @KeypadClicked="getValue" />
    </div>
    <vue-speech lang="de-DE" @onTranscriptionEnd="onSpeechEnd" />
  </div>
</template>

<script>
import { detectingMobileMixin } from "../mixins/detectingMobileMixin";
import { mapState } from "vuex";
import Checkout from "../components/Checkout.vue";
import Keypad from "../components/Keypad.vue";

export default {
  components: { Checkout, Keypad },
  mixins: [detectingMobileMixin],
  data() {
    return {
      roundDartsThrown: 0,
      players: [],
      turn: 0
    };
  },
  computed: {
    ...mapState({
      amountPlayers: state => state.amountPlayers,
      score: state => state.score,
      checkout: state => state.checkout
    }),
    currentPlayer() {
      return this.players[this.turn];
    }
  },
  mounted() {
    this.initMatch();
  },
  methods: {
    getValue(value) {
      this.currentPlayer.shot = value;
    },
    //eslint-disable-next-line
    onSpeechEnd({ lastSentence, transcription }) {
      let multiplicator = 1;
      let convertedNumber = Number(lastSentence);
      console.log(lastSentence);
      console.log("transcription", transcription);

      if (lastSentence.charAt(2) === "x") {
        multiplicator = Number(lastSentence.charAt(0));
        if (multiplicator > 3) {
          return;
        }
        convertedNumber = Number(lastSentence.slice(4));
        this.currentPlayer.shot = multiplicator * convertedNumber;
      } else if (Number.isInteger(convertedNumber)) {
        this.currentPlayer.shot = Number(lastSentence);
      } else {
        switch (lastSentence.toLowerCase()) {
          case "löschen":
            this.removeLastShot();
            break;
          case "ein":
          case "eins":
          case "rhein":
          case "sein":
            convertedNumber = 1;
            break;
          case "zwei":
            convertedNumber = 2;
            break;
          case "drei":
          case "sky":
            convertedNumber = 3;
            break;
          case "tier":
            convertedNumber = 4;
            break;
          case "schön":
            convertedNumber = 5;
            break;
          case "sexy":
          case "sex":
            convertedNumber = 6;
            break;
          case "8 uhr":
          case "ach":
            convertedNumber = 8;
            break;
          case "9 uhr":
            convertedNumber = 9;
            break;
          case "11 uhr":
            convertedNumber = 11;
            break;
          case "13 uhr":
            convertedNumber = 13;
            break;
          case "weiter":
            this.fillWithNoScores();
            break;
        }

        if (Number.isInteger(convertedNumber)) {
          this.currentPlayer.shot = convertedNumber;
        } else {
          return;
        }
      }
      this.setNewScore();
    },
    setNewScore() {
      const player = this.currentPlayer;
      const shot = player.shot;

      if (this.checkScoreTooHigh(player.shot)) {
        return;
      }

      player.history = [...player.history, this.calculateMultipicator(shot)];

      const oldLocalScore = player.score;
      player.score -= this.calculateMultipicator(shot);
      player.roundDartsThrown++;
      player.shot = "";

      this.checkScore(player, oldLocalScore);
      this.nextTurn(player);

      setTimeout(() => {
        const objDiv = document.getElementsByClassName("scoreboard-item__shot");
        [...objDiv].forEach(button => {
          button.scrollLeft = button.scrollWidth + 1000;
        });
      }, 100);
    },
    removeLastShot() {
      if (this.currentPlayer.roundDartsThrown > 0) {
        const getLastShot = this.currentPlayer.history.pop();
        this.currentPlayer.score += getLastShot;
        this.currentPlayer.roundDartsThrown--;
      }
    },
    checkScoreTooHigh(shot) {
      //have to check multiplication
      if (shot > 180) {
        alert("too high - max 180 possible");
        return true;
      }
      return false;
    },
    calculateMultipicator(shot) {
      const multiplicator = shot.toString().charAt(0);

      if (multiplicator === "d") {
        //have to check multiplication
        const d = Number(shot.slice(1)) * 2;
        this.checkScoreTooHigh(d);
        return d;
      } else if (multiplicator === "t") {
        //have to check multiplication
        const t = Number(shot.slice(1)) * 3;
        this.checkScoreTooHigh(t);
        return t;
      }
      return Number(shot);
    },
    nextTurn(player) {
      if (player.roundDartsThrown === 3) {
        this.goToNextPlayer();
      }
    },
    fillWithNoScores() {
      if (this.currentPlayer.roundDartsThrown === 2) {
        this.setNewScore();
      } else if (this.currentPlayer.roundDartsThrown === 1) {
        this.setNewScore();
        this.setNewScore();
      } else if (this.currentPlayer.roundDartsThrown === 0) {
        this.setNewScore();
        this.setNewScore();
        this.setNewScore();
      }
    },
    goToNextPlayer(fill) {
      this.currentPlayer.roundDartsThrown = 0;
      this.currentPlayer.shot = "";

      if (this.players.length - 1 > this.turn) {
        this.turn++;
      } else {
        this.turn = 0;
      }

      this.setFocusOnInput();
    },
    setFocusOnInput() {
      const ref = `input${this.turn}`;
      this.$refs[ref][0].focus();
    },
    //eslint-disable-next-line
    checkScore(player, oldScore) {
      const challengedScore = player.score;
      if (challengedScore < 0) {
        this.busted(player, oldScore);
      }
      if (this.checkout === "d") {
        if (challengedScore < 2 && challengedScore > 0) {
          this.busted(player, oldScore);
        }
      }
      if (this.checkout === "t") {
        if (challengedScore < 3 && challengedScore > 0) {
          this.busted(player, oldScore);
        }
      } else if (challengedScore === 0) {
        alert("Winner");
        this.initMatch();
      }
    },
    initMatch() {
      this.players = [];
      for (let i = 0; i < this.amountPlayers; i++) {
        const playerObject = {
          id: i,
          score: this.score,
          shot: "",
          round: "",
          roundDartsThrown: 0,
          history: []
        };
        this.players = [...this.players, playerObject];
      }
    },
    busted(player, oldScore) {
      alert("überowrfen");
      player.score = oldScore;
      this.nextTurn(player);
    }
  }
};
</script>

<style lang="scss">
@import "../styles/mixins.scss";

.scoreboard-item {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: calc(100vw - 40px);
  @include desktop {
    max-width: calc(50vw - 40px);
  }

  &__player {
    font-size: 20px;
  }
  &__score {
    font-size: 90px;
  }
  &--disabled {
    pointer-events: none;
    opacity: 0.2;
  }
  &__shot {
    height: 60px;
    font-size: 40px;
    white-space: nowrap;
    overflow: auto;
  }
}
.scoreboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  @media only screen and (max-width: 678px) {
    grid-template-columns: 1fr;
  }
  &--1 {
    grid-template-columns: 1fr;
  }
}
.match {
  height: 100%;
}
</style>