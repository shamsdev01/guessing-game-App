import { SafeAreaView, StyleSheet,Text } from "react-native";



function Title ({children}) {
    return (
        <SafeAreaView>
            <Text style={styles.title}>{children}</Text>
        </SafeAreaView>


    )
    
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color:'white', 
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,

    }
});