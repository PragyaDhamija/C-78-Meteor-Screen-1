import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import axios from 'axios';

export default class MeteorsScreen extends Component {
    constructor(){
        super()
        this.state={
            meteors: {}
        }
    }
    componentDidMount(){this.getMeteors()}
    getMeteors=()=>{
        axios.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY")
        .then(response=>{
            this.setState({
                meteors: response.data.near_earth_objects
            })
        })
        .catch(error=>{Alert.alert(error.message())})
    }
    render() {
        if(Object.keys(this.state.meteors).length===0){
            return(
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Loading...</Text>
                    </View>
                
            )
        }
        else{
            let meteor_arr=Object.keys(this.state.meteors).map(mDate=>{
                return this.state.meteors[mDate]
            })
            let meteors=[].concat.apply([],meteor_arr)
            meteors.forEach(function (element)   {
                let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
                let threatScore = (diameter/element.close_approach_data[0].miss_distance.kilometers) * 1000000000
            })
            
            return (
            <View
                style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground source={require("../assets/meteor_bg.jpg")} style={styles.backgroundImg}>

                    <View style={styles.titleBar}>
                        <Text style={styles.titleT}>Meteors!</Text>
                    </View>
                </ImageBackground>
            </View>
        )}
        
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImg:{
        flex:1,
        resizeMode: 'cover',

    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleT: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Algerian',
        textAlign: 'center'
    },
})