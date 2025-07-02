import {View,Text,  StyleSheet, Pressable} from 'react-native';


function PrimaryButton({children}) {
    function pressHandler(){
        console.log('Pressed!');
    }
    return (
        <View style={styles.OuterContainer}>
       <Pressable 
       onPress={pressHandler} 
       android_ripple={{color: '#640233'} } 
       style={({pressed}) => pressed ? [styles.InnerContainer, styles.pressed] :  styles.InnerContainer}
       >
            <Text style={styles.text}>{children}</Text>
       </Pressable>
        </View>
    )
}

export default PrimaryButton;


const styles = StyleSheet.create({
    OuterContainer: {
          borderRadius: 28,
          margin:4,
          overflow: 'hidden',
    },
    InnerContainer :{
        backgroundColor : '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },

    text:{
        color: 'white',
        textAlign: 'center',


    },
    pressed: {
        opacity: 0.75,
    }

});