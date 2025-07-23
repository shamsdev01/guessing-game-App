import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";


function NumberContainer({children}) {
    return(
        <View style={styles.conatiner}>
        <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;


const styles = StyleSheet.create({
    conatiner:{
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',  
        justifyContent: 'center',
    },
    numberText:{
        fontFamily: 'open-sans-bold',   
        color: Colors.accent500,
        fontSize: 36,
        // fontWeight: 'bold',
    }

})
