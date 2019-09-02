import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Dimensions,
	Animated,
} from "react-native";
import Video from "react-native-video";
import { Card, CardItem, Body } from "native-base";
import VideoCard from "./VideoCard";
class CategoryContainer extends Component {
	state = { slideUpValue: new Animated.Value(0) };

	_keyExtractor = (item, index) => item.videos_id;

	constructor() {
		super();
		this.player = {};
		this.screenWidth = Math.round(Dimensions.get("window").width);
	}
	componentDidMount() {
		this._start();
	}
	onVideoSelect = video => {
		this.props.navigation.navigate("VideoScreen", { video });
	};
	_start = () => {
		return Animated.parallel([
			Animated.timing(this.state.slideUpValue, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true,
			}),
		]).start();
	};
	render() {
		let { videos } = this.props;
		const { slideUpValue } = this.state;
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
								<Animated.View
									style={{
										transform: [
											{
												translateY: slideUpValue.interpolate({
													inputRange: [0, 1],
													outputRange: [600, 0],
												}),
											},
										],
									}}>
									<VideoCard video={item} onVideoClick={this.onVideoSelect} />
								</Animated.View>
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
