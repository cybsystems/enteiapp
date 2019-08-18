import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Dimensions,
} from "react-native";
import Video from "react-native-video";
import { Card, CardItem, Body } from "native-base";
class CategoryContainer extends Component {
	onOpenVideo = () => {
		this.props.navigation.navigate("VideoScreen");
	};

	_keyExtractor = (item, index) => item.videos_id;

	constructor() {
		super();
		this.player = {};
		this.screenWidth = Math.round(Dimensions.get("window").width);
	}

	onVideoSelect = video => {
		this.props.navigation.navigate("VideoScreen", { video });
	};

	render() {
		const { bgColor } = this.props.category;
		let { videos } = this.props;

		if (videos && !videos[videos.length - 1].ITEM_TYPE)
			videos.push({
				videos_id: videos[videos.length - 1].videos_id + 1,
				ITEM_TYPE: "LAST",
			});
		return (
			<View style={{ flex: 1 }}>
				<FlatList
					data={videos}
					keyExtractor={this._keyExtractor}
					contentContainerStyle={{ paddingBottom: 20 }}
					renderItem={({ item }) => (
						<View>
							{item.ITEM_TYPE ? (
								<Card>
									<CardItem>
										<Body>
											<View style={{ padding: 50 }}>
												<Text> </Text>
											</View>
										</Body>
									</CardItem>
								</Card>
							) : (
								<TouchableOpacity
									onPress={() => {
										this.onVideoSelect(item);
									}}
									style={styles.itemContainer}>
									<Card style={{ paddingBottom: 20 }}>
										<Video
											source={{
												uri:
													"http://bhoomi.pe.hu/videos/" +
													item.videos_id +
													".mp4",
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
										Title:	{item.videos_title}
										</Text>

										<Text
											style={{
												fontSize: 25,
												color: "black",
												marginTop: 20,
												marginLeft: 20,
											}}>
										Category:	{item.category.label}
										</Text>
                    <Text
											style={{
												fontSize: 25,
												color: "black",
												marginTop: 20,
												marginLeft: 20,
											}}>
										Class:	{item.videos_class}
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
							)}
						</View>
					)}
				/>
			</View>
		);
	}
}

{
	/* <View style={{alignItems:'center',alignContent:'center' ,padding:50}}> 
                       <Text style={{fontSize:30,color:'white'}}>{ item.videos_title}</Text>
                     </View> */
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
export default CategoryContainer;
