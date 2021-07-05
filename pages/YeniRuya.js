import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import EmojiSelector from 'react-native-emoji-selector';
import LinearGradient from "react-native-linear-gradient";
import DatePicker from 'react-native-date-picker';

export default class YeniRuya extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emojis: "🙂",
            ruya: "",
            show: false,
            date: new Date(),
        };
    }

    incele() {
        if (this.state.emojis !== "" && this.state.ruya.length > 20 && this.state.date !== "") {
            Alert.alert("OLUR", this.state.ruya + "\n" + this.state.emojis + "\n" + this.state.date);
        } else {
            Alert.alert("OLMAZ", this.state.ruya + "\n" + this.state.emojis + "\n" + this.state.date);
        }
    }

    updatedate(dates) {
        this.setState({date: dates})
    }

    onChangeText(texts) {
        this.setState({ruya: texts})
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
                    <Text style={styles.sec}>Rüyanda Nasıl Hissediyordun?</Text>
                    <View style={styles.container2}>

                        <EmojiSelector
                            showTabs={false}
                            showSearchBar={false}
                            showSectionTitles={false}
                            columns={6}
                            onEmojiSelected={emoji => this.setState({emojis: emoji})}
                        />
                    </View>
                    <Text style={styles.title}> Seçilen: {this.state.emojis} </Text>
                    <View
                        style={styles.clearflex}
                    />

                    <Text style={styles.sec}>Rüyanı ne zaman gördün ?</Text>
                    <View style={styles.date}>
                        <DatePicker
                            date={this.state.date}
                            androidVariant="nativeAndroid"
                            timeZoneOffsetInMinutes={0}
                            textColor={"#fff"}
                            maximumDate={new Date()}
                            onDateChange={dates => this.updatedate(dates)}
                        />
                    </View>
                    <View
                        style={styles.clearflex}
                    />
                    <Text style={styles.sec}>Rüyanda ne gördün?</Text>
                    <View style={styles.detaycer}>
                        <TextInput style={styles.detay}
                                   multiline
                                   scrollEnabled
                                   editable
                                   numberOfLines={4}
                                   maxLength={500}
                                   maxline={4}
                                   onChangeText={text => this.onChangeText(text)}
                                   placeholder={"Rüyanı Detaylı Bir şekilde Anlat"}
                        />
                    </View>
                    <TouchableOpacity style={[styles.button]} onPress={() => {
                        this.incele()
                    }}>
                        <View style={styles.title}>
                            <Text>Gönder</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    clearflex: {
        borderBottomColor: 'rgba(52, 52, 52, 0.1)',
        borderBottomWidth: 1,
        padding: 4,
        margin: 5,
    },
    container: {
        padding: 0.5,
        flex: 1,
    },
    container2: {
        alignSelf: 'center',
        width: "90%",
        flex: 0.5,
        height: "100%"
    },
    title: {
        fontSize: 24,
        color: "#fff",
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    detaycer: {
        borderRadius: 5,
        padding: 10,
        margin: 15,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
    },
    detay: {
        textAlignVertical: 'top',
        color: "#fff",
        width: "100%",
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    sec: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    date: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        color: "#fff",
        borderRadius: 5,
        padding: 10,
        margin: 15,
        backgroundColor: 'rgba(137,35,227,0.5)',
    },
});

