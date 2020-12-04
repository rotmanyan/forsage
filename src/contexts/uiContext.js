import React, { useReducer } from 'react';
import { NOTIFIACATION } from '../constants/ui';

export const UiContext = React.createContext();

const initialState = {
  openedNotification: null,
  notificationState: null,

  openedModal: null,
  modalState: null
}

const ACTIONS = {
  SET_OPENED_MODAL: 'SET_OPENED_MODAL',
  SET_OPENED_NOTIFICATION: 'SET_OPENED_NOTIFICATION'
}

const setOpenedModal = (modalName, state = null) => ({ type: ACTIONS.SET_OPENED_MODAL, payload: { modalName, state} });
const setOpenedNotification = (notificationName, state = null) => ({ type: ACTIONS.SET_OPENED_NOTIFICATION, payload: { notificationName, state } });

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_OPENED_MODAL: return {
      ...state,
      openedNotification: action.payload.modalName,
      modalState: action.payload.modalState
    };
    case ACTIONS.SET_OPENED_NOTIFICATION: return {
      ...state,
      openedNotification: action.payload.notificationName,
      notificationState: action.payload.notificationState
    };
    default: return state;
  }
}

export const UiContextWrapper = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <UiContext.Provider value={{
      ...state,
      setOpenedModal: (name, state) => dispatch(setOpenedModal(name, state)),
      setOpenedNotification: (name, state) => dispatch(setOpenedNotification(name, state)),
    }}>
      { children }
    </UiContext.Provider>
  )
} 
