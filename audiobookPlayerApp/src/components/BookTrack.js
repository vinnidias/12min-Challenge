import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const BookTrack = ({ imgUrl, title, author }) => {
	return (
		<TouchableOpacity>
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
		margin: 10
	},

	textContainer: {
		marginVertical: 20
	},

	titleText: {
		fontWeight: 'bold',
		fontSize: 14,
		marginBottom: 10,
		color: '#9338EF'
	},

	authorText: {
		fontSize: 12,
		color: '#9338EF'
	}
}