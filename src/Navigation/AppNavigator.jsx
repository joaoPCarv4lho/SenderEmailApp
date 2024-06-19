import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import Login from "../Screens/LoginScreen/LoginScreen";
import Register from "../Screens/RegisterScreen/RegisterScreen";
import ResetPass from "../Screens/ResetPass/ResetPass";
import ModifiedPass from "../Screens/ModifiedPass/ModifiedPass";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){

    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen 
                    name="ResetPass"
                    component={ResetPass}
                    options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen 
                    name="ModifiedPass"
                    component={ModifiedPass}
                    options={{
                        headerShown: false,
                    }}/>
                    <Stack.Screen 
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false,
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}