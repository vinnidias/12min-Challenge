import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import TrackList from '../components/TrackList'
import axios from 'axios';

const AudiobookList = () => {
	const booksList = []
	const [list, setList] = useState({data: []})
	useEffect(()=>{
		axios.get('https://run.mocky.io/v3/96f0177a-118f-43b8-9c99-e84e3dc3fa81')
			.then(result => {setList(result.data); console.log(list.data[0].author)})
			.catch()
	},[])

	return (
		<View style={styles.listContainer}>
			<View style={styles.headerBox}>
				<Text style={styles.headerText}>
					Sua Lista
				</Text>
			</View>
			<View style={{flex: 4}}>
				<TrackList array={list.data}/>
			</View>
		</View>
	)
};

export default AudiobookList

const styles = {
	listContainer: {
		flex: 1,
	},

	headerBox: {
		backgroundColor: 'rgba(147, 56, 239, 0.6)',
		flex: 1,
		justifyContent: 'center'
	},

	headerText: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
}