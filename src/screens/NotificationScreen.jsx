import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { VStack, HStack, Box, Stack, Input, Button } from 'native-base';
import { Avatar } from "native-base";
import { Octicons } from '@expo/vector-icons';



const NotificationScreen = () => {
  return (
    <VStack space={4} className="pt-4 px-4 bg-white">

      <VStack space={4}>
        {/* <HStack justifyContent={"space-between"}>
          <Text className="font-semibold text-2xl">Messages</Text>
        </HStack> */}

        <Stack width={"100%"}>

          <ScrollView showsVerticalScrollIndicator={false}>
            {
              [1, 2, 3, 4, 5, 6].map((item, index) => (
                <View style={{ width: "100%" }} className="bg-[#D2EBE74D]/30 mb-6  h-[100px]  rounded-xl" key={index}>
                  <HStack space={6} className="px-2 " height={"100%"} alignItems={"center"} >
                    <Octicons name="bell" size={30} color="black" />

                    <VStack space={1} className="py-2 w-2/3">
                      <HStack justifyContent={"space-between"}>
                        <Text className="text-xl font-bold">May 08 2023</Text>
                      </HStack>
                      <HStack>
                        <Text className="text-[#858585] text-sm">your appoinment with Dr Mick has been confimed</Text>
                      </HStack>
                    </VStack>
                    <VStack space={4} className="absolute right-2">
                    <Text>12:00</Text>
                    {/* <View className="bg-[#0B8FAC] rounded-full h-[20px] w-[20px] flex justify-center items-center">
                        <Text className="text-white">2</Text>
                    </View> */}
                    </VStack>
                  </HStack>
                  
                </View>
              ))
            }
          </ScrollView>

        </Stack>



      </VStack>

    </VStack>
  )
}

export default NotificationScreen