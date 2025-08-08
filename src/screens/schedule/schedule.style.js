// schedule.style.js
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
    },
    calendar: {
        borderRadius: 10,
        marginTop: 20,
        elevation: 3, 
    },
    theme: {
        todayTextColor: COLORS.red,              
        selectedDayBackgroundColor: COLORS.blue, 
        selectedDayTextColor: COLORS.white,       
        arrowColor: COLORS.blue,                 
        monthTextColor: COLORS.gray1,             
        dayTextColor: COLORS.gray3,              
        textDayFontSize: FONT_SIZE.md,            
        textMonthFontSize: FONT_SIZE.lg,          
        textDayHeaderFontSize: FONT_SIZE.sm,      
        todayBackgroundColor: COLORS.white,      
        todayTextColor: COLORS.red,              
    },

    textHour: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.gray2,
        marginTop: 20,
    }
};
