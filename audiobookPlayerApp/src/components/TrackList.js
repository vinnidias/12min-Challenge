import React from 'react'
import { View, Text, Image } from 'react-native'
import BookTrack from './BookTrack'
import { ScrollView } from 'react-native-gesture-handler'

const TrackList = ({array}) => {
	return (
		<ScrollView>
			{array.map(track => <BookTrack imgUrl={track.thumb_image_url} title={track.title} author={track.author} />)}
		</ScrollView>
	)
};

export default TrackList