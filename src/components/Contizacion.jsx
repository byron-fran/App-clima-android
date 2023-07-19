import React from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
const Contizacion = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = resultado

    if(Object.keys(resultado).length=== 0) return null;
  return (
    <View style={styles.resultado}>
        <Text style={styles.texto}>
          <Text style={[styles.span, styles.price]}>{PRICE}</Text>
        </Text>
        <Text style={styles.texto}>El precio más alto es: {' '}
          <Text style={styles.span}> {HIGHDAY}</Text>
        </Text>
        <Text style={styles.texto}>El precio más bajo es: {' '}
          <Text style={styles.span}>{LOWDAY}</Text>
        </Text>
        <Text style={styles.texto}> Variación en 24 horas es: {' '}
          <Text style={styles.span}>{CHANGEPCT24HOUR} %</Text>
        </Text>
        <Text style={styles.texto}>última actualización: {' '} 
          <Text style={styles.span}>{LASTUPDATE}</Text>
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultado:{
    backgroundColor : '#5e49e2',
    padding : 10,
    height : 300
    
  },
  price :{
 
    fontSize : 30,

  },
  texto :{
    color : '#fff',

  },
  span:{
    color : '#fff',
    fontWeight : 'bold',
    
  }
})

export default Contizacion