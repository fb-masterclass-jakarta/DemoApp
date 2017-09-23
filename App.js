import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FBSDK from 'react-native-fbsdk'

const {
  LoginButton,
  AccessToken,
  AppEventsLogger
} = FBSDK;
 

export default class App extends Component {
    
    clickHandler = () => {
        AppEventsLogger.logEvent('BtnFBAnalytics');
    }

    render(){
        return (
            <View style={{ flex:1, justifyContent: 'center', alignItems:'center' }}>
                <Text style={{ fontSize:25, marginBottom:15 }}>Please Log in</Text>

                <TouchableOpacity 
                    style={{ backgroundColor: 'green', marginBottom: 20, borderRadius: 5 }}
                    onPress={() => this.clickHandler()}>
                    <Text style={{ color: 'white', fontSize: 20, margin: 10 }}>Ini Button - FB analytics</Text>
                </TouchableOpacity>

                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={(error, result) => {
                        if (error) {
                            alert("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            alert("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then((data) => {
                                alert(data.accessToken.toString())
                            })
                        }
                    }
                } 
                onLogoutFinished={() => alert("logout.")}/>
            </View>
        )
    }
}
