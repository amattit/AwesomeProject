import { Button, ScrollView, View } from "react-native";
import * as React from 'react'
import { Image } from "react-native";
import { Component } from "react/cjs/react.production.min";
import EventView from "./EventView";
import { StyleSheet } from "react-native";

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
};

const data = [
    {
        id: 1,
        title: "Первая заметка",
        tags: ["Первый", "Второй", "Третий"]
    },
    {
        id: 2,
        title: "вторая заметка",
        tags: ["Первый", "Второй", "Третий"]
    },
    {
        id: 3,
        title: "третья заметка",
        tags: ["Первый", "Второй", "Третий"]
    },
    {
        id: 4,
        title: "Четветрая заметка",
        tags: ["Первый", "Второй", "Третий"]
    },
];

class EventList extends Component {
    render() {
        return (
            <ScrollView>
                <Button 
                title="Add Event"
                onPress={ () => this.props.navigation.navigate('AddEventViewState')}
                />
                {data.map((element) => (<EventView item={element} key={element.id}></EventView>))}
            </ScrollView>
        )
    }
}

export default EventList