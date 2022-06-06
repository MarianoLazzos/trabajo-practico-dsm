import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import Loading from './Loading';

const PhotoList = ({ route }) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`
      )
      .then((response) => setPhotos(response.data.photoset.photo));
  }, []);

  return !photos ? (
    <Loading />
  ) : (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={photos}
        keyExtractor={(photo) => photo.id}
        renderItem={({ item }) => (
          <PhotoDetail
            key={item.title}
            title={item.title}
            imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
          />
        )}
      />
    </View>
  );
};
export default PhotoList;
