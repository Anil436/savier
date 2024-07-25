import { Link, Stack } from "expo-router"
import {View, Text} from "react-native"
export default function _layout() {
    return(
        <Stack>
            <Stack.Screen name='index'  />
            <Stack.Screen name='donor-register'  />
            <Stack.Screen name='profile-screen'  />
            <Stack.Screen name='donor-login'  />
            <Stack.Screen name='donor-homescreen'  />
            <Stack.Screen name='blood-request'  />
            <Stack.Screen name='blood-camp'  />
            <Stack.Screen name='donor-myrequest'  />
            <Stack.Screen name='find-donor'  />
            <Stack.Screen name='blood-drive'  />
            <Stack.Screen name='my-donations'  />

           
        </Stack>
    );
};