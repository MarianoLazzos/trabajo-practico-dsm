import React, { useState, useEffect, Component } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Loading from './Loading';

const AlbumList = ({ navigation }) => {
  const [photoset, setPhotoSet] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1'
      )
      .then((response) => setPhotoSet(response.data.photosets.photoset));
  }, []);

  return !photoset ? (
    <Loading />
  ) : (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={photoset}
        keyExtractor={(album) => album.id}
        renderItem={({ item }) => (
          <AlbumDetail
            navigation={navigation}
            key={item.id}
            title={item.title._content}
            albumId={item.id}
          />
        )}
      />
    </View>
  );
};

export default AlbumList;
