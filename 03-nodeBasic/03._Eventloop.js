const Eventloop = {
  queue: [],
  loop() {
    while (this.queue.length) {
      let cb = this.queue.shift()
      cb()
    }
    setTimeout(this.loop.bind(this), 50)
  },

  add(cb) {
    this.queue.push(cb)
  }
}

Eventloop.loop()

setTimeout(() => {
  Eventloop.add(() => {
    console.log(1)
  })
}, 500)

setTimeout(() => {
  Eventloop.add(() => {
    console.log(2)
  })
}, 800)