import { View, Text, Alert } from "react-native";  
import { styles } from './schedule.style.js';
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";
import api from "../../constants/api.js";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule(props) {

    const id_doctor = props.route.params.id_doctor;
    const id_service = props.route.params.id_service;
    const [selected, setSelect] = useState("");
    const [selectedHour, setSelectedHour] = useState(""); // Estado para selectedHour

    async function ClickBooking() {
        try {
            const response = await api.post("/appointments", {
                id_doctor,
                id_service,
                booking_date: selected,
                booking_hour: selectedHour
            });

            if (response.data?.id_appointment) 
                props.navigation.popToTop();

        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);  
            } else {
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde.");
            }
            console.error(error);  
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Calendar
                    theme={styles.theme}  // Passando o tema para estilizar o calendário
                    style={styles.calendar}  // Estilizando o contêiner do calendário
                    onDayPress={(day) => {
                        setSelect(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true },
                    }}
                    minDate={new Date().toISOString().split('T')[0]} // Corrigindo o formato de data
                />
                <View>
                    <Text style={styles.textHour}>Horário</Text>
                </View>

                <View>
                    <Picker selectedValue={selectedHour}
                        onValueChange={(itemValue, itemIndex) => {
                            setSelectedHour(itemValue); // Corrigindo a nomeação da variável
                        }}>
                        <Picker.Item label="08:30" value="08:30" />
                        <Picker.Item label="09:00" value="09:00" />
                        <Picker.Item label="09:30" value="09:30" />
                        <Picker.Item label="10:00" value="10:00" />
                        <Picker.Item label="11:00" value="11:00" />
                        <Picker.Item label="14:00" value="14:00" />
                        <Picker.Item label="15:00" value="15:00" />
                        <Picker.Item label="16:00" value="16:00" />
                    </Picker>
                </View>
            </View>

            <View>
                <Button text="Confirmar Agendamento" onPress={ClickBooking} />
            </View>
        </View>
    );
}

export default Schedule;
