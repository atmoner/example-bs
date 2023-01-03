const express = require('express')
var osu = require('node-os-utils')
const app = express()
const port = 3000

var cpu = osu.cpu
var mem = osu.mem
var drive = osu.drive

app.get('/', async (req, res) => {
  let cpuOutput = await cpu.usage()
  let memOutput = await mem.info()
  let spaceOutput = await drive.info()
  res.json({ 
    cpu: cpuOutput, 
    memory: memOutput, 
    space: spaceOutput 
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}) 
