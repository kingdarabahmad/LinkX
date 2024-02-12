import { View, Text } from 'react-native'
import React from 'react'
import { VStack,Button } from 'native-base';

const PaymentScreen = () => {
  return (
    <VStack className="bg-[#0B8FAC] h-full" space={20}>
        <VStack alignItems={"center"} paddingTop={10} space={6}>
            <Text className="text-[56px] font-bold text-white">$120</Text>
        </VStack>
        <VStack alignItems={"center"} className="bg-white h-[80%] rounded-t-[40px] p-8"> 
            <VStack space={4} h={"60%"} alignItems={"center"}>
            <Text className=" text-2xl">To</Text>
            <Text className=" font-semibold text-2xl">Dr. Mick</Text>
            </VStack>
            <Button className=" rounded-xl" w={"200"}>
                <Text className="font-semibold py-1 text-white text-xl " >Pay</Text>
            </Button>
        </VStack>

    </VStack>
  )
}

export default PaymentScreen