import React from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

const PhotoDetail = ({ title, imageUrl }) => {
  return (
    <Card style={{ padding: 0, overflow: 'hidden' }}>
      <CardSection style={styles.title}>
        <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']}>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{title}</Text>
          </View>
        </LinearGradient>
      </CardSection>
      <Image
        resizeMode="cover"
        style={styles.imageStyle}
        source={{ uri: imageUrl }}
      />

      <CardSection style={styles.button}>
        <Button
          secondary
          onPress={() => Linking.openURL(imageUrl)}
          style={{ paddingHorizontal: 18 }}>
          <AntDesign name="arrowright" size={30} />
        </Button>
      </CardSection>
    </Card>
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
  button: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: null,
    marginBottom: 3,
  },
  headerContentStyle: {
    alignSelf: 'center',
    paddingBottom: 10,
    paddingTop: 3,
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
    height: 300,
    flex: 1,
  },
});

export default PhotoDetail;
