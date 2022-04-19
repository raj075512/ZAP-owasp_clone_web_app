import React, { Children } from "react";
import "./Button.css";
const STYLES=[
    "btn--primary",
    "btn--outline"
]
const SIZES=[
    "btn--medium",
    "btn--large"
]
export const Button=({  children,type,onClick,buttonStyle,buttonSize})=>{
    const cheakButtonStyle=STYLES.includes(buttonStyle)? buttonStyle:STYLES[0]
    const cheakButtonSize =SIZES.includes(buttonSize)? buttonSize:SIZES[0]

   return (
       <button  className={`btn ${cheakButtonStyle} ${cheakButtonSize}`} onClick={onClick} 
       type={type} > {children} </button>
   )
}