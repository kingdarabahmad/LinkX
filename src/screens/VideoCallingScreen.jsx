import { View, Text } from 'react-native'
import React from 'react'
import { Box,VStack,Avatar,HStack } from "native-base"
import { Ionicons } from '@expo/vector-icons';
import Draggable from 'react-native-draggable';

const VideoCallingScreen = () => {
    return (
        <Box className="h-full border-4 border-blue-900  relative" bg={{
            linearGradient: {
                colors: ['#7BC1B7', '#D2EBE7'],
                start: [1, 0],
                end: [0, 1]
            }
        }}>
            <VStack space={12} alignItems={"center"} paddingTop={"30%"}  className="absolute bottom-24 left-14">
                <HStack className=" w-full" alignItems={'center'} space={4}  >

                    <VStack space={2}>
                    <Text className="text-3xl font-bold">Dr. Mick</Text>
                    <Text >10.00</Text>
                    </VStack>
                    
                    <Draggable x={150} y={-40}>
                    <Avatar bg="indigo.500" size={'2xl'} source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        JB
                    </Avatar>
                    </Draggable>
                </HStack>
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

export default VideoCallingScreen