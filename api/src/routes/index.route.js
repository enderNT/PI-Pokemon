const { Router } = require('express')
const fs = require('fs')

const router = Router()

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

fs.readdirSync(__dirname).forEach((file) => {
  const files = removeExtension(file)
  const SKIP = ['index'].includes(files)
  if (!SKIP) {
    router.use(`/${files}`, require(`./${file}`))
  }
})

router.use('/', (_, res) => res.status(200).json({ Greeting: 'Welcome C:' }))

module.exports = router
