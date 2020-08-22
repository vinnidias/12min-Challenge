import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Image, ImageBackground, Button } from 'react-native'
import SoundPlayer from 'react-native-sound'
import PlayPauseButton from '../components/PlayPauseButton'
import { TouchableOpacity } from 'react-native-gesture-handler';

const AudioPalyer = ({ route, navigation }) => {
	const { audio } = route.params
	const { coverImg } = route.params
	const { description } = route.params
	const { title } = route.params
	const { author } = route.params
	const [playing, setPlaying] = useState(true)
	const [duration, setDuration] = useState(0)
	const [textTimer, setTextTimer] = useState(0)
	const songTime = duration / 60

	const song = new SoundPlayer(audio, null,
		(error) => {
			if (error) {
				Alert.alert('erro ao iniciar o player')
			}
			setDuration(`${song.getDuration()}`)
		}
	)

	return (
		<View style={{ flex: 1 }}>
			<ImageBackground source={{ uri: coverImg }} style={styles.imgBackground}>
				<View style={styles.infoContainer}>
					<Text style={styles.title}>
						{title}
					</Text>
					<Text style={styles.author}>
						{author}
					</Text>
				</View>
				<PlayPauseButton onPlayPress={() => song.play()} onPausePress={() => song.pause()} />
			</ImageBackground>
		</View>
	)
};

export default AudioPalyer

const styles = {
	imgBackground: {
		flex: 1,
		justifyContent: 'center',
		resizeMode: 'cover',
		opacity: 0.6,
		backgroundColor: '#9338EF'
	},

	title: {
		fontWeight: 'bold',
		fontSize: 22,
		color: 'white',
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},

	author: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},

}