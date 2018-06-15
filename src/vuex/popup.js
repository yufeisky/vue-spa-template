
/**
 * Created by linbin on 18/16/15.
 */
  
  const popup = {
    // 多页面共享数据
    state: {
      'popup_show': false,
    },
    // 操作
    actions: {

    },
  
    // 数据变更
    mutations: {
      popup_show(state,{popup_show}){
        state.popup_show = popup_show
      }
    },
  }
  
  // 为每个 state 字段生成对应的 mutations 方法
  // Object.keys(popup.state).forEach((key) => {
  //   popup.mutations[key] = generate(key);
  // });
  
  
  
  
  export default popup;