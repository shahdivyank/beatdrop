import { Tabs } from "expo-router";
import Map from "../../assets/icons/Map.svg";
import Create from '../../assets/icons/Create.svg';
import Profile from '../../assets/icons/Profile.svg';
import { Image } from "expo-image";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#E12A62" }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Image source={Map} style={{ width: 32, height: 32 }} />
            // <Map style={{color: focused ? color : '#161616'}} ></Map>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Image source={Create} style={{ width: 32, height: 32 }} />
          //   <Create style={{color: focused ? color : '#161616'}} ></Create>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused, color }) => (
            <Image source={Profile} style={{ width: 32, height: 32 }} />
            // <Profile style={{color: focused ? color : '#161616'}} ></Profile>
          ),
        }}
      />
    </Tabs>
  );
}
