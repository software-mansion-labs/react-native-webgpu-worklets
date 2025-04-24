import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import EmptyExample from './screens/EmptyExample';
import Home from './screens/Home';
import type { Routes } from "./Routes";
import TriangleExample from "./screens/Triangle";
import CubeExample from "./screens/Cube";

const Stack = createStackNavigator<Routes>();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="EmptyExample" component={EmptyExample} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CubeExample" component={CubeExample} />
          <Stack.Screen name="TriangleExample" component={TriangleExample} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
