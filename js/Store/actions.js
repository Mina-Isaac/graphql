import {ActionTypes} from '../constants'
export const receiveLinks = ()=> ({type: ActionTypes.RECEIVE_LINKS});
export const setLinks = (links)=> ({type: ActionTypes.SET_LINKS, links});