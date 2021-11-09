import { memo } from "react";
import btnStyle from "../../assets/css/btn";
import colorStyle from "../../assets/css/color";
import spacingStyle from "../../assets/css/spacing";
import textStyle from "../../assets/css/text";
import variableStyle from "../../assets/css/variable"
const GlobalCss = ()=>{
    btnStyle();
    spacingStyle();
    textStyle();
    variableStyle();
    colorStyle();
    return null;
};
export default memo(GlobalCss);