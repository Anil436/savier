import React from 'react'
import { View, Text, Image, ScrollView, Button } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-shadow-cards'
function DonorHostADrive() {
    return (

        <ScrollView style={styles.end}>
            <View style={styles.topNav}>
                <View style={styles.circle}>
                    <Image
                        source={require("../assets/photo1.jpg")}
                        style={styles.img}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.pad}>
                    <TextInput placeholder='Search your blood Requests'
                        style={styles.search}
                    ></TextInput>
                </View>
                <View style={styles.design}>
                    <AntDesign name="message1" size={29} color="black" />

                </View>
            </View>
            <View style={styles.headingView}>
                <Text style={{
                    color: 'red',
                    fontWeight: 600,
                    fontSize: 18
                }}>Host A Blood Camp</Text>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camp-photo.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>BV Camp</Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Hospital : Sunrise</Text>
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>No of Donors         : 40</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Date                         : 17.12.2022</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Address                  : SR Nagar</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>City                          : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>State                        : Telangana</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Intrested People    : 3</Text>
                        </View>


                    </View>

                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camps-photo-2.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Truste Camp</Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Hospital : Apollo</Text>
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>No of Donors         : 40</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Date                         : 17.12.2022</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Address                  : SR Nagar</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>City                          : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>State                        : Telangana</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Intrested People    : 3</Text>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camps-pic-4.webp")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Blood Camp</Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Hospital : Nori</Text>
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>No of Donors         : 40</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Date                         : 17.12.2022</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Address                  : SR Nagar</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>City                          : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>State                        : Telangana</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Intrested People    : 3</Text>
                        </View>


                    </View>

                </Card>
            </View>
            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camps-photo-2.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>YSR Blood Camp</Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Hospital : Sunrise</Text>
                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>No of Donors         : 40</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Date                         : 17.12.2022</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Address                  : SR Nagar</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>City                          : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>State                        : Telangana</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Intrested People    : 3</Text>
                        </View>
                    </View>
                </Card>
            </View>

            <View style={styles.cardView}>
                <Card style={styles.card}>
                    <View style={styles.imageView}>
                        <Image style={styles.imageStyle}
                            source={require("../assets/blood-camp-photo.jpg")}
                        >
                        </Image>
                        <View style={styles.textView}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Save life Blood Camp</Text>
                            <Text numberOfLines={2} ellipsizeMode="tail" style={{
                                color: 'black',
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Hospital : KIMS</Text>

                        </View>
                    </View>
                    <View style={styles.lane}>
                        <View style={styles.lines}></View>
                    </View>
                    <View style={styles.information}>
                        <View >
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>No of Donors         : 40</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Date                         : 17.12.2022</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Address                  : SR Nagar</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>City                          : Hyderabad</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>State                        : Telangana</Text>
                        </View>
                        <View style={styles.otherInfo}>
                            <Text numberOfLines={1} ellipsizeMode="tail" style={{
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>Intrested People    : 333333333333</Text>
                        </View>

                    </View>

                </Card>
            </View>



        </ScrollView>

    );
}
export default DonorHostADrive
const styles = StyleSheet.create({
    topNav: {
        paddingStart: 35,
        paddingEnd: 35,
        marginTop: 20,
        flexDirection: 'row'
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 0,
        borderColor: 'white',
    },
    img: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    pad: {
        paddingHorizontal: 15,
        paddingTop: 3,
        borderRadius: 10,
    },
    search: {
        width: 215,
        height: 35,
        paddingTop: 2.5,
        paddingBottom: 3,
        paddingStart: 20,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
    },
    design: {
        paddingTop: 5,
        paddingHorizontal: 5,
    },
    headingView: {
        paddingStart: 35,
        paddingTop: 20,
    },
    // headingStyle: {
    //     color: 'red',
    //     fontWeight: 600,
    //     fontSize: 18,

    // },
    cardView: {
        paddingTop: 10,
        paddingStart: 35,
        paddingEnd: 35,
    },
    card: {
        height: 150,
        width: 320,
        paddingStart: 20,
        paddingEnd: 20,
        flexDirection: 'row'
    },
    imageView: {
        paddingTop: 10,
        height: 95,
        width: 105,
    },
    imageStyle: {
        height: 95,
        width: 105,

    },
    textView: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    // textStyle: {
    //     color: 'black',
    //     fontSize: 10,
    //     fontWeight:'bold',
    // },
    lines: {
        height: 130,
        width: 1,
        backgroundColor: 'grey',
        marginStart: 20,
    },
    lane: {
        paddingTop: 10,
    },
    // size: {
    //     fontSize: 10,
    //     fontWeight: 'bold',
    // },
    information: {

        width: 170,
        paddingLeft: 15,
        paddingTop: 8,
        paddingBottom: 20,

    },
    otherInfo: {
        paddingTop: 9,
    },
    symbol: {
        paddingTop: 10,
        paddingStart: 40,
        flexDirection: 'row',

    },
    space: {
        paddingRight: 15,
    },
    end: {
        marginBottom: 10,
    }

})