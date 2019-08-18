import React, { Component } from "react";
import { Text, View, Image, StatusBar, Alert } from "react-native";
import {
	Container,
	Header,
	Content,
	Form,
	Picker,
	Item,
	Input,
	Label,
	Card,
	CardItem,
	Button,
} from "native-base";
const SharedPreferences = require("react-native-shared-preferences");

export default class Register extends Component {
	state = {
		userName: "",
		password: "",
		cpassword: "",
		categories: [],
		phone: "",
		selectedCategory: -1,
		selectedClass: -1,
		firstName: "",
		lastName: "",
	};

	async componentDidMount() {
		let sql = "select * from categories";
		const formData = new FormData();
		formData.append("sql", sql);

		const response = await fetch("http://bhoomi.pe.hu/entei/query.php", {
			method: "POST",
			body: formData,
		})
			.then(res => res.json())
			.then(res => res);

		const categories = response.res;
		this.setState({ categories: categories });
	}
	onRegister = async () => {
		const {
			cpassword,
			password,
			userName,
			selectedCategory,
			selectedClass,
			phone,
			firstName,
			lastName,
		} = this.state;

		if (!selectedCategory) {
			Alert.alert("Select Category");
			return;
		}
		if (selectedClass == -1) {
			Alert.alert("Select Class");
			return;
		}
		if (cpassword !== password) {
			Alert.alert("Password Not Matched");
			return;
		}

		let reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (!phone.match(reg)) {
			Alert.alert("Invalid Mobile Number");
			return;
		}
		if (!userName) {
			Alert.alert("Enter Username");
			return;
		}
		if (!password) {
			Alert.alert("Enter Password");
			return;
		}
		if (!firstName) {
			Alert.alert("Enter First Name");
			return;
		}

		if (!lastName) {
			Alert.alert("Enter Last Name");
			return;
		}

		let sql = "select * from users where users_uname='" + userName + "'";
		let formData = new FormData();
		formData.append("sql", sql);

		let response = await fetch("http://bhoomi.pe.hu/entei/query.php", {
			method: "POST",
			body: formData,
		})
			.then(res => res.json())
			.then(res => res);
		if (response.res.length > 0) {
			Alert.alert("Username Already Taken");
			return;
		}

		let category = this.state.categories.filter(
			item => item.cat_id == selectedCategory
		)[0].name;
		let sql1 = `INSERT INTO users (users_name, users_uname, users_password, cat, clss, activate,phone,users_firstname,users_lastname) values('${userName}','${userName}','${password}','${category}'," ${selectedClass} ",0,'${phone}','${firstName}','${lastName}')`;
		let formData1 = new FormData();
		formData1.append("sql", sql1);

		let me = this;
		let response1 = await fetch("http://bhoomi.pe.hu/entei/query.php", {
			method: "POST",
			body: formData1,
		})
			.then(res => res.json())
			.then(res => {
				Alert.alert(
					"Registered Successfully Please Ask Your Teacher To Activate You"
				);
				SharedPreferences.setItem("isRegistered", "true");
				me.props.showLogin();
				return res;
			})
			.catch(err => {});
	};
	render() {
		const { categories, selectedClass, selectedCategory } = this.state;
		const clss = [-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		if (categories.findIndex(item => item.value == -1) == -1)
			categories.unshift({ label: "Select Category", value: -1 });

		return (
			<View style={{ backgroundColor: "#dcdae0", flex: 1 }}>
				<StatusBar backgroundColor="#512DA8" barStyle="loght-content" />
				<Card
					style={{
						marginLeft: 20,
						marginRight: 20,
						marginTop: 20,
						paddingBottom: 80,
					}}>
					<CardItem>
						<Content>
							{/* <Image
                                style={{ width: 120, marginTop: 20, height: 80, alignSelf: 'center' }}
                                source={require('../../assets/logo.png')}
                            /> */}
							<Form style={{ marginTop: 30 }}>
								<Item>
									<Picker
										note
										mode="dropdown"
										style={{ width: 120 }}
										selectedValue={selectedCategory}
										onValueChange={v => this.setState({ selectedCategory: v })}>
										{categories.map((item, i) => (
											<Picker.Item
												key={i}
												label={item.label}
												value={item.cat_id}
											/>
										))}
									</Picker>
								</Item>

								<Item>
									<Picker
										note
										mode="dropdown"
										style={{ width: 120 }}
										selectedValue={selectedClass}
										onValueChange={v => this.setState({ selectedClass: v })}>
										{clss.map((item, i) =>
											item == -1 ? (
												<Picker.Item
													key={i}
													label="Select Class"
													value={item}
												/>
											) : (
												<Picker.Item key={i} label={"" + item} value={item} />
											)
										)}
									</Picker>
								</Item>
								<Item floatingLabel>
									<Label>First Name</Label>
									<Input
										onChangeText={text => this.setState({ firstName: text })}
									/>
								</Item>

								<Item floatingLabel>
									<Label>Last Name</Label>
									<Input
										onChangeText={text => this.setState({ lastName: text })}
									/>
								</Item>

								<Item floatingLabel>
									<Label>Username</Label>
									<Input
										onChangeText={text => this.setState({ userName: text })}
									/>
								</Item>
								<Item floatingLabel>
									<Label>Mobile No</Label>
									<Input
										onChangeText={text => this.setState({ phone: text })}
									/>
								</Item>

								<Item floatingLabel>
									<Label>Password</Label>
									<Input
										secureTextEntry={true}
										onChangeText={text => this.setState({ password: text })}
									/>
								</Item>
								<Item floatingLabel last>
									<Label>Confirm Password </Label>
									<Input
										secureTextEntry={true}
										onChangeText={text => this.setState({ cpassword: text })}
									/>
								</Item>
							</Form>
							<View style={{ alignSelf: "center", marginTop: 80 }}>
								<Button
									onPress={this.onRegister}
									primary
									style={{ padding: 100 }}>
									<Text style={{ color: "white", fontSize: 20 }}>Register</Text>
								</Button>
							</View>
							<View style={{ alignSelf: "center", marginTop: 30 }}>
								<Text
									onPress={this.props.showLogin}
									style={{
										color: "black",
										fontSize: 20,
										textDecorationLine: "underline",
									}}>
									Already Have Registered ?{" "}
								</Text>
							</View>
						</Content>
					</CardItem>
				</Card>
			</View>
		);
	}
}
