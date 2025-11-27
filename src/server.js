const express = require('express');

const apiRoutes = require('./routes');

const config = require('./config/serverConfig');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api', apiRoutes);

app.listen(config.PORT, () => {
  logger.info(`🚀 Server running on port ${config.PORT} in ${config.NODE_ENV} mode`);
});