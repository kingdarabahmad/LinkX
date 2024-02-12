import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { VStack, HStack, Box, Stack, Input,Button } from 'native-base';
import { Avatar } from "native-base";
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { registeredDrData } from '../utils/data';

const catergories=[{
    name:"Dermatologist",
},
{
    name:"Cardiologist",
},
{
    name:"ENT",
},
{
    name:"Dentist"
}
]

const HomeScreen = ({navigation}) => {
    return (
        

        <VStack space={4} className="py-16 px-4 bg-white h-full">
            {/* //userNameSection */}
            <HStack alignItems={'center'} space={2} justifyContent={'space-between'}>

                <HStack space={2} alignItems={'center'}>
                    <Avatar bg="blue.500" alignSelf="center" size="lg">
                        R
                    </Avatar>
                    <VStack >
                        <Text className="text-lg text-[#858585]">Hi Welcome</Text>
                        <Text className="text-xl font-semibold">Rishabh Shirsagar</Text>
                    </VStack>
                </HStack>
                <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
                    <Octicons name="bell" size={30} color="black" />
                </TouchableOpacity>


            </HStack>

            {/* //dr search bar
            <Stack className="bg-[#D9D9D9] rounded-xl px-4 py-4" space={4} w="100%" alignItems="center">
                <Input w={{
                    base: "100%",
                    md: "55%"
                }} InputLeftElement={<AntDesign name="search1" size={24} color="gray" />} size={5} placeholder="Search a doctor" />

            </Stack> */}

            <View className="h-[169px] bg-[#0B8FAC] rounded-xl p-4">
                <VStack space={1}>
                    <Text className="text-white text-2xl font-bold">Medical Center</Text>
                    <Text className="text-white w-[70%]">Doctors is now taking complicated gynecological surgeries and infertility treatments. She is expert in handling latest medical technologies.</Text>
                </VStack>
            </View>


            {/* //Categories section */}

            <VStack space={4}>
                <HStack justifyContent={"space-between"}>
                    <Text className="font-semibold text-2xl">Categories</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("drListByCtg")}>

                    <Text  className="text-[#858585]">See all</Text>
                    </TouchableOpacity>
                </HStack>

                <Stack width={"100%"}>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            catergories.map((item, index) => (
                                <View style={{ width: Dimensions.get('window').width - 200 }} className="bg-[#7BC1B7] mr-4 flex justify-center items-center  h-[80px] p-4 rounded-xl" key={index}>
                                    <Text className="text-2xl text-white font-semibold">{item.name}</Text>
                                </View>
                            ))
                        }
                    </ScrollView>

                </Stack>



            </VStack>


            {/* //all doctors */}

            <VStack space={4} height={"100%"}>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                    <Text className="font-semibold text-2xl">All Doctors</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("allDoctorsList")}>

                    <Text  className="text-[#858585]">See all</Text>
                    </TouchableOpacity>
                </HStack>

                

                    <ScrollView style={{height:250}} showsVerticalScrollIndicator={false}>
                        {
                            registeredDrData.map((item, index) => (
                                <View style={{ width: "100%" }} className="bg-[#D2EBE74D]/30 mb-4   h-[161px]  rounded-xl" key={index}>
                                    <HStack height={"100%"}>
                                        <Image className="w-1/3" resizeMode='contain' source={{
                                            uri: item.image
                                        }} alt="Alternate Text" />
                                        <VStack space={2}  className="py-2 w-2/3">
                                            <HStack justifyContent={"space-between"}>
                                                <Text className="text-xl font-semibold">{item.name}</Text>
                                            </HStack>
                                            <HStack>
                                                <Text className="text-[#858585]">{item.description}</Text>
                                            </HStack>
                                            <HStack justifyContent={"space-between"}>
                                                <Button className="rounded-3xl px-4" onPress={()=>navigation.navigate("doctorDetails",{doctorData:registeredDrData[index]})}>Book</Button>
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

                



            </VStack>






        </VStack>
        

    )
}

export default HomeScreen