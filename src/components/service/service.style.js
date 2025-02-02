
import {COLORS, FONT_SIZE} from "../../constants/theme.js";


export const styles = {
    service:{
        backgroundColor: COLORS.white,
        flex: 1,
        flexDirection: "row",
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.gray4
    },
    description:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray3,
        marginTop: 5,
    },

    containerText:{
        flex: 1,
        marginTop: 10,
    },

    containerButton:{
        marginTop: 5,
    },

    specialty:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.white,
        marginTop: 3,
    },
}