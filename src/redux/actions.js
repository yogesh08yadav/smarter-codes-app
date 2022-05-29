import { ADD_NEW_CHAT, ADD_NEW_MESSAGE } from "./actionTypes"

export const addNewChat = (data) => {
    return{
        type: ADD_NEW_CHAT,
        payload: data
    }
}

export const addNewMsg = (data) => {
    return{
        type: ADD_NEW_MESSAGE,
        payload: data
    }
}