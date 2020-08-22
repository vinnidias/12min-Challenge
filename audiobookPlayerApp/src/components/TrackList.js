import React from 'react'
import { View, Text, Image } from 'react-native'
import BookTrack from './BookTrack'
import { ScrollView } from 'react-native-gesture-handler'

const TrackList = ({array, onPress}) => {
	return (
		<ScrollView style={{padding: 10}}>
			{array.map(track => <BookTrack 
				imgUrl={track.thumb_image_url} 
				title={track.title} 
				author={track.author}
				songUrl={track.audio_url}
				coverImgUrl={track.cover_image_url}
				description={track.description}
				onPress={(audio, coverImg, description, title, author)=> onPress(audio, coverImg, description, title, author)}
				/>)}
		</ScrollView>
	)
};

export default TrackList