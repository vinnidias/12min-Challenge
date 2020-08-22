import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ImageBackground, BackHandler } from 'react-native'
import SoundPlayer from 'react-native-sound'
import PlayPauseButton from '../components/PlayPauseButton'
import IconButton from '../components/IconButton'

const AudioPalyer = ({ route, navigation }) => {
	const { audio } = route.params
	const { coverImg } = route.params
	const { title } = route.params
	const { author } = route.params
	const [duration, setDuration] = useState(0)
	const [textTimer, setTextTimer] = useState('')
	const advancedTime = textTimer + 10
	const songTime = duration / 60
	const backHandler = BackHandler.addEventListener('hardwareBackPress', () => { song.stop() })

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
				<View style={styles.buttonsContainer}>
					<IconButton
						textLeft={'- 10 '}
						icon={'⏪'}
						onPress={() => {
							song.getCurrentTime((sec) => {
								let minusTen = sec - 10
								if (minusTen < 0) minusTen = 0
								song.setCurrentTime(minusTen)
							})
						}}
					/>
					<PlayPauseButton
						onPlayPress={() => song.play()}
						onPausePress={() => song.pause()}
					/>
					<IconButton
						textRight={' 10 +'}
						icon={'⏩'}
						onPress={() => {
							song.getCurrentTime((sec) => {
								let plusTen = sec + 10
								if (plusTen > duration) plusTen = duration
								song.setCurrentTime(plusTen)
							})
						}}
					/>
				</View>
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
		opacity: 0.7,
		backgroundColor: '#1e2cc7'
	},

	infoContainer: {
		justifyContent: 'center',
		alignItems: 'center',

	},

	title: {
		fontWeight: 'bold',
		fontSize: 22,
		color: 'white',
		margin: 10,
		alignSelf: 'center'
	},

	author: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center'
	},

	buttonsContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: 200
	}
}