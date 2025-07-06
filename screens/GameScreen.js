import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView,Alert } from 'react-native'
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';



function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

  let minBoundary = 1;
  let maxBoundary = 100;


 
function GameScreen ({userNumber}) {


    const initialGuess = generateRandomBetween(
      minBoundary,
      maxBoundary, 
      userNumber 
    )

    const [currentGuess, setCurrentGuess] = useState(initialGuess);



  function nextGuessHandler(direction) {
 
    if (
      (direction === 'lower' && currentGuess < userNumber) || 
      (direction === 'greater' && currentGuess > userNumber)
    ){
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ]);  
      return;
    }
  if (direction === 'lower') {
    maxBoundary = currentGuess;
}else{
  minBoundary = currentGuess + 1;
}
      const newRandomNumber = generateRandomBetween( minBoundary,maxBoundary, currentGuess);
      setCurrentGuess(newRandomNumber);

}




    return(
        <SafeAreaView style={styles.screen}>
        <View style={styles.screen}>
            <Title>Opponet's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower ?</Text>
                <View>
                   <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
               
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