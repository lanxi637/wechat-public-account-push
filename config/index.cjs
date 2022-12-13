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

  PROVINCE: '贵州省',
  CITY: '望谟县',

  USERS: [
    {
      // 想要发送的人的名字
      name: '念念宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oThCa5tJ-ZuY_WILCCl0mHnUhQDQ',
      id: 'oThCa5k-4b7Q0S3mcowRUxqZofgA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'neEB3qpaywwqHkv30r2jLWJ-wd5y5PZK0hBzoiVzjeg',
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
  CALLBACK_TEMPLATE_ID: 'oThCa5tJ-ZuY_WILCCl0mHnUhQDQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oThCa5tJ-ZuY_WILCCl0mHnUhQDQ',
    }
  ],

}

module.exports = USER_CONFIG

