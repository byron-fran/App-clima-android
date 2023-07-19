import { useState,useEffect } from "react";
import { Text, Vibration, View, Image, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
import Header from "./src/components/Header";
import Formulario from "./src/components/Formulario";
import Contizacion from "./src/components/Contizacion";
import axios from "axios";
const App =()=>{

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [resultado, setResultado] =useState({})
  const [cargando, setCargando] = useState(false)
  useEffect(()=>{
    if(isValid){
      const getApi = async()=>{
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const res = await axios.get(url);
        setCargando(true)

        setTimeout(()=>{
           setResultado(res.data.DISPLAY[criptomoneda][moneda])
          setIsValid(false)
          setCargando(false)
        }, 1000)
       
      }
      getApi()
    }
  },[isValid])

  //mostrar el spninner 
  const componente = cargando ? <ActivityIndicator size='large' color='#5e49e2'/> :   <Contizacion resultado={resultado}/>

  return(
    <View>
        <Header/>
        <Image style={styles.imagen} source={require('./assets/img/cryptomonedas.png')}/>
        <View style={styles.contenido}>
            <Formulario  moneda={moneda}
                        criptomoneda={criptomoneda}
                        setMoneda={setMoneda}
                        setCriptomoneda={setCriptomoneda}
                        setIsValid={setIsValid}/>
        
        </View>
     {componente}
    </View>
  )
}


const styles = StyleSheet.create({
    imagen:{
      width : '100%',
      marginVertical : '4.5%',
      marginVertical : '3.5%',
      height : 120
    },
    contenido :{
      marginVertical : 30
    }
})

export default App;
