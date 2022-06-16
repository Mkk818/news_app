import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://picsum.photos/id/866/200/200' }}
          />
        </View>{/* {styles.leftContainer}> */}
        <View style={styles.rightContainer}>
          <View>
            <Text numberOfLines={3} style={styles.text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              officiis necessitatibus tempore ipsa nemo nostrum beatae molestias
              labore eos praesentium libero architecto deserunt, maxime, odit
              perferendis, explicabo doloribus aperiam laboriosam.
            </Text>
            <Text style={styles.subText}>ReactNews</Text>
          </View>
        </View>{/* {styles.rightContainer}> */}
      </View>{/* {styles.itemContainer}> */}
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
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: '#555',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});