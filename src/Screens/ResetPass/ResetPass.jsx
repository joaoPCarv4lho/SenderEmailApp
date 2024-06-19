import { View } from "react-native";
import { useState } from "react";
import { Button, Icon, Surface, TextInput } from "react-native-paper";
import axios from "axios";


export default function ResetPass() {
    const [email, setEmail] = useState("");
    return (
        <Surface>
            <View>
                <Icon source="account" size={100} />

                <TextInput
                    label="E-mail:"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu e-mail "
                />

                <View>
                    <Button mode="contained" onPress={handleReset}>
                        Enviar
                    </Button>
                </View>
            </View>
        </Surface>
    )
}