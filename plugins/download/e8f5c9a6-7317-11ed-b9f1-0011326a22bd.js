/**
 * @title 菜单
 * @origin mikutechnology
 * @on_start true
 * @create_at 2022-12-05 01:02:03
 * @description 小白专用
 * @public true
 * @encrypt false
 * @author mikufans
 * @version v1.0.1
 */
 const s = sender

 s.listen([
     `菜单`,
 ], function (s) {
 s.reply('登录&登陆&上车---登录京东\n查询---查询京东资产\n发ck和wskey给机器人---可直接上京东车\n修改备注---修改京东账号备注\n登录饿了---目前暂时无法使用，只能使用网页面板登录，请发送：elm获取面板链接\n记录饿了---发送饿了么cookie给机器人即可上车\n查询饿了---查询饿了么资产\nelm---获取饿了么工具地址和面板链接\nmt---获取美团工具地址和面板链接\n飞机测试---测试YouTube连通性\n来个妹妹---随机发送一张妹子图片\n买家秀---获取妹子的买家秀\n看图猜成语---无聊必备，中途可以“提示”和“退出”\n摸鱼---开始摸鱼\n摸鱼日历---如题\n微博热搜---新浪微博实时热搜前十\n历史上的今天---如题\nepic---查询epic限时免费游戏\n二次元---随机发送一张二次元图片\n天气---获取城市天气，默认城市为成都，查询其他城市请发送xx天气，例如：上海天气\ngithub---GitHub加速代理')
 })
 
 s.listen([
     `elm`,
 ], function (s) {
     s.reply('饿了么cookie获取工具地址\n安卓：https://cloud.lovelyloli.cn/s/oiwm7r\nIOS：请下载Stream自行抓包，不会抓包可私聊群主要教程\n短信面板地址：http://elm.mikufanstechnology.com')
 })
 
 s.listen([
     `mt`,
 ], function (s) {
     s.reply('美团cookie获取工具地址\n安卓：https://cloud.lovelyloli.cn/s/nbk8z3\nIOS：请下载Stream自行抓包，不会抓包可私聊群主要教程\ncookie提交面板地址：http://mt.mikufanstechnology.com')
 })

 s.listen([
    `/start`,
 ], function (s) {
    s.reply('欢迎加入mikutechnology，请点击下面链接加入：https://t.me/+nPepFD3hy9E5YTRl')
 })

 s.listen([
    `github`,
 ], function (s) {
    s.reply('GitHub加速站\n主站：https://gitproxy.mikutechnology.ml/\n备站：https://aws.saltedfish.tk/\n镜像站：https://git.mikutechnology.ml/')
 })