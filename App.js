import { useState } from 'react';
import { StyleSheet,ImageBackground,SafeAreaView }from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickerNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }


  let screen =  <StartGameScreen  onPickNumber={pickerNumberHandler}/>;
  if (userNumber){
    screen = <GameScreen userNumber={userNumber}/>;
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
 