import { createSlice } from '@reduxjs/toolkit';
/*import { fetchCount } from './counterAPI';*/

const initialState = {
  sendMessageIsOpen: false,
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },

});

export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;



export default mailSlice.reducer; 
