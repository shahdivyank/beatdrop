import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Map from '../../assets/Map.svg';
import Create from '../../assets/Create.svg';
import Profile from '../../assets/Profile.svg';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: () => (
            <Map ></Map>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: () => (
            <Create ></Create>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: () => (
            <Profile ></Profile>
          ),
        }}
      />
    </Tabs>
  );
}
