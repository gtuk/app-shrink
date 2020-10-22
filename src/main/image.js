import fs from 'fs'
import path from 'path'

const Shrink = require('node-shrink')

export default class Image {
  constructor (name, path, size) {
    this.id = '_' + Math.random().toString(36).substr(2, 9)
    this.name = name
    this.path = path
    this.size = size
    this.optimized = false
    this.optimizedPath = null
    this.optimizedSize = null
    this.saving = null
    this.error = false
  }

  async optimize () {
    const fileBuffer = fs.readFileSync(this.path)

    const res = await Shrink.optimize(fileBuffer)
    const ext = path.parse(this.path).ext
    const optimizedPath = this.path.replace(ext, '_optimized' + ext)

    fs.writeFileSync(optimizedPath, res)
    const {size} = fs.statSync(optimizedPath)

    this.optimized = true
    this.optimizedSize = size
    this.optimizedPath = optimizedPath
    this.saving = (((this.size - this.optimizedSize) / this.size) * 100).toFixed(2)
  }
}
