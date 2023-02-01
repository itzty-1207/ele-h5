module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'ios >= 7'],
    },
    'postcss-pxtorem': {
      // 根节点fontsize值
      rootValue: 16,
      propsList: ['*'],
      // 忽略root配置的值，由于vant使用root定义了变量
      selectorBlackList: [':root'],
    },
  },
}
