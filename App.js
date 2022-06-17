import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
      imageUrl="https://picsum.photos/id/866/200/200"
      title="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
      officiis necessitatibus tempore ipsa nemo nostrum beatae molestias
      labore eos praesentium libero architecto deserunt, maxime, odit
      perferendis, explicabo doloribus aperiam laboriosam."
       author="SampleNews" />
    </View>// {styles.container}>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});