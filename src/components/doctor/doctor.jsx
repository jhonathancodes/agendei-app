import { Image, TouchableOpacity, View, Text } from "react-native";
import { styles } from "./doctor.style.js"; // Estilos
import icon from "../../constants/icon.js";  // Certifique-se de que seus ícones estejam corretamente definidos

function Doctor(props) {
    return (
        <TouchableOpacity 
            style={styles.doctor} 
            onPress={() => props.onPress(props.id_doctor, props.name, props.icon)} 
        >
            <Image 
                source={props.icon === "female" ? icon.female : icon.male}  // Garantir que props.icon seja 'female' ou 'male'
                style={styles.icon} 
            />
            <View>
                <Text style={styles.name}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Doctor;
