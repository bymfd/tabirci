import React, {Component} from 'react';
import {Alert, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Mesajlar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: "1", day: 1, month: 'Oca'},
                {id: "2", day: 2, month: 'Şub'},
                {id: "3", day: 3, month: 'Mar'},
                {id: "4", day: 4, month: 'Nis'},
                {id: "5", day: 5, month: 'May'},
                {id: "6", day: 6, month: 'Haz'},
                {id: "7", day: 7, month: 'Tem'},
                {id: "8", day: 8, month: 'Ağu'},
                {id: "10", day: 9, month: 'Eki'},
                {id: "11", day: 9, month: 'Kas'},
                {id: "12", day: 12, month: 'Ara'},
            ],
        };
    }

    eventClickListener = (viewId) => {
        Alert.alert("alert", "event clicked"+viewId);

    }

    render() {
        return (
            <LinearGradient
                colors={['#a95aec', '#9e3c9f', '#9b5fa4']}
                style={styles.container}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0, 0.7, 0.9]}
            >
                <View style={styles.container}>
                    <FlatList
                        enableEmptySections={true}
                        style={styles.eventList}
                        data={this.state.data}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity onPress={() => this.eventClickListener(item.id)}>
                                    <View style={styles.eventBox}>
                                        <View style={styles.eventDate}>
                                            <Text style={styles.eventDay}>{item.day}</Text>
                                            <Text style={styles.eventMonth}>{item.month}</Text>
                                        </View>
                                        <View style={styles.eventContent}>
                                            <Text style={styles.eventTime}>10:00 am - 10:45 am</Text>
                                            <Text style={styles.description}>Lorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consecteturLorem ipsum dolor sit amet, elit consectetur</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}/>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    eventList: {
        marginTop: 20,
    },
    eventBox: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
    },
    eventDate: {
        flexDirection: 'column',
    },
    eventDay: {
        fontSize: 50,
        color: "#ffffff",
        fontWeight: "600",
    },
    eventMonth: {
        fontSize: 16,
        color: "#efefef",
        fontWeight: "600",
    },
    eventContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        padding: 10,
        borderRadius: 10
    },
    description: {
        fontSize: 15,
        color: "#b3afaf",
    },
    eventTime: {
        fontSize: 18,
        color: "#151515",
    },
    userName: {
        fontSize: 16,
        color: "#151515",
    },
});

