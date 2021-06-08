import "react-native-gesture-handler";

// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import SplashScreen from "./pages/SplashScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";

const Stack = createStackNavigator();

const Auth = () => {
 
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", 
          headerStyle: {
            backgroundColor: "#307ecc", 
          },
          headerTintColor: "#fff", 
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home", 
            headerStyle: {
              backgroundColor: "#307ecc", 
            },
            headerTintColor: "#fff", 
            headerTitleStyle: {
              fontWeight: "bold", 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;