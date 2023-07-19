import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Formulario = ({moneda, setMoneda, criptomoneda,setCriptomoneda,setIsValid}) => {

  const [criptomonedas, setCriptomonedas] = useState([])
  //obtener datos
  const obtenerMoneda = (monedaSelect)=>{
    setMoneda(monedaSelect)
  };
  const obtenerCripto = (cipto)=>{
      setCriptomoneda(cipto)
  }

  useEffect(()=>{
    const getData = async ()=>{
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const res = await axios.get(url)
      setCriptomonedas(res.data.Data)
    }
    getData()
  },[])

  const consultar = ()=>{
    if(moneda.trim() === '', criptomoneda.trim() === ''){
      mostrarAlerta()
      return
    };
    setIsValid(true)
    //consultar 
  }

  const mostrarAlerta = ()=>{
      Alert.alert('Error', 'Los valores seleccionados no son válidos')
  }
  return (
    <View>
        <Text style={styles.label}>Moneda</Text>
        <Picker selectedValue={moneda} onValueChange={(moneda)=> obtenerMoneda(moneda)}>
          <Picker.Item label='--seleccione--' value=''/> 
          <Picker.Item label='dolar' value='USD'/>
          <Picker.Item label='peso ' value='MXN'/>
          <Picker.Item label='euro' value='EURO'/>
          <Picker.Item label='libra' value='GBP'/>
        </Picker>

        <Text style={styles.label}>Criptomonedas</Text>
        <Picker selectedValue={criptomoneda} onValueChange={(cripto)=> obtenerCripto(cripto)}>
        <Picker.Item label='--seleccione--' value=''/> 
            {criptomonedas.map(cripto=>(
              <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name}/>
            ))}
        </Picker>

        <TouchableOpacity style={styles.botonCotizar}
        onPress={()=> consultar()}>
          <Text style={styles.botonTexto}>Cotizar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  label :{
    fontFamily  : 'Lato-black',
    textAlign : 'center',
    textTransform : 'uppercase',
    fontWeight : 'bold',
    fontSize : 20,
    color : 'black'
  },
  botonCotizar :{
    backgroundColor : '#5e49e2',
    marginHorizontal : 30,
    paddingVertical : 10,
    borderRadius : 10,
    marginTop : 20
  },
  botonTexto :{
    color : '#fff',
    textAlign : 'center',
    fontSize : 19,
    fontWeight : 'bold'
  }
})
export default Formulario