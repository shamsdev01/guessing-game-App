import {View,Text,  StyleSheet, Pressable} from 'react-native';
 import Colors from '../../constants/colors';

function PrimaryButton({children, onPress}) {

    return (
        <View style={styles.OuterContainer}>
       <Pressable 
       onPress={onPress} 
       android_ripple={{color: Colors.primary600} } 
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
        backgroundColor : Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },

    text:{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'open-sans',


    },
    pressed: {
        opacity: 0.75,
    }

});