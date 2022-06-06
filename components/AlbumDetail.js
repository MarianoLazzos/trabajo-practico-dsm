import React from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { AntDesign } from '@expo/vector-icons';

const AlbumDetail = ({ navigation, title, albumId }) => {
  return (
    <Card>
      <CardSection style={styles.album}>
        <View>
          <Text style={{ fontSize: 20 }}>{title.toUpperCase()}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          style={styles.button}
          onPress={() =>
            navigation.navigate('photoList', { albumId: albumId })
          }>
          <AntDesign name="arrowright" size={30} />
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  album: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    paddingHorizontal: 19,
  },
});

export default AlbumDetail;
