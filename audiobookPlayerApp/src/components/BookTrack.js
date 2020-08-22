import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const BookTrack = ({ imgUrl, title, author, onPress, songUrl, coverImgUrl, description }) => {
	const [audioUrl, setSongUrl] = useState(songUrl)
	const [coverImg, setCoverImg] = useState(coverImgUrl)
	const [bookDescription, setMediumImg] = useState(description)

	return (
		<TouchableOpacity onPress={() => onPress(audioUrl, coverImg, description, title, author)}>
			<View style={styles.trackContainer}>
				<Image
					source={{ uri: imgUrl }}
					style={{ width: 100, height: 100, marginRight: 10 }}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.titleText}>
						{title}
					</Text>
					<Text style={styles.authorText}>
						{author}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
};


export default BookTrack

const styles = {
	trackContainer: {
		flexDirection: 'row',
		marginVertical: 5
	},

	textContainer: {
		marginVertical: 20,
	},

	titleText: {
		fontWeight: 'bold',
		fontSize: 12,
		marginBottom: 10,
		color: '#1e2cc7'
	},

	authorText: {
		fontSize: 12,
		color: '#1e2cc7'
	}
}