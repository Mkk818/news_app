import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListItem = ({imageUrl, title, author}) => {
  return (
    <View style={styles.itemContainer}>
    <View style={styles.leftContainer}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: imageUrl }}
      />
    </View>{/* {styles.leftContainer}> */}
    <View style={styles.rightContainer}>
      <View>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>{/* {styles.rightContainer}> */}
  </View>// {/* {styles.itemContainer}> */}
  );
}

export default ListItem;

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