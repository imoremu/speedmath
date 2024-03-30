import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();


const useStyles = () => {
    const scheme = useColorScheme();
  
    return StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: scheme === 'dark' ? '#333' : '#f0f0f0',
      },
      title: {
        fontSize: 30,
        marginBottom: 20,
        color: scheme === 'dark' ? '#fff' : '#333',
      },
      menuButton: {
        backgroundColor: scheme === 'dark' ? '#555' : '#ff7f50',
        padding: 15,
        borderRadius: 5,
        margin: 10,
      },
      modeButton: {
        backgroundColor: scheme === 'dark' ? '#555' : '#ff7f50',
        padding: 15,
        borderRadius: 5,
        margin: 10,
      },buttonText: {
        color: scheme === 'dark' ? '#ddd' : '#fff',
        fontSize: 18,
      },
      // Cualquier otro estilo que necesites
    });
  };

const App = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LevelSelection" component={LevelSelectionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

const HomeScreen = ({ navigation }) => {

    const styles = useStyles();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Matemágicas</Text>
            {['Sumas', 'Restas', 'Multiplicaciones', 'Divisiones', 'Combo'].map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuButton} onPress={() => navigation.navigate('LevelSelection', { operation: item })}>
                    <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Records')}>
                <Text style={styles.buttonText}>Records</Text>
            </TouchableOpacity>
        </View>
    );
};

const LevelSelectionScreen = ({ route, navigation }) => {
    const { operation } = route.params;
    const [mode, setMode] = useState('Exacto'); // Modo por defecto

    const styles = useStyles();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`Selecciona el nivel para ${operation}`}</Text>
            {['1', '2', '3'].map((level, index) => (
                <TouchableOpacity key={index} style={styles.menuButton} onPress={() => {/* Aquí la lógica para seleccionar el nivel y el modo */}}>
                    <Text style={styles.buttonText}>{`Nivel ${level}`}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.modeButton} onPress={() => setMode(mode === 'Exacto' ? 'Aproximación' : 'Exacto')}>
                <Text style={styles.buttonText}>{`Modo: ${mode}`}</Text>
            </TouchableOpacity>
        </View>
    );
};


export default App;