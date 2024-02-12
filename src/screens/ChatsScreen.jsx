import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { VStack, HStack, Box, Stack, Input, Button } from 'native-base';
import { Avatar } from "native-base";


const ChatsScreen = () => {
  return (
    <VStack space={4} className="pt-4 px-4 bg-white">


      {/* //dr search bar */}
      {/* <Stack className="bg-[#D9D9D9] rounded-xl px-4 py-4" space={4} w="100%" alignItems="center">
        <Input w={{
          base: "100%",
          md: "55%"
        }} InputLeftElement={<AntDesign name="search1" size={24} color="gray" />} size={5} placeholder="Search a doctor" />

      </Stack> */}

      {/* Active Now Section */}

      <VStack space={4}>
        <HStack justifyContent={"space-between"}>
          <Text className="font-semibold text-2xl">Active Now</Text>
        </HStack>

        <Stack width={"100%"}>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              [1, 2, 3, 4, 5, 6].map((item, index) => (
                <View className="mr-4 flex justify-center items-center  h-[100px] p-4 rounded-xl" key={index}>
                  <Avatar bg="green.500" size={"lg"} source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                      <Avatar.Badge bg="green.500" />
                    </Avatar>
                </View>
              ))
            }
          </ScrollView>

        </Stack>



      </VStack>


      {/* //Messages Section */}

      <VStack space={4}>
        <HStack justifyContent={"space-between"}>
          <Text className="font-semibold text-2xl">Messages</Text>
        </HStack>

        <Stack width={"100%"}>

          <ScrollView showsVerticalScrollIndicator={false}>
            {
              [1, 2, 3, 4, 5, 6].map((item, index) => (
                <View style={{ width: "100%" }} className="bg-[#D2EBE74D]/30 mb-4   h-[100px]  rounded-xl" key={index}>
                  <HStack space={6} className="px-2" height={"100%"} alignItems={"center"} >
                    <Avatar bg="green.500" size={"lg"} source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}></Avatar>

                    <VStack space={1} className="py-2 w-2/3">
                      <HStack justifyContent={"space-between"}>
                        <Text className="text-xl font-semibold">Dr Ruchita</Text>
                      </HStack>
                      <HStack>
                        <Text className="text-[#858585] text-sm">Hi! How are you</Text>
                      </HStack>
                    </VStack>
                    <VStack space={4} className="absolute right-2">
                    <Text>12:00</Text>
                    <View className="bg-[#0B8FAC] rounded-full h-[20px] w-[20px] flex justify-center items-center">
                        <Text className="text-white">2</Text>
                    </View>
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

export default ChatsScreen