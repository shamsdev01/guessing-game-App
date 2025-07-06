import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import Title from '../components/ui/Title';



function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen ({userNumber}) {
    const initialGuess = generateRandomBetween(1,100, userNumber )
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return(
        <SafeAreaView style={styles.screen}>
        <View style={styles.screen}>
            <Title>Opponet's Guess</Title>
            <View>
                <Text>Higher or Lower ?</Text>
                {/* + - */}
            </View>
            {/* <View>LOG ROunds</View> */}
        </View>
        </SafeAreaView>
        
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 24,
      
    },


})