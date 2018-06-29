import { StackNavigator } from 'react-navigation';

import Splash from './components/Splash';
import Login from './components/Login';
import Chat from './components/Chat';

const Routes = StackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#E8436F'
            }
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Login',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#E8436F'
            }
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            headerTitle: 'Chat',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#E8436F'
            }
        }
    }
});


export default Routes;