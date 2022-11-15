import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PesquisaScreen from "../screens/pesquisa"
import RetiradaScreen from "../screens/retirada"
import { Component } from "react/cjs/react.production.min";


const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Retirada" component={RetiradaScreen}></Tab.Screen>
                    <Tab.Screen name="Pesquisa" component={PesquisaScreen}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}