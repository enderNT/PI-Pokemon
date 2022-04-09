//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js')
const { sequelize } = require('./src/db/models/index.js')

const { PORT } = process.env

// Syncing all the models at once.
server.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log('***Conection to DB succesful***') // eslint-disable-line no-console
    console.log(`%s listening at ${PORT}`) // eslint-disable-line no-console
  } catch (error) {
    throw new Error(err)
  }
})
