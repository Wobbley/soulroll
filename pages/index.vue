<template>
  <div class="flex flex-col w-10/12 mx-auto mt-10">
    <div class="flex flex-row justify-center items-end space-x-4 mb-10">
      <div>
        <label class="block" for="name">Name</label>
        <input v-model="name" class="border border-black" type="text" name="username" />
      </div>
      <div>
        <label class="block" for="amount">Dice type</label>
        <input v-model="diceSize" class="border border-black" type="number" name="dice size" />
      </div>
      <div class="block">
        <label class="block" for="username">Amount of dice</label>
        <input v-model="diceAmount" class="border border-black" type="number" name="dice amount" />
      </div>
      <div>
        <label class="block" for="username">Success value (equal or higher)</label>
        <input v-model="success" class="border border-black" type="number" name="success" />
      </div>
      <div>
        <button
          class="bg-green-500 bg-green-700 text-white font-bold py-2 px-4 rounded"
          @click="rollDice(name, diceSize, diceAmount, success)"
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
          <!-- <p><b>Dice Size: </b>{{ roll.diceSize }}</p>
          <p><b>Dice Amount: </b>{{ roll.diceAmount }}</p>
          <p><b>Success: </b>{{ roll.success }}</p> -->
        </div>
        <div class="flex justify-center space-x-6 flex-row flex-wrap mb-6">
          <p><b>Rolls: </b></p>
          <div v-for="(dice, index) in roll.dice" :key="index" class="flex flex-row">
            {{ dice }}
          </div>
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
      diceSize: '',
      diceAmount: '',
      success: '',
    }
  },
  created() {
    const lastMonth = DateTime.local().minus({ months: 1 })
    this.$fire.firestore
      .collection('rooms')
      .doc('testing')
      .collection('rolls')
      .where('rollDate', '>', lastMonth.toMillis())
      .orderBy('rollDate')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const roll = change.doc.data()
            roll.id = change.doc.id
            this.rolls.unshift(roll)
            // eslint-disable-next-line no-console
            console.log(this.rolls)
          }
        })
      })
  },
  methods: {
    rollDice(name, diceSize, diceAmount, success) {
      const newRoll = {}
      newRoll.name = name
      newRoll.diceSize = diceSize
      newRoll.diceAmount = diceAmount
      newRoll.success = success
      newRoll.successes = 0
      newRoll.rollDate = Date.now()
      newRoll.dice = []
      let diceRolls = 0
      while (diceRolls < newRoll.diceAmount) {
        const result = 1 + Math.floor(Math.random() * newRoll.diceSize)
        if (result >= newRoll.success) {
          newRoll.successes++
        }
        newRoll.dice.push(result)
        diceRolls++
      }
      this.$fire.firestore.collection('rooms').doc('testing').collection('rolls').add(newRoll)
    },
  },
}
</script>

<style></style>
