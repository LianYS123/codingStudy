Page({
  data: {
    a : 'hello world',
    arr : ['a','b','c']
  },
  fn(){
    let app = getApp();
    console.log(app.a);
  }
})