import { memo } from "react";
import colorStyle from "../../assets/css/color";
import variableStyle from "../../assets/css/variable"
const GlobalCss = ()=>{
    variableStyle();
    colorStyle();
    return null;
};
export default memo(GlobalCss);