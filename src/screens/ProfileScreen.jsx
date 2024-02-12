import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { VStack, HStack, Box, Stack, Input, Button } from 'native-base';
import { Avatar } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: "History",
      icon: <MaterialIcons name="history" size={30} color="#0B8FAC" />,
      target: () => navigation.navigate("userHistory")
    },
    {
      id: 2,
      title: "Help",
      icon: <Ionicons name="help-circle-outline" size={30} color="#0B8FAC" />
    },
    {
      id: 3,
      title: "Logout",
      icon: <MaterialIcons name="logout" size={30} color="#0B8FAC" />
    }
  ]
  return (
    <VStack space={4} className="pt-4 px-4 bg-white h-full">

      {/* Active Now Section */}

      <VStack space={4} marginTop={5} alignItems={"center"}>

        <Stack width={"100%"}>
          <View className=" flex justify-center items-center  h-[100px]  rounded-xl">
            <Avatar bg="green.500" size={"xl"} source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>

            </Avatar>
          </View>

        </Stack>
        <HStack justifyContent={"space-between"}>
          <Text className="font-bold text-2xl">Parth KrishSagar</Text>
        </HStack>
        <Button onPress={() => navigation.navigate("register")} className="rounded-md">Register as Doctor</Button>
      </VStack>


      {/* //Messages Section */}

      <VStack space={4} padding={4}>
        {
          data.map((item, index) => (
            <TouchableOpacity key={index} onPress={item.target} >
              <HStack alignItems={"center"} space={6} >
                <View className="bg-[#D2EBE7]  rounded-full h-[45px] w-[45px] flex justify-center items-center">
                  {item.icon}
                </View>
                <Text className="font-semibold text-xl">{item.title}</Text>
              </HStack>
            </TouchableOpacity>

          ))
        }

      </VStack>






    </VStack>
  )
}

export default ProfileScreen