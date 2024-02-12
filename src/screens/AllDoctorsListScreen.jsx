import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { VStack, HStack, Box, Stack, Input,Button } from 'native-base';
import { Avatar } from "native-base";
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { registeredDrData } from '../utils/data';


const AllDoctorsListScreen = ({navigation}) => {
    
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

        <VStack space={4} className="py-4 px-4 bg-white">

            {/* //dr search bar */}
            <Stack className="bg-[#D9D9D94D] rounded-xl px-4 py-4" space={4} w="100%" alignItems="center">
                <Input _focus={{backgroundColor:"#D9D9D94D",borderColor:"#D9D9D94D"}}   w={{
                    base: "100%",
                    md: "55%"
                }} InputLeftElement={<AntDesign name="search1" size={24} color="gray" />} size={5} placeholder="Search a doctor" />

            </Stack>

            {/* //all doctors */}

            <VStack space={4}>

                <Stack width={"100%"}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            registeredDrData.map((item, index) => (
                                <View style={{ width: "100%" }} className="bg-[#D2EBE74D]/30 mb-4   h-[165px]  rounded-xl" key={index}>
                                    <HStack height={"100%"}>
                                        <Image className="w-1/2  " resizeMode='contain' source={{
                                            uri: item.image
                                        }} alt="Alternate Text" />
                                        <VStack space={2}  className="py-2 w-1/2">
                                            <HStack justifyContent={"space-between"}>
                                                <Text className="text-xl font-semibold">{item.name}</Text>
                                            </HStack>
                                            <HStack>
                                                <Text className="text-[#858585] text-[12px]">{item.description}</Text>
                                            </HStack>
                                            <HStack justifyContent={"space-between"}>
                                                <Button className="rounded-3xl px-3" onPress={()=>navigation.navigate("doctorDetails",{doctorData:registeredDrData[index]})}>Book</Button>
                                                <HStack space={1} alignItems={"center"} marginRight={3} >

                                                    <AntDesign name="star" size={30} color="#F89603" />
                                                    <Text className="text-lg ">{item.rating}</Text>
                                                </HStack>
                                            </HStack>

                                        </VStack>
                                    </HStack>
                                </View>
                            ))
                        }
                    </ScrollView>

                </Stack>



            </VStack>






        </VStack>
        </ScrollView>
  )
}

export default AllDoctorsListScreen