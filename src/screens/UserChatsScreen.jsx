import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
const UserChatsScreen = (props) => {
  randomUserID = String(Math.floor(Math.random() * 100000))
 
  return (
    <View style={{ flex: 1 }} >
            <ZegoUIKitPrebuiltCall
                appID={381207228}
                appSign={d67a490e474449e83818541d93c65757eb4861b997f54f1453ff196925720c46}
                userID={9821255433} // userID can be something like a phone number or the user id on your own user system. 
                userName={'user_'+randomUserID}
                callID={'user_'+randomUserID} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('Home') },
                    onHangUp: () => { props.navigation.navigate('Home') },
                }}
            />
        </View>
  )
}

export default UserChatsScreen