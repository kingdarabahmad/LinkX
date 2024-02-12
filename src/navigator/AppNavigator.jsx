import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SetDataTimeScreen from '../screens/UserHistory';
import ChatsScreen from '../screens/ChatsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DoctorDetailsScreen from '../screens/DoctorDetailsScreen';
import AllDoctorsListScreen from '../screens/AllDoctorsListScreen';
import DrListByCtgScreen from '../screens/DrListByCtgScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CallingScreen from '../screens/CallingScreen';
import VideoCallingScreen from '../screens/VideoCallingScreen';
import Register from '../screens/Register';
import PaymentScreen from '../screens/PaymentScreen';
import UserHistory from '../screens/UserHistory';
import UserChatsScreen from '../screens/UserChatsScreen';

const AppNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      {/* home tab */}
      <Tab.Navigator tabBarShowLabel={false} initialRouteName='Home' screenOptions={{ tabBarStyle: { height: 100 }, headerShadowVisible: false, headerLeftContainerStyle: { paddingLeft: 6 }, headerTitleStyle: { fontSize: 25, color: "#0B8FAC" } }} >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => focused ? (
            <View className="bg-[#0B8FAC] p-4 rounded-xl">
              <AntDesign name="home" size={25} color="white" />
            </View>
          ) : (
            <AntDesign name="home" size={25} color="black" />
          ),
          tabBarShowLabel: false,
          headerShown: false,
          headerTransparent: true
        }} />

        {/* appointment tab */}
        <Tab.Screen name="userHistory" component={UserHistory} options={({ navigation }) => (
          {
            tabBarIcon: ({ focused }) => focused ? (
              <View className="bg-[#0B8FAC] p-4 rounded-xl">
                <MaterialIcons name="history" size={25} color="white" />
              </View>
            ) : (
              <MaterialIcons name="history" size={25} color="black" />
            ),
            tabBarShowLabel: false,
            headerTitle: "History",
            tabBarStyle: { display: 'none' },
            headerLeft: () => <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          }
        )} />

        {/* chats tab */}
        <Tab.Screen name="Chats" component={ChatsScreen} options={({ navigation }) => (
          {
            tabBarIcon: ({ focused }) => focused ? (
              <View className="bg-[#0B8FAC] p-4 rounded-xl">
                <Ionicons name="chatbox-ellipses-outline" size={25} color="white" />
              </View>
            ) : (
              <Ionicons name="chatbox-ellipses-outline" size={25} color="black" />
            ),
            tabBarShowLabel: false,
            headerTitle: "Messages",
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          }
        )} />

        {/* profile tab */}
        <Tab.Screen name="Profile" component={ProfileScreen} options={({ navigation }) => (
          {
            tabBarIcon: ({ focused }) => focused ? (
              <View className="bg-[#0B8FAC] p-4 rounded-xl">
                <MaterialCommunityIcons name="account-circle-outline" size={25} color="white" />
              </View>
            ) : (
              <MaterialCommunityIcons name="account-circle-outline" size={25} color="black" />
            ),
            tabBarShowLabel: false
          }
        )} />

        {/* ///dr details route */}

        <Tab.Screen name="doctorDetails" component={DoctorDetailsScreen} options={({ navigation }) => (
          {
            tabBarShowLabel: false,
            headerTitle: "Appointment",
            headerLeft: () => <TouchableOpacity onPress={() => navigation.navigate('allDoctorsList')}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          }
        )} />

        {/* ///doctor list route */}
        <Tab.Screen name="allDoctorsList" component={AllDoctorsListScreen} options={({ navigation }) => (
          {
            tabBarButton: () => null,
            tabBarShowLabel: false,
            headerTitle: "All Doctors",
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          }
        )} />

        {/* ///doctor list by category route */}
        <Tab.Screen name="drListByCtg" component={DrListByCtgScreen} options={({ navigation }) => (
          {
            tabBarButton: () => null,
            tabBarShowLabel: false,
            headerTitle: "Find Specialist",
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          })} />

        {/* ///notification route */}
        <Tab.Screen name="notifications" component={NotificationScreen} options={({ navigation }) => (
          {
            tabBarShowLabel: false,
            headerTitle: "Notifications",
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          })} />


        {/* ///calling route */}
        <Tab.Screen name="calling" component={CallingScreen} options={({ navigation }) => (
          {
            tabBarShowLabel: false,
            tabBarStyle: { display: "none" },
            headerTitle: "Calling",
            headerShown: false,
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          })} />


        {/* ///video calling route */}
        <Tab.Screen name="videoCalling" component={VideoCallingScreen} options={({ navigation }) => (
          {
            tabBarShowLabel: false,
            tabBarStyle: { display: "none" },
            headerTitle: "Calling",
            headerShown: false,
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          })} />

        {/* register route */}
        <Tab.Screen name="register" component={Register} options={({ navigation }) => (
          {
            tabBarShowLabel: false,
            tabBarStyle: { display: "none" },
            headerTitle: "Welcome",
            headerLeft: () => <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
          })} />

        {/* payment route */}
        <Tab.Screen name="payment" component={PaymentScreen} options={({ navigation }) => (
          {
            tabBarShowLabel: false,
            tabBarStyle: { display: "none" },
            headerTitle: "Payment",
            headerTitleStyle: { color: "white", fontSize: 25 },
            headerStyle: {
              backgroundColor: "#0B8FAC",
              height: 130,
            },
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
              <View className="w-[40px] h-[40px] bg-white flex justify-center ml-3 items-center rounded-full">

                <Ionicons name="chevron-back" size={30} color="black" />
              </View>
            </TouchableOpacity>
          })} />

        <Tab.Screen name="chats" component={UserChatsScreen} options={({ navigation }) => (
          {
            tabBarShowLabel: false,
            tabBarStyle: { display: "none" },
            headerTitle: "Chats",
            headerTitleStyle: { color: "white", fontSize: 25 },
            headerStyle: {
              backgroundColor: "#0B8FAC",
              height: 130,
            },
            headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
              <View className="w-[40px] h-[40px] bg-white flex justify-center ml-3 items-center rounded-full">

                <Ionicons name="chevron-back" size={30} color="black" />
              </View>
            </TouchableOpacity>
          })} />





      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator