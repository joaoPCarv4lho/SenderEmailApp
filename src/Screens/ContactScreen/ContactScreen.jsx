import { Image, Platform, Button, TextInput, View } from "react-native";
import { useState } from "react";
import axios from 'axios';
import { Icon, Surface } from "react-native-paper";
import { styles } from "../../configs/styles";


export default function HomeScreen(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const sendEmailContact = async () => {
        const dados = {
            name: name,
            email: email,
            message: message
        };

        axios.post('http://localhost:8080/send-email-contact', dados)
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return(
        <Surface style={styles.container}>
            <View style={styles.container_inner}>
                <Icon source="account" size={100} />

                <TextInput 
                label="Nome:"
                style={styles.input}
                onChangeText={setName} />
            </View>
        </Surface>
    )
}