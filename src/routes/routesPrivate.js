import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from "../screens/services/services.jsx";
import Main from "../screens/main/main.jsx";
import Schedule from "../screens/schedule/schedule.jsx";
import {COLORS} from "../constants/theme.js";


const Stack = createNativeStackNavigator();

function RoutesPrivate() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="main" component={Main}
                options={{
                    headerShown: false
                }} />

            <Stack.Screen name="services" component={Services}
                options={{
                    headerTitle: "Serviços",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: COLORS.white,
                    headerStyle:{
                        backgroundColor: COLORS.blue,
                    },
                    headerBackTitle: "Voltar",
                }} />

            <Stack.Screen name="schedule" component={Schedule}
                options={{
                    headerTitle: "Fazer um Agendamento",
                    headerTitleAlign: "center",
                    headerShadowVisible: false,
                    headerTintColor: COLORS.blue,
                    headerBackTitle: "Voltar",
                }} />


        </Stack.Navigator>
    );
}

export default RoutesPrivate;
