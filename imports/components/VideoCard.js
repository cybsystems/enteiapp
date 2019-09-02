import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from "react-native";
import Video from "react-native-video";
import { Card } from "native-base";

export default class VideoCard extends Component {
	constructor() {
		super();
		this.player = {};
		this.screenWidth = Math.round(Dimensions.get("window").width);
	}
	render() {
		const { video, onVideoClick } = this.props;
		const item = video;
		return (
			<TouchableOpacity
				onPress={() => {
					onVideoClick(item);
				}}
				style={styles.itemContainer}>
				<Card style={{ paddingBottom: 20 }}>
					<Video
						source={{
							uri: "http://bhoomi.pe.hu/videos/" + item.videos_id + ".mp4",
						}}
						ref={ref => {
							this.player = ref;
						}} // Store reference
						onBuffer={() => {}} // Callback when remote video is buffering
						onError={() => {}}
						style={{
							width: this.screenWidth - 40,
							height: 200,
						}}
						paused={true} // Callback when video cannot be loaded
					/>
					<Text
						style={{
							fontSize: 25,
							color: "black",
							marginTop: 20,
							marginLeft: 20,
						}}>
						Title: {item.videos_title}
					</Text>

					<Text
						style={{
							fontSize: 25,
							color: "black",
							marginTop: 20,
							marginLeft: 20,
						}}>
						Category: {item.category.label}
					</Text>
					<Text
						style={{
							fontSize: 25,
							color: "black",
							marginTop: 20,
							marginLeft: 20,
						}}>
						Class: {item.videos_class}
					</Text>
				</Card>
				<View
					style={{
						borderBottomColor: "black",
						borderBottomWidth: 0.2,
						marginTop: 20,
					}}
				/>
			</TouchableOpacity>
		);
	}
}
const styles = StyleSheet.create({
	itemContainer: {
		borderRadius: 5,
		margin: 20,
	},
	item: { width: 100, height: 100 },
	itemName: {
		fontSize: 20,
		color: "#5d6061",
		fontWeight: "600",
	},
	itemCode: {
		fontWeight: "600",
		fontSize: 14,
		color: "#5d6061",
	},
});
