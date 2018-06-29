import { FETCHING, MESSAGE_RECIVED } from './types';

import fb from '../firebase';

export const sendMessage = (text, user) => {
    return (dispatch) => {
        const chatMessage = {
            text,
            author: user
        };

        fb.database().ref('messages')
            .push(chatMessage);
    }
}

export const fetchMessges = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING });
        fb.database().ref('messages')
            .orderByKey()
            .limitToLast(30)
            .on('value', (snapshot) => {
                const data = snapshot.val() || [];
                handleData(dispatch, data);
            });
    }
}

const handleData = (dispatch, data ) => {
    const messages = [];
    Object.values(data).forEach(msg => {
        messages.unshift(msg);
    });

    dispatch({ type: MESSAGE_RECIVED, payload: messages });
}