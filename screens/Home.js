import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (

            <View
                style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require("../assets/bg_image.png")} style={styles.backgroundImg}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleT}>Iss Tracker App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("IssLocation")}}>
                        <Text style={styles.routeText}>Iss Location</Text>
                        <Text style={styles.knowMore}> {"Know more ==>"} </Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require("../assets/iss_icon.png")} style={styles.iconImg} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>{this.props.navigation.navigate("Meteors")}}>
                        <Text style={styles.routeText}>Meteors</Text>
                        <Text style={styles.knowMore}> {"Know more ==>"} </Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={styles.iconImg} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleT: {
        color: 'white',
        fontSize: 35,
        fontFamily: 'Algerian',
        textAlign: 'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    routeCard: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        width: '50%',
        borderRadius: 50,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 20,
        paddingRight: 120,
        marginTop: 30
    },
    backgroundImg: {
        flex: 1,
        resizeMode: 'cover',

    },
    iconImg: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80,
    },
    knowMore: {
        color: 'red',
        fontSize: 15,
        paddingLeft: 30,

    },
    bgDigit: {
        position: 'absolute',
        color: '#A0A0A0',
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1,
    }
})