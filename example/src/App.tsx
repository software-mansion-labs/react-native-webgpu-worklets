import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import EmptyExample from './screens/Empty';
import Home from './screens/Home';
import type { Routes } from "./Routes";
import TriangleExample from "./screens/Triangle";
import CubeExample from "./screens/Cube";
import CubeWithGestureExample from "./screens/CubeWithGesture";
// import PaintExample from "./screens/Paint";

const Stack = createStackNavigator<Routes>();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="EmptyExample" component={EmptyExample} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CubeExample" component={CubeExample} />
          <Stack.Screen name="CubeWithGestureExample" component={CubeWithGestureExample} />
          <Stack.Screen name="TriangleExample" component={TriangleExample} />
          {/* <Stack.Screen name="PaintExample" component={PaintExample} /> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}
