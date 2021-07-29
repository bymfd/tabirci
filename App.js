import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mesajlar from "./pages/Mesajlar";
import YeniRuya from "./pages/YeniRuya";
import Profil from "./pages/Profil";



const Tab = createBottomTabNavigator();

export default function App() {

  return (

      <NavigationContainer  >
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#878486',
                style: {
                    backgroundColor: '#633689',
                },
                labelStyle: {
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: 16,
                    paddingBottom:15

                },
                indicatorStyle: {
                    borderBottomColor: '#87B56A',
                    borderBottomWidth: 2,
                },
            }}
            // tabBarOptions={{
            //     activeTintColor: 'tomato',
            //
            //     inactiveTintColor: 'gray',
            // }}
        >
          <Tab.Screen   name="Profil"  component={Profil} />
          <Tab.Screen options={styles.slider} name="Gönder" component={YeniRuya} />
          <Tab.Screen name="Geçmiş" component={Mesajlar} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    tabContainer: {
        height: 60,
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4.0,
        backgroundColor: "purple",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 10,
        position: "absolute",
        bottom: 0,
    },
    slider: {
        height: 5,
        position: "absolute",
        top: 0,
        left: 10,
        backgroundColor: "#e80505",
        borderRadius: 10,
        width: 50
    },




})
