import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, enabled } from 'react-native';

export default function App() {
  let [n, setN]= useState(0);
  let cars = [
    {
      color: 'purple',
      type: 'minivan',
      registration: '2017-01-03',
      capacity: 7,
    },
    {
      color: 'red',
      type: 'station wagon',
      registration: '2018-03-03',
      capacity: 5,
    },
    {
      color: 'blue',
      type: 'hatchback',
      registration: '2019-07-03',
      capacity: 4,
    },
    {
      color: 'green',
      type: 'sedan',
      registration: '2012-11-03',
      capacity: 4,
    },
    {
      color: 'black',
      type: 'SUV',
      registration: '2020-01-03',
      capacity: 7,
    },
  ];

  let agla = () => {
    n===4 ? setN(n=4): setN(n=n+1)
  };
  let pichla = () => {
    n===0 ? setN(n=0): setN(n=n-1)
  };

  return (
    <View style={styles.container}>
      <View style={styles.roll}>
        <Text style={styles.rolltext}>ZAKS</Text>
        <Text style={styles.rolltext}>SP18-BCS-016</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.btnP} onPress={pichla}>
          <Text style={styles.alfaaz}>prev</Text>
        </TouchableOpacity>
        <Text style={styles.dcn}>Showing {n+1} of 5</Text>
        <TouchableOpacity style={styles.btnN} onPress={agla}>
          <Text style={styles.alfaaz}>next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item}>
        <View style={styles.columnize}>
          <Text style={styles.car}>Color:</Text>
          <Text style={styles.car}>{cars[n].color}</Text>
        </View>
        
        <View style={styles.columnize}>
          <Text style={styles.car}>Type:</Text>
          <Text style={styles.car}>{cars[n].type}</Text>
        </View>
        
        <View style={styles.columnize}>
          <Text style={styles.car}>Registration:</Text>
          <Text style={styles.car}>{cars[n].registration}</Text>
        </View>
        
        <View style={styles.columnize}>
          <Text style={styles.car}>Capaity:</Text>
          <Text style={styles.car}>{cars[n].capacity}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // padding:3,
  },
  menu: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // padding:3
  },
  alfaaz: {
    color: 'green',
  },
  btnP: {
    borderColor: 'green',
    borderWidth: 3,
    padding: 7,
    borderRightWidth: 0,
    // color:'white',
    // backgroundColor:'white',
  },
  btnN: {
    borderColor: 'green',
    borderWidth: 3,
    padding: 7,
    borderLeftWidth: 0,
    // color:'white',
    // backgroundColor:'white',
  },
  dcn: {
    borderColor: 'green',
    borderWidth: 3,
    color: 'green',
    padding: 3,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  car:{
    color:'cyan',
    paddingRight:21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
  },
  columnize:{
    flexDirection:'row'
  },
  roll:{
    fontSize:111,
    color:'yellow',
    justifyContent: 'center',
    alignItems:'center',
  },
  rolltext:{
    fontSize:21,
    color:'yellow',
  }
});
