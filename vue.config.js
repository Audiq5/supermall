// module.exports = {
//   configurewebpack: {
//     resolve: {
//       alias: {
//         'assets':'@/assets',
//         'common':'@/common',
//         'components':'@/components',
//         'network':'@/network'
//       }
//     },
//   },
// }
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}