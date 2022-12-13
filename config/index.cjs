/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx067a76dc96dfdcd1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2f746925ca3f6fec5e50a5016602e8a2',
  
  TIAN_API: {
    key: 'bfb6b36561a9fcec8ee4e10f0f14128d',
    
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 0,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },
  PROVINCE: '黔西南州',
  CITY: '望谟县',

  USERS: [
    {
      // 想要发送的人的名字
      name: '念念宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oThCa5k-4b7Q0S3mcowRUxqZofgA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RRCxX2QAcfwtZA_S9qrPN_PqOUNaQfNF6Tzwuexd4sU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-01',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '在一起纪念日', year: '2020', date: '10-21',
        },
        {
          type: '生日', name: '念念宝贝', year: '2000', date: '05-01',
        },
        {
          type: '节日', name: '第一次认识纪念日', year: '2020', date: '09-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-21' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],
  USERS: [
    {
      // 想要发送的人的名字
      name: '念念宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oThCa5tJ-ZuY_WILCCl0mHnUhQDQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RRCxX2QAcfwtZA_S9qrPN_PqOUNaQfNF6Tzwuexd4sU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-01',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '在一起纪念日', year: '2020', date: '10-21',
        },
        {
          type: '生日', name: '念念宝贝', year: '2000', date: '05-01',
        },
        {
          type: '节日', name: '第一次认识纪念日', year: '2020', date: '09-19',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-21' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '9jMO9VWiBChiYJSGkOZS4eq88Zkrng-n9eYgaetZ0yk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oThCa5tJ-ZuY_WILCCl0mHnUhQDQ',
    }
  ],

}

module.exports = USER_CONFIG

