const EventEmitter = require('events')

class MyEvents extends EventEmitter {
  constructor() {
    super()
    setInterval(() => {
      this.emit('newLesson', { price: Math.random() * 100 })
    }, 3000)
  }
}

const lesson = new MyEvents()

lesson.addListener('newLesson', (res) => {
  console.log(res)
})