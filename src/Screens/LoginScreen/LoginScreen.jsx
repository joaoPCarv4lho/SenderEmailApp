import { View } from "react-native";
import { useState } from "react";
import { Button, Icon, Surface, TextInput } from "react-native-paper";


export default function Login({navigation}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <Surface>
            <View>
                <Icon />

                <TextInput
                label="E-mail:" 
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu email"
                />
                <TextInput 
                label="Senha:"
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                />

                <View>
                    <Button mode="text" onPress={()=> navigation.navigate("ResetPass")}>
                        Esqueci minha senha
                    </Button>
                    <Button mode="outlined" onPress={handleLogin}>
                        Fazer Login
                    </Button>
                    <Button mode="contained" onPress={()=>navigation.navigate("Register")}>
                        Fazer Cadastro
                    </Button>
                </View>
            </View>
        </Surface>
    )
}