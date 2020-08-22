import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const PlayPauseButton = ({ onPlayPress, onPausePress }) => {
	return (
		<View style={styles.playButtonContainer}>
			<TouchableOpacity onPress={onPlayPress}>
				<Image source={require('../images/play.png')} style={styles.playButton} />
			</TouchableOpacity>
			<TouchableOpacity onPress={onPausePress}>
				<Image source={require('../images/pause.png')} style={styles.pauseButton} />
			</TouchableOpacity>
		</View>
	)
};

export default PlayPauseButton

const styles = {
	playButton: {
		width: 60,
		height: 60,
		alignSelf: 'center',
		margin: 5,
		marginLeft: 25

	},

	pauseButton: {
		width: 40,
		height: 40,
		alignSelf: 'center'
	},

	playButtonContainer: {
		margin: 20,
		alignSelf: 'center',
		flexDirection: 'row'
	},
}