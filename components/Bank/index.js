import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar ,Modal, Alert, Pressable, SafeAreaView } from 'react-native';


const CardNumber = ({ number }) => {
  return (
      <Text style={styles.creditCardNumber}>
          {number}
      </Text>
  )
}

const Bank = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      
      <View>
          <Text style = {styles.txt}>Welcome to MYBANK </Text>  
      <View style={styles.balView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Your Account Balance</Text>
              <Text style={styles.modalText}>$45,234</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Account Balance</Text>
        </Pressable>
      </View>
      <View style = {styles.creditCard}>
          <View style = {styles.creditCardContent}>

              <View style = {styles.marginSpacing}>
                <Text style = {styles.creditCardHeading}>Card Number </Text>
              </View>
              <View style={styles.creditCardFooter}>
                            <CardNumber number='****' />
                            <CardNumber number='****' />
                            <CardNumber number='****' />
                            <CardNumber number='1532' />
              </View>
              <View style={styles.marginSpacing}>
                  <Text style={styles.creditCardHeading}>Expiration Date</Text>
              </View>
              <View style = {styles.creditCardFooter}>
              <Text style={styles.creditCardNumber}>11/24</Text>
              </View>
          </View> 
      </View> 
      </View>
          
    );
  };
  
  const styles = StyleSheet.create({
    txt: {
      marginTop: 10,
      color: "black",
      fontSize: 25,
      fontWeight: "bold",
      marginLeft: 20
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
    },
    balView: {
        height: 110,
        backgroundColor: "#7289DA",
        borderRadius: 10,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 22
      
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
      width: 140,
      marginLeft: 110,
      marginTop: 30
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "White",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight: "bold"
    },
    creditCard: {
      flex: 1,
      position: "absolute",
      marginTop: 180,
      width: 350,
      backgroundColor: "#7289DA",
      right: 0,
      top: 50,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
  },
  creditCardContent: {
      flexDirection: "column",
      flex: 1,
      padding: 23,
      marginLeft: 20
  },
  creditCardHeading: {
      fontSize: 16,
      color: "white",
      fontWeight: "500",
  },
  marginSpacing: {
      marginTop: 5,
      marginBottom: 5
  },
  creditCardNumber: {
      fontWeight: 'normal',
      fontSize: 20,
      color: '#AFD7F5',

  },
  creditCardFooter: {
      flexDirection: 'row',
      justifyContent: "space-between"
  },
  scrollView: {
    borderRadius: 20,
    backgroundColor: "#7289DA",
    marginTop: 200,
    flexDirection: "column",
    flex: 1,
    padding: 23,
    marginLeft: 20,
  },
  text: {
    color: "white",
    marginRight: 0,
    marginLeft: 50,
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  });
  
  export default Bank;