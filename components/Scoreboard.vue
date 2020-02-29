<template>
  <div class="scoreboard" :class="{'scoreboard--1': amountPlayers === 1}">
    <div v-for="player in players" :key="player.id" class="scoreboard-item"
      :class="{'scoreboard-item--disabled': turn !== player.id}">
      <div>
        <v-btn @click.native="removeLastShot()">
          Letzten Wurf entfernen
          <v-icon>mdi-delete</v-icon>
        </v-btn>

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
    </div>
</template>

<script>
  export default {

  }

</script>

<style>

</style>
