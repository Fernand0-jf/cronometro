import React , {useState} from "react";
import {View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

let timer = null;
let ss=0;
let mm=0;
let hh=0;

export default function App(){
  const [numero, setNumero] = useState('00:00:00');
  const [botao,setBotao] = useState('INICIAR');
  const [ultimo,setUltimo] = useState(null);
  function iniciar(){
    //Parar o timer
    if(timer !== null){

      clearInterval(timer);
      timer = null;
      setBotao('INICIAR')

    }else{
      //iniciar o timer
      timer = setInterval(() => {
          ss++;
          if (ss === 60) {
              ss = 0;
              mm++;
          }
          if (mm === 60) {
              mm = 0;
              hh++;
          }
      
          let format = (hh < 10 ? '0' + hh : hh) + ':' + 
                      (mm < 10 ? '0' + mm : mm) + ':' + 
                      (ss < 10 ? '0' + ss : ss);
          setNumero(format);
      }, 1000);


      setBotao('Parar');
    }
    
  }

  function limpar(){
    if(timer!==null){
      iniciar()
    }
    setUltimo(numero);
    setNumero('00:00:00');
    ss=0;
    mm=0;
    hh=0;
  }
  


  return(
    <View style={styles.container}>
      
      <Image
      source={require('./src/crono.png')}
      />

      <Text style={styles.timer}>{numero}</Text>

    <View style={styles.btnArea}>
       <TouchableOpacity style={styles.btn} onPress={iniciar}>
           <Text style={styles.btnTexto}>{botao}</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={limpar}>
           <Text style={styles.btnTexto}>LIMPAR</Text>
       </TouchableOpacity>
    </View>
      <View style={styles.ultimaArea}>

          <Text style={styles.textoCorrida}>{ultimo ? 'Ultimo Tempo: ' + ultimo:''}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1C1C1C'
  },
  timer:{
    color:'#FFF',
    marginTop:-160,
    fontSize:45,
    fontWeight:'bold'
  },
  btn:{
    
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF',
    height:40,
    margin:17,
    borderRadius:15
  },
  btnArea:{
    flexDirection:'row',
    marginTop:130,
    height:40
    
  },
  btnTexto:{
    color:'#1C1C1C',
    fontSize:20,
    fontWeight:'bold'
  },
  ultimaArea:{
    marginTop:40
  },
  textoCorrida:{
    fontSize:25,
    color:'#FFF',
    fontStyle:'italic'
  }

});