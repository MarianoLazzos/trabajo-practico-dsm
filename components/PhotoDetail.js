import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PhotoDetail = ({ title, imageUrl }) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(imageUrl)}
      style={{
        padding: 0,
        overflow: 'hidden',
        margin: 2,
        borderRadius: 15,
        flex: 1,
      }}>
      <View style={styles.title}>
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}>
          <View style={styles.headerContentStyle}>
            <Text numberOfLines={1} style={styles.headerTextStyle}>
              {title}
            </Text>
          </View>
        </LinearGradient>
      </View>
      <Image
        resizeMode="cover"
        style={[styles.imageStyle]}
        source={{ uri: imageUrl }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: null,
    width: '100%',
    padding: 0,
  },
  headerContentStyle: {
    alignSelf: 'center',
    paddingBottom: 10,
    paddingTop: 3,
    paddingHorizontal: 4,
  },
  headerTextStyle: {
    fontSize: 18,
    color: '#fff',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 250,
    flex: 1,
  },
});

export default PhotoDetail;
