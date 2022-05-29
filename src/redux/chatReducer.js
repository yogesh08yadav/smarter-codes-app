import { ADD_NEW_CHAT,ADD_NEW_MESSAGE } from "./actionTypes"

const initialState = {
    list: []
}


export const reducer = (state = initialState, {type, payload}) => {
      switch(type){
          case ADD_NEW_CHAT:
              return{
                  ...state,
                  list: [payload,...state.list ]
              }

          case ADD_NEW_MESSAGE:
              return{
                  ...state,
                  list: payload
              }

          default:
              return state
      }
}