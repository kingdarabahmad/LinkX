import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { VStack, HStack, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import useAppointment from '../hooks/useAppointment';


const DoctorDetailsScreen = ({ route, navigation }) => {
    const { doctorData } = route.params;

    const {isLoading,appointmentDate,changeSelectedDate,handleBookAppointment } = useAppointment();
    return (
        <VStack space={4} className="bg-white h-full px-4 pt-4">
            <HStack>
                <View className="bg-[#858585] w-2/6 h-[140px]  rounded-lg">

                    <Image className="h-[140px]   object-cotain" source={{
                        uri: doctorData.image
                    }} alt="Alternate Text" size="xl" />
                </View>
                <VStack className="w-3/5" space={2} padding={3}>
                    <HStack space={2} alignItems={'center'}>
                        <Text className="text-md font-semibold w-[90px]">{doctorData.name}</Text>
                        <View className="bg-[#7BC1B74D] rounded-full h-[30px] w-[30px] flex justify-center items-center">
                            <Ionicons name="chatbubble-outline" size={18} color="black" />
                        </View>
                        <View className="bg-[#7BC1B74D]  rounded-full h-[30px] w-[30px] flex justify-center items-center">
                            <Ionicons name="call-outline" size={18} color="black" />
                        </View>
                        <View className="bg-[#7BC1B74D]  rounded-full h-[30px] w-[30px] flex justify-center items-center">
                            <Ionicons name="videocam-outline" size={18} color="black" />
                        </View>
                    </HStack>
                    <HStack>
                        <Text className="text-[#7BC1B7] text-lg">{doctorData.specialization}</Text>
                    </HStack>
                    <HStack justifyContent={"space-between"} alignItems={"center"}>
                        <Text className=" font-bold text-lg">Payment</Text>
                        <Text className="text-[#7BC1B7] font-bold text-lg">$120</Text>
                    </HStack>
                </VStack>
            </HStack>
            <VStack space={2}>
                <Text className="text-xl font-semibold">Details</Text>
                <Text className="text-[#858585]">{doctorData.description}</Text>
            </VStack>


            <VStack className="h-full bg-white" space={10}>
                <View className="flex items-start flex-row justify-between">
                    <Text className="text-xl font-semibold">Patient treated</Text>
                    <Text className="text-xl font-semibold">24</Text>

                    
                </View>
                <View className="flex items-start flex-row justify-between">
                    <Text className="text-xl font-semibold">Pick date</Text>
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={appointmentDate}
                        mode={'date'}

                        display="default"
                        onChange={changeSelectedDate}
                        timeZoneName='asia/calcutta'
                    />
                </View>
                <HStack >
                    <Text className="text-xl font-semibold">Available Time Slot</Text>
                </HStack>
                <VStack>
                    <HStack width={"100%"}>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                [1, 2, 3, 4, 5, 6].map((item, index) => (
                                    <View style={{ width: Dimensions.get('window').width - 250 }} className="bg-[#D9D9D94D] mr-4 flex justify-center items-center  h-[50px] p-1 rounded-lg" key={index}>
                                        <Text className="text-md  font-semibold">10.00am</Text>
                                    </View>
                                ))
                            }
                        </ScrollView>

                    </HStack>
                </VStack>
                <HStack>
                    <Button isLoading={isLoading} onPress={()=>handleBookAppointment()} className="w-full rounded-xl " size={"lg"}>
                        <Text className="text-white font-semibold text-xl ">Book an Appointment</Text>
                    </Button>
                </HStack>
            </VStack>

        </VStack>
    )
}

export default DoctorDetailsScreen