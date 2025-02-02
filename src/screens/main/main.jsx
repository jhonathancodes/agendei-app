
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from "../../constants/icon.js";
import AbaHome from "../abahome/abahome.jsx";
import AbaCalendar from "../abacalendar/abacalendar.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";
import { Image, Text } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

const Tab = createBottomTabNavigator();

function Main() {
    return (
            <Tab.Navigator>
                <Tab.Screen 
                    name="Home" 
                    component={AbaHome} 
                    options={{
                        headerTitleAlign: "center",
                        headerTitle: () => {
                            return <Image source={icon.logo} style={{ width: 125, height: 29, marginBottom: 15 }} />
                        },
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => {
                            return <Image source={icon.home} style={{ width: 35, height: 35, opacity: focused ? 1 : 0.3 }} />
                        }
                    }} 
                />
                <Tab.Screen 
                    name="Calendar" 
                    component={AbaCalendar} 
                    options={{
                        headerTitleAlign: "center",
                        headerTitle: () => {
                            return <Text style={{fontWeight: "bold", color: COLORS.blue, fontSize: FONT_SIZE.lg }}>
                                Meus Agendamentos
                            </Text>
                        },
                        tabBarShowLabel: false,
                        unmountOnBlur: true,
                        tabBarIcon: ({ focused }) => {
                            return <Image source={icon.calendar} style={{ width: 35, height: 35, opacity: focused ? 1 : 0.3 }} />
                        }
                    }} 
                />
                <Tab.Screen 
                    name="Profile" 
                    component={AbaProfile} 
                    options={{
                        headerTitleAlign: "center",
                        headerTitle: () => {
                            return <Text style={{fontWeight: "bold", color: COLORS.blue, fontSize: FONT_SIZE.lg }}>
                                Perfil
                            </Text>
                        },
                        tabBarShowLabel: false,
                        unmountOnBlur: true,
                        tabBarIcon: ({ focused }) => {
                            return <Image source={icon.profile} style={{ width: 35, height: 35, opacity: focused ? 1 : 0.3 }} />
                        }
                    }} 
                />
            </Tab.Navigator>
    );
}

export default Main;