import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
	Container,
	Content,
	Text,
	List,
	ListItem,
	View,
	Button,
} from "native-base";
import store from "../store/stores";
import { ON_GET_VIDEOS } from "../actionTypes/actionTypes";
import { getPDFS } from "../saga/videosSaga";
import { getVideos } from "../actions/category_actions";
const routes = [
	{ label: "Videos", to: "Categories" },
	{ label: "PDFs", to: "PDFScreen" },
];

export default class DrawerMenu extends React.Component {
	render() {
		return (
			<Container>
				<Content>
					<View>
						<View
							style={{
								height: 180,
								alignSelf: "stretch",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#002e61",
							}}>
							<Image
								square
								style={{ height: 90, width: 90 }}
								source={require("../../assets/man.png")}
							/>
							<Text style={{ color: "white", fontSize: 30 }}>
								Hi {store.getState().login.user.users_name}
							</Text>
						</View>
					</View>
					<List
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										this.props.navigation.navigate(data.to);
									}}>
									<Text>{data.label}</Text>
								</ListItem>
							);
						}}
					/>
					<ListItem
						style={{ marginTop: 20, padding: 80, alignItems: "center" }}>
						<Button
							onPress={async () => {
								try {
									await store.dispatch(getVideos());
									await store.dispatch(getPDFS());
								} catch (err) {}
							}}>
							<Text>Refresh</Text>
						</Button>
					</ListItem>
				</Content>
			</Container>
		);
	}
}
