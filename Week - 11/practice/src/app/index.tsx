// USE the Auto rename tag and ES7+ react extensions for auto div renaming and auto react component creation respectively. use rcc tab for the auto component
// must use a View tag in expo 

import { View, Text, Image, Pressable } from "react-native";
// import But from "./components/But";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter()
  return(
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "teal",
    }}
    >
      <Image
        source={require("../../JAMIL_SALAMI_GRAPHICS_2.png")}
        style={{
          width: 150,
          height: 150,
        }}
      />
      <Text 
      style={{
        color: "#d6edfe",
        fontSize: 40,
      }}
      >
        {/* pass the name value to the prop */}
      Welcome
      </Text>
        {/* <But name="John"/> */}
        <Pressable onPress={() => router.push('/profile')} style={{
          marginTop:20,
          backgroundColor: "white",
          padding: 10,
        }}>
        <Text>My Profile</Text>
        </Pressable>
    </View>
  );
}
