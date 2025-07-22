import { View,Text, SafeAreaView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver (){
    return ( 
        <SafeAreaView>
             <View>
            <Text>Game Over!</Text>
            <Text>Number of Rounds: 0</Text>
            <Text>Number was: 0</Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
        </SafeAreaView>
       
    )
}

export default GameOver;