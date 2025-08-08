import { Text, View } from "react-native";
import { styles } from "./service.style.js";
import Button from "../../components/button/button.jsx";

function Service(props) {
    return (
        <View style={styles.service}>
            <View style={styles.containerText}>
                <Text style={styles.description}>{props.description}</Text> 
            </View>

            <View style={styles.containerButton}>
                <Button text="Agendar" onPress={() => props.onPress(props.id_service)} />
            </View>
        </View>
    );
}

export default Service;
