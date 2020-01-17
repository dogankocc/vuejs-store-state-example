
/*
  export const store = {
  
    addItem(key,value) {
      if( !this.state.data[key])  this.state.data[key] = [];
      this.state.data[key].push(value);

    }
  };
  */

 import Vue from 'vue'
 import Vuex from 'vuex'
 
 Vue.use(Vuex)
 export const store = new Vuex.Store({
    state: {
        data: {
            numbers: []
        }
      },
    mutations: {
        ADD_NUMBER(state,  payload) {
            if( !state.data[payload.key])  state.data[payload.key] = [];
            state.data[payload.key].push(payload.value);
            console.log(state, payload.key, payload.value)
            alert("ADD_NUMBER "+JSON.stringify(state))
          },
          addNumberOfState(state, payload) {
            if( !state.data[payload.key])  state.data[payload.key] = [];
            state.data[payload.key].push(payload.value);
            alert("addNumberOfState "+JSON.stringify(state))
          }
    },
    actions : {
        addItem(context, payload) {
            alert(payload.key+"  "+payload.value)
          context.commit("ADD_NUMBER", payload);
        }
      },
    getters: {
        getNumbers:(state) => {
            alert("getNumbers")
            return state.data.numbers;
          }
    }
  }) 