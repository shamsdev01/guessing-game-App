import { View,Image,StyleSheet,Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver ({roundsNumber, userNumber, onStartNewGame}) {
    return ( 
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style = {styles.imageContainer}>
                <Image
                 source= {require('../assets/images/success.png')} 
                 style = {styles.image} /> 
            </View>
             <View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
             </View>
             <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>  
    )
}

export default GameOver;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer:{
        width: 300,
        height:300,
        borderRadius: 150,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image:{
        width:'100%', 
        height:'100%',
    },
    summaryText:{
        fontFamily: 'open-sans',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight:{
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    }

})