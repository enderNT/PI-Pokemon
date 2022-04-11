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
sequelize.authenticate().then(() => {
  console.log('***Conection to DB succesful***')// eslint-disable-line no-console
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`) // eslint-disable-line no-console
  })
}).catch((e) => {
  throw new Error (e)
})
