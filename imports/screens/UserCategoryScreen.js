//import liraries
import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    StatusBar,
    Image,
    Text,
    Picker,
    Dimensions,
} from 'react-native'
import { Button, Input, Grid, Row, Col } from 'native-base'
import CategoriesRow from '../components/CategoriesRow'
import { connect } from 'react-redux'
import { selectCategory, getVideos } from '../actions/category_actions'
import CategoryContainer from '../components/CategoryContainer'
import CategoryCard from '../components/CategoryCard'

// create a component
class UserCategory extends Component {
    state = {
        classes: null,
        currentClass: null,
        videosForCategory: undefined,
        videosToShow: undefined,
    }
    onMenuClicked = () => {
        this.props.navigation.toggleDrawer()
    }
    componentDidMount() {
        this.props.getVideos()
    }
    getClasses = videosForCategory => {
        let classes = videosForCategory
            .map(video => parseInt(video.videos_class))
            .sort()
        let classSet = new Set(classes)
        classes = [...classSet]
        const videos = this.props.category.videosForCategory.filter(
            video => video.videos_class == parseInt(this.props.user.clss)
        )

        this.setState({
            classes: classes,
            currentClass: classes[0],
            videosForCategory: videos,
            videosToShow: videos,
        })
    }

    onClassChange = (itemValue, itemIndex) => {
        const videos = this.props.category.videosForCategory.filter(
            video => video.videos_class == itemValue
        )
        this.setState({
            currentClass: itemValue,
            videosToShow: videos,
            videosForCategory: videos,
        })
    }

    onSearch = text => {
        const { videosForCategory } = this.state

        const videosToShow = videosForCategory.filter(
            video =>
                video &&
                video.videos_title &&
                (video.videos_title.toLowerCase().includes(text.toLowerCase()) ||
                    video.videos_desc.toLowerCase().includes(text.toLowerCase()))
        )
        this.setState({ videosToShow: videosToShow })
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.category.videosForCategory !==
            this.props.category.videosForCategory
        )
            this.getClasses(this.props.category.videosForCategory)
    }
    render() {
        const { videosToShow } = this.state

        const { bgColor } = this.props.category

        const screenWidth = Math.round(Dimensions.get('window').width)

        return (
            <View>
                <StatusBar backgroundColor={bgColor} barStyle="light-content" />
                <Grid style={{ backgroundColor: bgColor, minHeight: 100 }}>
                    <Row style={{ marginLeft: 10, marginBottom: 60, marginTop: 30 }}>
                        <Button transparent onPress={this.onMenuClicked}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../../assets/menu.png')}
                            />
                        </Button>
                        <View
                            style={{
                                borderRadius: 20,
                                minWidth: screenWidth - 90,
                                minHeight: 40,
                                backgroundColor: 'white',
                                marginLeft: 20,

                            }}
                        >
                            <Input
                                onChangeText={this.onSearch}
                                style={{ color: 'black' }}
                                placeholder="Search"
                            />
                        </View>
                    </Row>
                </Grid>

                <View style={{ minHeight: 500 }}>
                    {videosToShow ? (
                        <React.Fragment>
                            {videosToShow.length == 0 ? (
                                <View style={{ alignSelf: 'center' }}>
                                    <Text>NO VIDEOS</Text>
                                </View>
                            ) : (
                                    <CategoryContainer videos={videosToShow} {...this.props} />
                                )}
                        </React.Fragment>
                    ) : (
                            <Text style={{ alignSelf: 'center' }}>Loading Videos</Text>
                        )}
                </View>

            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})

const mapStateToProps = state => {
    const { login, category } = state

    return {
        category: category,
        user: login.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectCategory: category => {
            dispatch(selectCategory(category))
        },
        getVideos: () => {
            dispatch(getVideos())
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCategory)
