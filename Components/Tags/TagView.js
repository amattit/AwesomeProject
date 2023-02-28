import { Text, View } from "react-native";
import { Component } from "react/cjs/react.production.min";
import { StyleSheet } from "react-native";

class TagView extends Component {
    render() {
        return (
            <View style={style.tagView}>
                {this.props.tags.map((elemt) => (<Text style={style.tagElement} key={elemt}>{elemt}</Text>))}
            </View>
        )
    }
}

const style = StyleSheet.create({
    tagView: {
        flex: 1,
        flexDirection: "row"
    },
    tagElement: {
        marginRight: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 8,
        overflow: true
    }
})

export default TagView