import React from 'react'
import {View, Text,StyleSheet, Platform} from 'react-native'
const Header = () => {
  return (
    <View style={styles.header}>
         <Text style={styles.encabezado} >Criptomonedas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header : {
    backgroundColor : '#5e49e2',
    paddingBottom : 20,

  },
    encabezado : {
        paddingTop : Platform.OS === 'ios' ? 30 : 20,
        fontFamily : 'Lato-Black',
        color : '#fff',
        textAlign : 'center',
        fontWeight : 'bold',
        textTransform : 'uppercase',
        fontSize : 20
    }
})

export default Header