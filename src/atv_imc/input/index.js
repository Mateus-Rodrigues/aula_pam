import { Text, TextInput, View} from "react-native";
import styles from "./styles.js";


export default function Input () {
    return (
        <View>
            <Text>ola</Text>
            <TextInput style={styles.input} placeholder="Peso"/>

            <TextInput style={styles.input} placeholder="Altura"/>
        </View>
    );
}
