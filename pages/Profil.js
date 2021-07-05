import React, {Component} from 'react';
import {Image, Modal, Picker, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isim: "Mevlüt Furkan Demir",
            burc: "",
            eposta: "",
            pass: "",
            cins: "",
            dogum: "",
            meslek: "",
            ulke: "",
            id: "1",
            icon: "https://bootdey.com/img/Content/avatar/avatar1.png",

        };

        this.doldur()

    }

    doldur() {
        let isim = "";
        let dogum = "";
        let burc = "";
        let cins = "";
        let meslek = "";
        let pass = "";
        let ulke = "";
        let eposta = "";
        let id = "";

        this.setState({
            id: id,
            isim: isim,
            dogum: dogum,
            cins: cins,
            burc: burc,
            meslek: meslek,
            eposta: eposta,
            pass: pass,
            ulke: ulke,
        });


    }

    gonder = () => {



        this.setState({
            modalVisible: false,
        });


    }

    onChangeText(texts, nerden) {
        switch (nerden) {
            case ("isim"):
                this.setState({
                    isim: texts
                })
                break;
            case ("dogum"):
                this.setState({
                    dogum: texts
                })
                break;
            case ("burc"):
                this.setState({
                    burc: texts
                })
                break;
            case ("cins"):
                this.setState({
                    cins: texts
                })
                break;
            case ("meslek"):
                this.setState({
                    meslek: texts
                })
                break;
            case ("ulke"):
                this.setState({
                    ulke: texts
                })
                break;
            case ("eposta"):
                this.setState({
                    eposta: texts
                })
                break;
            case ("pass"):
                this.setState({
                    pass: texts
                })
                break;


        }
    }


    cardClickEventListener = (item) => {

        this.setState({
            modalVisible: true,
        })
    }

    tagClickEventListener = (tagName) => {
        //Alert.alert(tagName);
        this.setState({
            modalVisible: true,
        })
    }

    renderTags = (item) => {
        return item.tags.map((tag, key) => {
            return (
                <TouchableOpacity key={key} style={styles.btnColor} onPress={() => {
                    this.tagClickEventListener(tag)
                }}>
                    <Text>{tag}</Text>
                </TouchableOpacity>
            );
        })
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


                    <TouchableOpacity style={[styles.card]} onPress={() => {
                        this.cardClickEventListener(this.state.id)
                    }}>
                        <View style={styles.cardContent}>
                            <Image style={[styles.image, styles.imageContent]} source={{uri: this.state.icon}}/>
                            <Text style={styles.name}>{this.state.isim}</Text>
                        </View>
                        <View style={{flex: 1, color: "#fff", alignItems: 'center', padding: 100}}>

                            <Text style={{color: "#fff"}}>Düzenlemek için ekrana dokunun </Text>

                        </View>
                    </TouchableOpacity>


                </View>


                <Modal
                    animationType="slide"
                    visible={this.state.modalVisible}
                >
                    <ScrollView>
                        <Text style={[styles.name]}>Bilgilerini Güncelle </Text>

                        <Text style={[styles.title]}> İsim Soyisim </Text>
                        <TextInput style={[styles.detaycer]}

                                   value={this.state.isim}
                                   onChangeText={text => this.onChangeText(text, "isim")}
                        />

                        <Text style={[styles.title]}> Doğum Yılınız </Text>
                        <TextInput style={[styles.detaycer]}
                                   keyboardType={'number-pad'}
                                   maxLength={4}
                                   value={this.state.dogum}
                                   onChangeText={text => this.onChangeText(text, "dogum")}
                        />

                        <Text style={[styles.title]}> Burcunuz </Text>
                        <Picker
                            selectedValue={this.state.burc}
                            style={styles.detaycer}
                            onValueChange={(itemValue) => this.onChangeText(itemValue, "burc")}
                        >
                            <Picker.Item label="Seçiniz" value="Seçiniz"/>
                            <Picker.Item label="Koç" value="Koç"/>
                            <Picker.Item label="Boğa" value="Boğa"/>
                            <Picker.Item label="İkizler" value="İkizler"/>
                            <Picker.Item label="Yengeç" value="Yengeç"/>
                            <Picker.Item label="Aslan" value="Aslan"/>
                            <Picker.Item label="Başak" value="Başak "/>
                            <Picker.Item label="Terazi" value="Terazi"/>
                            <Picker.Item label="Akrep" value="Akrep"/>
                            <Picker.Item label="Yay" value="Yay"/>
                            <Picker.Item label="Oğlak" value="Oğlak"/>
                            <Picker.Item label="Kova" value="Kova"/>
                            <Picker.Item label="Balık" value="Balık"/>

                        </Picker>

                        <Text style={[styles.title]}> Cinsiyet </Text>
                        <Picker
                            selectedValue={this.state.cins}
                            style={styles.detaycer}
                            onValueChange={(itemValue) => this.onChangeText(itemValue, "cins")}
                        >
                            <Picker.Item label="Seçiniz" value="Seçiniz"/>
                            <Picker.Item label="Kadın" value="Kadın"/>
                            <Picker.Item label="Erkek" value="Erkek"/>
                            <Picker.Item label="Belirtmek İstemiyorum" value="Belirtmek İStemiyorum"/>

                        </Picker>

                        <Text style={[styles.title]}> Mesleğiniz </Text>
                        <TextInput style={[styles.detaycer]}
                                   value={this.state.meslek}
                                   onChangeText={text => this.onChangeText(text, "meslek")}
                        />


                        <Text style={[styles.title]}> Yaşadığınız Ülke </Text>
                        <TextInput style={[styles.detaycer]}
                                   value={this.state.ulke}
                                   onChangeText={text => this.onChangeText(text, "ulke")}
                        />

                        <Text style={[styles.title]}> E-posta adresiniz</Text>
                        <TextInput style={[styles.detaycer]}
                                   textContentType={'emailAddress'}
                                   value={this.state.eposta}
                                   keyboardType={'email-address'}

                                   onChangeText={text => this.onChangeText(text, "eposta")}
                        />

                        <Text style={[styles.title]}> Parolanız</Text>
                        <TextInput style={[styles.detaycer]}

                                   value={this.state.pass}
                                   autoCompleteType={'password'}
                                   secureTextEntry={true}
                                   onChangeText={text => this.onChangeText(text, "pass")}
                        />


                        <TouchableOpacity style={[styles.button]} onPress={() => this.gonder()}>
                            <Text>Kaydet</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </Modal>


            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },
    formContent: {
        flexDirection: 'row',
        marginTop: 30,
    },
    title: {
        fontSize: 16,
        paddingLeft: 10,
        color: "#82258b",
        fontWeight: 'bold'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconBtnSearch: {
        alignSelf: 'center'
    },
    detaycer: {
        borderRadius: 5,
        padding: 10,

        margin: 15,
        backgroundColor: 'rgba(52,52,52,0.1)',
    },
    detay: {
        textAlignVertical: 'top',
        color: "#fff",
        width: "100%",
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    notificationList: {
        marginTop: 20,
        padding: 10,
        height: "100%",
    },
    card: {
        height: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        borderRadius: 15,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        flexDirection: 'column',
        borderTopWidth: 40,
        marginBottom: 20,
    },
    cardContent: {
        borderRadius: 15,
        flexDirection: 'row',
        marginLeft: 10,
    },
    imageContent: {
        marginTop: -40,
    },
    tagsContent: {
        marginTop: 10,
        flexWrap: 'wrap'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center'
    },
    btnColor: {
        padding: 10,
        borderRadius: 40,
        marginHorizontal: 3,
        backgroundColor: "#eee",
        marginTop: 5,
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

