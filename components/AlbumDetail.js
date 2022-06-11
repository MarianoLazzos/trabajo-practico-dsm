import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({
  navigation,
  title,
  albumId,
  server,
  primary,
  secret,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('photoList', { albumId: albumId })}>
      <Card>
        <CardSection style={styles.album}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 20,
              backgroundColor: 'black',
              paddingHorizontal: 7,
              color: 'white',
            }}>
            {title.toUpperCase()}
          </Text>
        </CardSection>
        <Image
          style={styles.image}
          source={{
            uri: `https://farm5.staticflickr.com/${server}/${primary}_${secret}.jpg`,
          }}
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  album: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: null,
    zIndex: 1,
  },

  image: {
    position: 'absolute',
    zIndex: 0,
    height: 90,
    width: '100%',
  },
});

export default AlbumDetail;
