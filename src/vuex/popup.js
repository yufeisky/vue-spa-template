
/**
 * Created by linbin on 18/16/15.
 */

// 生成 mutations 方法
function generate(name) {
    return function (state, value) {
      state[name] = value || state[name];
    }
  }
  
  const popup = {
  
    // 多页面共享数据
    state: {
      message: '11',
    },
  
    // 操作
    actions: {},
  
    // 数据变更
    mutations: {},
  }
  
  // 为每个 state 字段生成对应的 mutations 方法
  Object.keys(popup.state).forEach((key) => {
    popup.mutations[key] = generate(key);
  });
  
  
  
  
  export default popup;