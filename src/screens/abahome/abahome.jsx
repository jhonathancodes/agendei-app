import { Alert, FlatList, Text, View, Linking } from "react-native";
import { styles } from "./abahome.style.js";
import Doctor from "../../components/doctor/doctor.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";
import Button from "../../components/button/button.jsx"; // Importando o botão

function AbaHome(props) {
    const [doctors, setDoctors] = useState([]);

    function ClickDoctor(id_doctor, name, icon) {
        // Passando a lista completa de médicos para a próxima tela
        props.navigation.navigate("services", {
            id_doctor,
            name,
            icon,  // Passando o 'icon' correto
            doctors  // Passando a lista de médicos para a tela Services
        });
    }

    async function LoadDoctors() {
        try {
            const response = await api.get("/doctors/");

            if (response.data)
                setDoctors(response.data);
        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);  // Mensagem do erro que vem da API
            } else {
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
            }
            console.error(error);  // Log para ajudar no debug
        }
    }

    useEffect(() => {
        LoadDoctors();
    }, []);

    // Função para redirecionar para o link
    const openStudentNotes = () => {
        const url = "https://portaldoaluno.microlins.com.br/login/";
        Linking.openURL(url).catch(err => Alert.alert("Erro ao abrir o link", err.message));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Agende seu horário!</Text>

            <FlatList
                data={doctors}
                keyExtractor={(doc) => doc.id_doctor.toString()} // Garantir que o id seja uma string
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    // Passando o 'gender' corretamente como 'female' ou 'male'
                    return (
                        <Doctor
                            id_doctor={item.id_doctor}
                            name={item.name}  // Passando 'name' corretamente aqui
                            icon={item.gender === "female" ? "female" : "male"}  // Ajuste aqui para garantir que o valor seja "female" ou "male"
                            onPress={ClickDoctor}
                        />
                    );
                }}
            />

            {/* Novo botão para redirecionar para o site */}
            <View style={styles.logoutContainer}>
                <Button
                    text="Acesse aqui as notas do aluno"
                    theme="primary" // Pode escolher o tema desejado
                    onPress={openStudentNotes}  // Função de redirecionamento
                />
            </View>
        </View>
    );
}

export default AbaHome;
