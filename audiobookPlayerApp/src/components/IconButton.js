import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const IconButton = ({ icon, onPress, textLeft, textRight }) => {
	return (
		<TouchableOpacity onPress={onPress} style={{ flexDirection: 'row' }}>
			<Text style={styles.textIcons}>
				{textLeft} {icon} {textRight}
			</Text>
		</TouchableOpacity>
	)
};

export default IconButton

const styles = {
	textIcons: {
		marginTop: 40,
		fontSize: 16,
		color: 'white',
		fontWeight: 'bold'
	}
}