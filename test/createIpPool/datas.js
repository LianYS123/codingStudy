const datas = [
  {
    ip_address: "70.169.150.8",
    port: "48678",
    address: "美国 弗吉尼亚州 诺福克 ",
    operator: "cox.com",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "17.9秒",
  },
  {
    ip_address: "199.188.89.172",
    port: "8000",
    address: "美国 美国 ",
    operator: "verizon.com",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "11.63秒",
  },
  {
    ip_address: "54.191.139.127",
    port: "80",
    address: "美国 俄勒冈州 波特兰 ",
    operator: "amazon.com",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "6.53秒",
  },
  {
    ip_address: "66.42.66.177",
    port: "8080",
    address: "美国 华盛顿州 西雅图 ",
    operator: "choopa.com",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "0.68秒",
  },
  {
    ip_address: "173.82.62.18",
    port: "5836",
    address: "美国 美国 ",
    operator: "multacom.com",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "1.95秒",
  },
  {
    ip_address: "104.129.194.65",
    port: "8800",
    address: "美国 弗吉尼亚州 赫恩登 ",
    operator: "zscaler.com",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "1.86秒",
  },
  {
    ip_address: "205.185.115.100",
    port: "8080",
    address: "美国 内华达州 拉斯维加斯 ",
    operator: "buyvm.net",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "1.45秒",
  },
  {
    ip_address: "173.82.74.58",
    port: "5836",
    address: "美国 加利福尼亚州 洛杉矶 ",
    operator: "multacom.com",
    https: "不支持",
    post: "支持",
    anonymous: "高匿",
    speed: "1.46秒",
  },
  {
    ip_address: "75.109.249.111",
    port: "1111",
    address: "美国 加利福尼亚州 洪堡县 ",
    operator: "suddenlink.com",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "8.51秒",
  },
  {
    ip_address: "52.179.231.206",
    port: "80",
    address: "美国 弗吉尼亚州 博伊顿 ",
    operator: "microsoft.com",
    https: "不支持",
    post: "支持",
    anonymous: "普匿",
    speed: "1.04秒",
  },
  {
    ip_address: "173.82.17.188",
    port: "5836",
    address: "美国 加利福尼亚州 洛杉矶 ",
    operator: "multacom.com",
    https: "不支持",
    post: "支持",
    anonymous: "高匿",
    speed: "17.57秒",
  },
  {
    ip_address: "205.185.127.8",
    port: "8080",
    address: "美国 内华达州 拉斯维加斯 ",
    operator: "buyvm.net",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "2.27秒",
  },
  {
    ip_address: "173.82.78.190",
    port: "5836",
    address: "美国 加利福尼亚州 洛杉矶 ",
    operator: "multacom.com",
    https: "支持",
    post: "支持",
    anonymous: "高匿",
    speed: "16.37秒",
  },
  {
    ip_address: "107.167.195.2",
    port: "48678",
    address: "美国 佛罗里达州 彭萨科拉 ",
    operator: "mediacomcable.com",
    https: "不支持",
    post: "支持",
    anonymous: "普匿",
    speed: "11.4秒",
  },
  {
    ip_address: "44.231.67.49",
    port: "80",
    address: "美国 俄勒冈州 波特兰 ",
    operator: "amazon.com",
    https: "不支持",
    post: "支持",
    anonymous: "高匿",
    speed: "5.15秒(",
  },
];
datas.forEach((item) => (item.speed = parseFloat(item.speed)))

module.exports = datas;