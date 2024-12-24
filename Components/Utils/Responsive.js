
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const rS = (size) => {
    return scale(size)
}

export const rV = (size) => {
    return verticalScale(size)
}

export const rMS = (size, factor) => {
    if (factor === undefined) {
        return moderateScale(size)
    }
    return moderateScale(size, f)
}
//wd - scale
//height  - vs
//mrgin fn modernscale