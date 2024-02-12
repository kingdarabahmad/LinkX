import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { VStack, HStack, Box, Stack, Input,Button } from 'native-base';
import { Avatar } from "native-base";
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const DrListByCtgScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

        <VStack space={4} className="py-4 px-4 bg-white">

            {/* //dr search bar */}
            <Stack className="bg-[#D9D9D9] rounded-xl px-4 py-4" space={4} w="100%" alignItems="center">
                <Input  w={{
                    base: "100%",
                    md: "55%"
                }} InputLeftElement={<AntDesign name="search1" size={24} color="gray" />} size={5} placeholder="Search a doctor by speciality" />

            </Stack>

            {/* //all doctors */}

            <VStack space={4}>

                <Stack width={"100%"}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                <View style={{ width: "100%" }} className="bg-[#D2EBE74D]/30 mb-4   h-[190px]  rounded-xl" key={index}>
                                    <HStack height={"100%"}>
                                        <Image className="w-1/2" resizeMode='contain' source={{
                                            uri: "https://s3-alpha-sig.figma.com/img/4a97/a3af/c8fb5f50ab23e06d36b61a6deaae704f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYhwPZGcDx37P4ZXUMLCF7WQkUfOJlJ1EUFK5l-GZQV1Lma5RYP7GKvimnpmryXY8x7CbIi6HRxefVw1jqQofAe017NedoN6vQYWmOknjF6SGh4UK07DjY7A4gUQbEm-YQoSLEUkWB42SofrmyqoB3OWmIAOPKwd1vqohC88I6sUc7tLeOTSdjUmCtrRmrHzLvPqJE-HiLn1KmjfQ9fspU5yeWgGkQeK46lIyeUaBtQqRoOK9BWjMVvnKgpfPlXrWcE~QTFnjVAhWRiyepZoP~HXIvEhEPtY088iFm64rcwS1n2GA2QHRqiYCj1-R6-nk6crymWuOXIvRUj~0QSf2Q__"
                                        }} alt="Alternate Text" />
                                        <VStack space={4}  className="py-2 w-1/2">
                                            <HStack justifyContent={"space-between"}>
                                                <Text className="text-xl font-semibold">Dr Ruchita</Text>
                                            </HStack>
                                            <HStack>
                                                <Text className="text-[#858585]">He is an expert in the management of PCOS,recurrent IVF failures, poor responders</Text>
                                            </HStack>
                                            <HStack justifyContent={"space-between"}>
                                                <Button className="rounded-3xl px-4" onPress={()=>navigation.navigate("doctorDetails",{doctorId:1})}>Book</Button>
                                                <HStack space={1} alignItems={"center"} marginRight={3} >

                                                    <AntDesign name="star" size={30} color="#F89603" />
                                                    <Text className="text-lg ">4.5</Text>
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

export default DrListByCtgScreen