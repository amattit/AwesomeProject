import { View } from "react-native";
import { TextInput } from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Component } from "react/cjs/react.production.min";

class AddEventViewState extends Component {
    eventTitle = "123"
    render() {
        return (
            <View>
                <TextInput value={this.eventTitle} />
            </View>
        )
    }
}

export default AddEventViewState