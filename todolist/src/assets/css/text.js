import { makeStyles } from "@mui/styles";

const textStyle = makeStyles(() => ({
  "@global": {
    ".text-normal":{
      fontSize:'16px',
      fontWeight:"600!important",
      textTransform:'uppercase',
      color:'var(--primary-light)!important',
      paddingBottom: "10px!important"
    },
    ".text-normal-title":{
      fontSize:"30px",
      fontWeight:"600!important",
      textTransform:'uppercase',
    },
    ".text-upercase": {textTransform:'uppercase'},
    ".text-primary": { color: "var(--mscb-primary)" },
    ".text-secondary": { color: "var(--mscb-secondary)" },
    ".text-success": { color: "var(--mscb-success)" },
    ".text-info": { color: "var(--mscb-info)" },
    ".text-danger,.text-error": { color: "var(--mscb-danger)" },
    ".text-warning": { color: "var(--mscb-warning)" },
    ".text-white": { color: "#fff" },
    ".text-gray": { color: "var(--mscb-gray)" },
    ".text-black": { color: "var(--mscb-black)" },
    ".text-yellow": { color: "var(--mscb-yellow)" },
    ".text-pink": { color: "var(--mscb-pink)" },
    ".text-upper": { textTransform: "uppercase" },
    ".text-lower": { textTransform: "lowercase" },
    ".text-center": { textAlign: "center" },
    ".text-left": { textAlign: "left" },
    ".text-right": { textAlign: "right" },
    '.text-decor': { textDecoration: 'underline' },
    '.text-11': { fontSize: '11px!important' },
    '.text-12': { fontSize: '12px!important' },
    '.text-13': { fontSize: '13px!important' },
    '.text-14': { fontSize: '14px!important' },
    '.text-15': { fontSize: '15px!important' },
    '.text-16': { fontSize: '16px!important' },
    '.text-18': { fontSize: '18px!important' },
    '.text-20': { fontSize: '20px!important' },
    '.text-22': { fontSize: '22px!important' },
    '.text-24': { fontSize: '24px!important' },
    '.text-28': { fontSize: '28px!important' },
    '.text-30': { fontSize: '30px!important' },
    '.text-32': { fontSize: '32px!important' },
    '.text-36': { fontSize: '36px!important' },
    '.text-40': { fontSize: '40px!important' },
    '.text-44': { fontSize: '44px!important' },
    '.text-48': { fontSize: '48px!important' },
    '.text-54': { fontSize: '54px!important' },
    '.text-58': { fontSize: '58px!important' },
    '.text-62': { fontSize: '62px!important' },
    '.text-72': { fontSize: '72px!important' },
    '.text-small': { fontSize: '0.8125rem!important' },
    '.float-right': {
      display:'inline-block',
      float:'right',
      paddingTop:20
    }
  }
})) ;

export default textStyle;