import React from 'react'
import { Image, Linking, Text, View } from 'react-native'
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailContainer, thumbnailImage, textContainer, titleText, artworkImage } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnailImage} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainer}>
          <Text style={titleText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={artworkImage} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now 
        </Button>
      </CardSection>
    </Card>
  );
}

export default AlbumDetail

const styles = {
  thumbnailContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleText: {
    fontSize: 18
  },
  thumbnailImage: {
    height: 50, width: 50
  },
  artworkImage: {
    height: 300,
    flex: 1,
    width: null
  }
}