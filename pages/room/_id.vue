<template>
  <div class="flex flex-col w-10/12 mx-auto mt-10">
    <div class="flex flex-col justify-center items-center mb-10 lg:space-x-4 lg:items-end lg:flex-row">
      <div>
        <label class="block" for="name">Name</label>
        <input v-model="name" class="border border-black" type="text" name="username" />
      </div>
      <div>
        <label class="block" for="amount">Dice type</label>
        <input v-model="diceSize" class="border border-black" type="number" name="dice size" />
      </div>
      <div class="block">
        <label class="block" for="username">Dice amount</label>
        <input v-model="diceAmount" class="border border-black" type="number" name="dice amount" />
      </div>
      <div>
        <label class="block" for="username">Success threshold</label>
        <input v-model="successThreshold" class="border border-black" type="number" name="success threshold" />
      </div>
      <div class="mt-2">
        <button
          class="hover:bg-green-600 bg-green-700 text-white font-bold py-1 px-3"
          @click="rollDice(name, diceSize, diceAmount, successThreshold)"
        >
          Roll
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <div v-for="roll in rolls" :key="roll.id" class="border-t border-black">
        <div class="flex justify-center space-x-6 flex-row mb-1 mt-6">
          <p><b>Name: </b>{{ roll.name }}</p>
          <p><b>Successes: </b>{{ roll.successes }}</p>
        </div>
        <div class="flex justify-center space-x-6 flex-row flex-wrap mb-2">
          <p><b>Rolls: </b></p>
          <div v-for="(dice, index) in roll.dice" :key="index" class="flex flex-row">
            {{ dice }}
          </div>
        </div>
        <div class="flex justify-center space-x-6 flex-row text-gray-500 text-sm">
          <p><b>Dice type: </b>{{ roll.diceSize }}</p>
          <p><b>Dice Amount: </b>{{ roll.diceAmount }}</p>
          <p><b>Success threshold: </b>{{ roll.successThreshold }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  data() {
    return {
      rolls: [],
      name: '',
      diceSize: 6,
      diceAmount: '',
      successThreshold: '',
      roomName: this.$route.params.id,
    }
  },
  created() {
    const newerThan = DateTime.local().minus({ days: 7 })
    this.$fire.firestore
      .collection('rooms')
      .doc(this.roomName)
      .collection('rolls')
      .where('rollDate', '>', newerThan.toMillis())
      .orderBy('rollDate')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const roll = change.doc.data()
            roll.id = change.doc.id
            this.rolls.unshift(roll)
          }
        })
      })
  },
  methods: {
    rollDice(name, diceSize, diceAmount, successThreshold) {
      const newRoll = {}
      newRoll.name = name
      newRoll.diceSize = diceSize
      newRoll.diceAmount = diceAmount
      newRoll.successThreshold = successThreshold
      newRoll.successes = 0
      newRoll.rollDate = Date.now()
      newRoll.dice = []
      let diceRolls = 0
      while (diceRolls < newRoll.diceAmount) {
        const result = 1 + Math.floor(Math.random() * newRoll.diceSize)
        if (result >= newRoll.successThreshold) {
          newRoll.successes++
        }
        newRoll.dice.push(result)
        diceRolls++
      }
      this.$fire.firestore.collection('rooms').doc(this.roomName).collection('rolls').add(newRoll)
    },
  },
}
</script>

<style></style>
