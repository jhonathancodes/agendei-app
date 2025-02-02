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
        elevation: 3, // Se for Android, isso adiciona uma sombra
    },
    theme: {
        todayTextColor: COLORS.red,               // Cor do texto de hoje
        selectedDayBackgroundColor: COLORS.blue,  // Cor de fundo do dia selecionado
        selectedDayTextColor: COLORS.white,       // Cor do texto do dia selecionado
        arrowColor: COLORS.blue,                  // Cor das setas de navegação
        monthTextColor: COLORS.gray1,             // Cor do texto do mês
        dayTextColor: COLORS.gray3,               // Cor do texto dos dias
        textDayFontSize: FONT_SIZE.md,            // Tamanho da fonte dos dias
        textMonthFontSize: FONT_SIZE.lg,          // Tamanho da fonte do mês
        textDayHeaderFontSize: FONT_SIZE.sm,      // Tamanho da fonte do cabeçalho dos dias
        todayBackgroundColor: COLORS.white,       // Cor de fundo de "Hoje"
        todayTextColor: COLORS.red,               // Cor do texto de "Hoje"
    },

    textHour: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.gray2,
        marginTop: 20,
    }
};
