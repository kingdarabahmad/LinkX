import { View, Text } from 'react-native'
import React from 'react'
import { Box,VStack,Avatar,HStack } from "native-base"
import { Ionicons } from '@expo/vector-icons';




const CallingScreen = () => {
    return (
        <Box className="h-full" bg={{
            linearGradient: {
                colors: ['#7BC1B7', '#D2EBE7'],
                start: [1, 0],
                end: [0, 1]
            }
        }}>
            <VStack alignItems={"center"} paddingTop={"30%"}   >
                <VStack alignItems={"center"} space={4} h={"80%"}>
                    <Avatar bg="indigo.500" size={'2xl'} source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        JB
                    </Avatar>
                    <Text className="text-3xl font-bold">Dr. Mick</Text>
                    <Text >Ringing...</Text>
                </VStack>
                <HStack space={4}>
                    <View className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-full">
                        <Ionicons name="videocam-outline" size={30} color="black" />
                    </View>
                    <View className="w-[60px] h-[60px] bg-[#F30000] flex justify-center items-center rounded-full">
                    <Ionicons name="call-outline" size={30} color="white" />
                    </View>
                    <View className="w-[60px] h-[60px] flex justify-center items-center bg-white rounded-full">
                    <Ionicons name="mic-outline" size={30} color="black" />
                    </View>
                </HStack>

            </VStack>


        </Box>
    )
}

export default CallingScreen