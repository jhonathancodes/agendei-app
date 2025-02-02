import { Alert, FlatList, Text, View, Image } from "react-native";
import { styles } from "./services.style.js";
import icon from "../../constants/icon.js"; 
import Service from "../../components/service/service.jsx";
import api from "../../constants/api.js";
import { useEffect, useState } from "react";

function Services(props) {

    const { id_doctor, name, icone, doctors } = props.route.params;  // Agora você tem os médicos disponíveis aqui

    // Encontrar o médico usando o id_doctor
    const doctor = doctors.find(doc => doc.id_doctor === id_doctor);  // Procurando o médico na lista de doctors

    // Verifica o gênero para renderizar o ícone correto
    const doctorIcon = doctor && doctor.gender === 'female' ? icon.female : icon.male;

    const [doctorsServices, SetDoctorServices] = useState([]);

    function ClickService(id_service) {
        props.navigation.navigate("schedule", {
            id_doctor,
            id_service
        });
    }

    async function LoadServices() {
        try {
            const response = await api.get("/doctors/" + id_doctor + "/services");

            if (response.data) 
                SetDoctorServices(response.data);

        } catch (error) {

            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);  
            } else {
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
            }
            console.error(error);  
        }
    }

    useEffect(() => {
        LoadServices();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                {/* Renderiza o ícone correto com base no gênero do médico */}
                <Image source={doctorIcon} style={styles.icon} />
                <Text style={styles.name}>{name}</Text>
            </View>

            <FlatList 
                data={doctorsServices}
                keyExtractor={(serv) => serv.id_service.toString()} 
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Service id_service={item.id_service} description={item.description} onPress={ClickService} />
                )}
            />
        </View>
    );
}

export default Services;
