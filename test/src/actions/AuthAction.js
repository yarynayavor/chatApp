import {
    LOGIN_ATTEMP,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types';

import fb from '../firebase';
import { AsyncStorage } from 'react-native';

const DEFAULT_AVATAR = 'https://lh3.googleusercontent.com/ooumbTQkKJ3SoQe1aigZyeyb7n8dKiK0XShSpQ86yIGayHMX7nBs4ftqssgJynEtP0ws=s180';

export const login = ({ username}) => {
    const userAvatar = DEFAULT_AVATAR ;
    return (dispatch) => {
        dispatch({ type: LOGIN_ATTEMP });
        //Auth Annones
        fb.auth().signInAnonymously()
            .then((resp) => {
                console.log(resp.uid);
                const key = fb.database().ref('users/').push().key
                //const userId = resp.uid;
                const user = {
                    id: key,
                    username,
                    avatar: userAvatar
                };
                //Save Profile
                fb.database().ref(`users/${key}`)
                    .set({ username, avatar: userAvatar})
                    .then(() => finishLogin(dispatch, user ));
            });
        
    }
};

const finishLogin = (dispatch, user ) => {
    AsyncStorage.setItem('user_info', JSON.stringify(user))
        .then(() => {
            dispatch({ type: LOGIN_SUCCESS, payload: user });
        });
}

export const loggedIn = (user) => {
    return ({ type: LOGIN_SUCCESS, payload: user });
}