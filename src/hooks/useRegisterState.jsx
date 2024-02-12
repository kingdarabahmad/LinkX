import { useState } from 'react';
import { Alert } from "native-base";
import { useNavigation } from '@react-navigation/native';

const useRegiterState = (initialState) => {
  const [registerData, setRegisterData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alertMsg,setAlertMsg] = useState(null);
  const navigation=useNavigation()

  const handleOnChange = (key, value) => {
    setRegisterData({
      ...registerData,
      [key]: value
    });
  };

  const validateFields = () => {
    for (const key in registerData) {
      if (!registerData[key]) {
        return key;
      }
    }
    return null;
  };

  const handleRegister = () => {
    const emptyField = validateFields();
    if (emptyField) {
      alert(`${emptyField} cannot be empty`);
      return;
    }
    setIsLoading(true);
    try {
        setTimeout(() => {
            setIsLoading(false)
            navigation.navigate('Home')
        }, 2000);
        
    } catch (error) {
        console.log(error.message)
    }
  };

  return { registerData, handleOnChange, handleRegister,isLoading,error,alertMsg };
};

export default useRegiterState;