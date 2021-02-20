<template>
  <div class="flex items-center flex-col mt-10 space-y-4">
    <h1 class="text-4xl">Soulroll</h1>
    <p>A simple site where you and your friends can roll dice.</p>
    <p>Create a room or join an exisiting one by using an url</p>
    <div class="flex space-x-4 flex-row items-end">
      <div>
        <label class="block" for="roomName">Room name</label>
        <input v-model="roomName" class="border border-black" type="text" name="roomName" />
      </div>
      <button class="hover:bg-green-600 bg-green-700 text-white font-bold py-0.5 px-3" @click="createRoom(roomName)">
        Create Room
      </button>
    </div>
    <label v-show="error" class="block text-red-500 text-sm" for="roomName">{{ error }}</label>
  </div>
</template>

<script>
import slugify from 'slugify'

export default {
  data() {
    return {
      roomName: '',
      error: '',
    }
  },
  methods: {
    createRoom(roomName) {
      const roomNameSlug = slugify(roomName, {
        replacement: '-',
        remove: /[$*_+~.()'"!\-:@]/g,
        lower: true,
      })
      this.$fire.firestore
        .collection('rooms')
        .doc(roomNameSlug)
        .get()
        .then((doc) => {
          if (doc.exists) {
            // eslint-disable-next-line no-console
            this.error = 'Room already exists'
            return
          }
          this.$fire.firestore.collection('rooms').doc(roomNameSlug).set({})
          this.error = ''
          this.$router.push({ name: 'room-id', params: { id: roomNameSlug } })
        })
    },
  },
}
</script>

<style></style>
