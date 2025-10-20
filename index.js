const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
