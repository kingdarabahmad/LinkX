import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { VStack,Input,Button,Alert } from 'native-base';
import useRegiterState from '../hooks/useRegisterState';

const Register = () => {
  const {registerData,handleOnChange, handleRegister,isLoading,error,alertMsg} = useRegiterState({
    name: "",
    specialization: "",
    description:"",
    imageUrl:"we"
  })
  
  console.log(registerData)
  return (
    <VStack space={8}  className="h-full bg-white px-4" paddingTop={5} >
      <VStack space={6}>
        <VStack space={3}>
          <Text className="text-2xl  font-bold">Register</Text>
          <Text className="text-[#858585]">
            If you are a doctor, register yourself 
          </Text>
        </VStack>

        <VStack space={3}>
          <Text className="text-xl  font-semibold">Name</Text>
          <Input  value={registerData.name} onChangeText={(value) => handleOnChange("name", value)} placeholder="Enter your name" w="100%" bgColor={"#D9D9D94D"} size={"lg"} padding={4} />
        </VStack>

        <VStack space={3}>
          <Text className="text-xl  font-semibold">Specialization</Text>
          <Input value={registerData.specialization} onChangeText={(value) => handleOnChange("specialization", value)}  placeholder="Enter your specialization" w="100%" bgColor={"#D9D9D94D"} size={"lg"} padding={4} />
        </VStack>

        <VStack space={3}>
          <Text className="text-xl  font-semibold">Descriptiion</Text>
          <Input value={registerData.description} onChangeText={(value) => handleOnChange("description", value)}  placeholder="Describe yourself" w="100%" bgColor={"#D9D9D94D"} size={"lg"} padding={4} />
        </VStack>

        <VStack space={3}>
          <Text className="text-xl  font-semibold">Upload your image</Text>
          <Input  type='file'  placeholder="Enter your specialization" w="100%" bgColor={"#D9D9D94D"} size={"lg"} padding={4} />
        </VStack>

        <Button isLoading={isLoading} size={"lg"} fontWeight={"bold"} padding={4} rounded={10} onPress={()=>handleRegister()}>
          <Text className="text-white font-bold" >Register</Text>
        </Button>
        

      </VStack>
    </VStack>
  )
}

export default Register