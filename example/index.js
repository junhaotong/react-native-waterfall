import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import Waterfall from "../src";

const {
    width: clientWidth
} = Dimensions.get('window');

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layoutWidth: (clientWidth - 45) / 2,
            list: []
        }
    }

	componentDidMount() {
		this.load();
	}

	load() {
		fetch('path')
			.then(res => {
				this.setState({
                    list: res.data
				})
				this.refs.addItems(res.data);
			})
	}

    renderItem(item) {
        return (
            <View>
                <Image
                    style={{width: this.state.layoutWidth, height: this.state.layoutWidth / item.img_width * item.img_height}}
                    resizeMode="cover"
                    source={{uri: item.thumb_image_url}}></Image>
                <Text>{item.name.slice(0, 10)}</Text>
            </View>
        )
    }

    render() {
        return (
            <Waterfall
                space={15}
                ref="waterfall"
                columns={2}
                refreshing={this.refreshing}
                infiniting={this.infiniting}
                infinite={false}
                renderItem={item => this.renderItem(item)}
                renderInfinite={loading => this.renderLoadMore(loading)}
            />
        )
    }

    infiniting(done) {
        setTimeout(() => {
            this.refs.addItems(this.state.list);
            done();
        }, 1000);
    }

    refreshing(done) {
        setTimeout(() => {
            done();
        }, 1000);
    }

    renderLoadMore(loading) {
        if (loading) {
            return (
                <Text>加载中...</Text>
            )
        } else {
            return (
                <Text>加载更多</Text>
            )
        }
    }

}