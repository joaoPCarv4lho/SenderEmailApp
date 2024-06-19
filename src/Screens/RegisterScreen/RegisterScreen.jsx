import { Button, Icon, Surface, Text, TextInput } from "react-native-paper";
import { View } from "react-native";
import { useState } from "react";

export default function Register({navigation}){
    const [email, setEmail] = useState(""); 
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [hidePass, setHidePass] = useState(true);

    return(
        <Surface>
            <View>
                <Icon source="account-check" size={100} />
                <Text>Tela de Cadastro</Text>
                <TextInput 
                label="E=mail"
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                />

                <TextInput 
                label="Password"
                value={pass}
                onChangeText={setPass}
                placeholder="Digite sua senha"
                secureTextEntry={hidePass}
                right={
                    <TextInput.Icon 
                    name={hidePass ? "eye" : "eye-off"} 
                    onPress={()=> setHidePass(!hidePass)} />
                }/>

                <TextInput 
                label="Confirm Password"
                value={confirmPass}
                onChangeText={setConfirmPass}
                placeholder="Confirme sua senha"
                secureTextEntry={hidePass}
                right={
                    <TextInput.Icon
                    source="eye"
                    onPress={()=> setHidePass(false)} />
                }/>

                <Button mode="text" onPress={handleRegister}>
                    Cadastrar-se
                </Button>
                <Button mode="text" onPress={()=> navigation.navigate("Login")}>
                    Voltar para tela de Login
                </Button>
            </View>
        </Surface>
    );
}