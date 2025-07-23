import { useState } from 'react';
import { StyleSheet,ImageBackground,SafeAreaView }from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver'; 
import Colors from './constants/colors';



export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

   const  [fontsLoaded]  =   useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (!fontsLoaded){
    return(
      <AppLoading />
    )
  }

  function pickerNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds){
      setRoundsNumber(numberOfRounds);
      setGameIsOver(true);
  }

  function startNewGameHandler(){
    setRoundsNumber(0);
    setUserNumber(null);
    setGameIsOver(true);
  }

  let screen =  <StartGameScreen  onPickNumber={pickerNumberHandler}/>;
  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
if (gameIsOver && userNumber){
    screen = <GameOver userNumber={userNumber} roundsNumber={roundsNumber} onStartNewGame={startNewGameHandler}/>;
  }



  return (
    <LinearGradient   colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
    <ImageBackground
    source={require('./assets/images/background.png')}
    resizeMode="cover"
    style={styles.container}
    imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
             {screen}
      </SafeAreaView>  
  
    </ImageBackground>
    </LinearGradient>
  );    
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.15,
  }
});
 