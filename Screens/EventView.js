import { Text, View } from "react-native";
import { Component } from "react/cjs/react.production.min";
import { StyleSheet } from "react-native";
import TagView from "../Components/Tags/TagView";

class EventView extends Component {
    render() {
        return (
            <View>
                <TagView tags={this.props.item.tags} />
                <Text style={style.black}>{this.props.item.title}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    black: {
        color: 'blue',
        fontSize: 30
    }
})

export default EventView