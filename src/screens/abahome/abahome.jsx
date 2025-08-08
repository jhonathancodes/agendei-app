import { Alert, FlatList, Text, View, Linking } from "react-native";
import { styles } from "./abahome.style.js";
import Doctor from "../../components/doctor/doctor.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";
import Button from "../../components/button/button.jsx";

function AbaHome(props) {
    const [doctors, setDoctors] = useState([]);

    function ClickDoctor(id_doctor, name, icon) {
        
        props.navigation.navigate("services", {
            id_doctor,
            name,
            icon,  
            doctors  
        });
    }

    async function LoadDoctors() {
        try {
            const response = await api.get("/doctors/");

            if (response.data)
                setDoctors(response.data);
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
        LoadDoctors();
    }, []);

    
    const openStudentNotes = () => {
        const url = "https://portaldoaluno.microlins.com.br/login/";
        Linking.openURL(url).catch(err => Alert.alert("Erro ao abrir o link", err.message));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Agende seu horário!</Text>

            <FlatList
                data={doctors}
                keyExtractor={(doc) => doc.id_doctor.toString()} 
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                   
                    return (
                        <Doctor
                            id_doctor={item.id_doctor}
                            name={item.name}  
                            icon={item.gender === "female" ? "female" : "male"}  
                            onPress={ClickDoctor}
                        />
                    );
                }}
            />

            
            <View style={styles.logoutContainer}>
                <Button
                    text="Acesse aqui as notas do aluno"
                    theme="primary" 
                    onPress={openStudentNotes}  
                />
            </View>
        </View>
    );
}

export default AbaHome;
