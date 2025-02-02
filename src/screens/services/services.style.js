import {COLORS, FONT_SIZE} from "../../constants/theme.js";


export const styles = {
    container:{
        backgroundColor: COLORS.white,
        flex: 1,
    },

    banner:{
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 25,
    },

    icone:{
        height: 90,
        width: 90,
    },

    name:{
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 5,
    },

   
}