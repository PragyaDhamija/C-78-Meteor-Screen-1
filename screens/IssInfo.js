import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default class IssInfo extends Component {
    constructor() {
        super();
        this.state = {
            location: {}
        }
    }
    componentDidMount() {
        this.getIssLocation()
        try {
            setInterval(async () => { this.getIssLocation()},5000)

        }
        catch (e) {
            console.log(e);
          }
    }

    getIssLocation = () => {
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({
                    location: response.data
                })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
        //console.log(response.data)
    }
    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <Text>Loading</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Latitude: {this.state.location.latitude}</Text>
                    <Text style={styles.infoText}>Longitude: {this.state.location.longitude}</Text>
                    <Text style={styles.infoText}>Altitude: {this.state.location.altitude}</Text>
                    <Text style={styles.infoText}>Velocity: {this.state.location.velocity}</Text>
                </View>
            )
        }
    }


}



const styles = StyleSheet.create({
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
    },
    infoText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
});   
