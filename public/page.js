/** The core Vue instance controlling the UI */
const vm = new Vue ({
    el: '#vue-instance',
    data () {
      return {
        cryptWorker: null,
        socket: null,
        originPublicKey: null,
        destinationPublicKey: null,
        messages: [],
        notifications: [],
        currentRoom: null,
        pendingRoom: Math.floor(Math.random() * 1000),
        draft: ''
      }
    },
    created () {
      this.addNotification('Hello World')
    },
    methods: {
      /** Append a notification message in the UI */
      addNotification (message) {
        const timestamp = new Date().toLocaleTimeString()
        this.notifications.push({ message, timestamp })
      },
    }
  })
  