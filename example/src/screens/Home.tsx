import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { Routes } from '../Routes';

const screens = [
  { name: 'EmptyExample', title: 'Empty Example' },
  { name: 'CubeExample', title: 'Cube' },
  { name: 'CubeWithGestureExample', title: 'Cube with gesture' },
  { name: 'TriangleExample', title: 'Triangle' },
  { name: 'PaintExample', title: 'Paint' },
] as const;

export default function Home() {
  const { navigate } = useNavigation<StackNavigationProp<Routes, "Home">>();
  return (
    <ScrollView style={styles.container}>
      {screens.map((screen) => (
        <RectButton
          key={screen.name}
          onPress={() => navigate(screen.name)}
        >
          <View key={screen.name} style={styles.item}>
            <Text style={styles.title}>
              {screen.title}
            </Text>
          </View>
        </RectButton>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: "white",
    padding: 32,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
