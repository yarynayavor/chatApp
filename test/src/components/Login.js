//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Header, Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { login } from '../actions';

// create a component
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            disabled: true
        }
    }

    onUserNameChanged(userName) {
        if (userName && userName.length > 3) {
            this.setState({
                disabled: false,
                username: userName
            });
        } else {
            this.setState({
                disabled: true
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            this.props.navigation.navigate('Chat');
        }
    }
    onLoginPressed() {
        const { username } = this.state;
        this.props.login({ username });
    }

    
    showBtnOrSpinner() {
        if (this.props.loading) return <ActivityIndicator />;
        return (
            <Button
                title='Start chatting'
                backgroundColor='#E8436F'
                disabled={this.state.disabled}
                onPress={this.onLoginPressed.bind(this)}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Your Name</FormLabel>
                <FormInput 
                    placeholder='Enter chat name'
                    onChangeText={(username) => this.onUserNameChanged(username)}
                />

                <View style={styles.btnContainer}>
                    {this.showBtnOrSpinner()}
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnContainer: {
        marginTop: 20
    }
});

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        loading: state.auth.loading,
        user: state.auth.user,
    };
}
export default connect(mapStateToProps, { login  })(Login);
