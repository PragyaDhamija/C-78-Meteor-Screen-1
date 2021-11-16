import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class IssLocationScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text> IssLocationScreen !</Text>
            </View>
        )
    }
}



// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, ImageBackground, Image } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import axios from 'axios';
// import IssInfo from './IssInfo';

// export default class IssLocationScreen extends Component {
//     constructor() {
//         super();
//         this.state = {
//             location: {}
//         }
//     }
//     componentDidMount() { this.getIssLocation() }

//     getIssLocation = () => {
//         axios.get("https://api.wheretheiss.at/v1/satellites/25544")
//             .then(response => {
//                 this.setState({
//                     location: response.data
//                 })
//             })
//             .catch(error => {
//                 Alert.alert(error.message)
//             })
//         //console.log(response.data)
//     }
//     render() {

//         if (Object.keys(this.state.location).length === 0) {
//             return (
//                 <View
//                     style={{
//                         flex: 1,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}>
//                     <Text>Loading ......</Text>
//                 </View>
//             );
//         }
//         else {
//             return (
//                 <View style={styles.container}>
//                     <SafeAreaView style={styles.droidSafeArea} />
//                     <ImageBackground source={require("../assets/iss_bg.jpg")} style={styles.backgroundImg}>

//                         <View style={styles.titleBar}>
//                             <Text style={styles.titleT}>Iss Location!</Text>
//                         </View>
//                         <View style={styles.mapContainer}>
//                             <MapView style={styles.map} region={{
//                                 latitude: this.state.location.latitude,
//                                 longitude: this.state.location.longitude,
//                                 latitudeDelta: 100,
//                                 longitudeDelta: 100,
//                             }}>
//                                 <Marker coordinate={{
//                                     latitude: this.state.location.latitude,
//                                     longitude: this.state.location.longitude
//                                 }}>
//                                     <Image source={require('../assets/iss_icon.png')} style={{ width: 50, height: 50 }} />

//                                 </Marker>

//                             </MapView>
//                         </View>


//                         <IssInfo />

//                     </ImageBackground>
//                 </View>
//             )
//         }





//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     titleText: {
//         fontWeight: 'bold',
//         fontSize: 35,
//         color: 'red',
//         //fontFamily : 'comic sans ms'
//     },
//     droidSafeArea: {
//         marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     },
//     titleBar: {
//         flex: 0.15,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'cover',
//     },
//     mapContainer: {
//         flex: 0.6,
//     },
//     map: {
//         width: '100%',
//         height: '100%',
//     },
// });