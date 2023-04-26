import React from "react";
import styled from "styled-components";

interface ButtonProps{
    children: string;
    onClick: () => void;
}
const btnStyle = {
	color: "white",
	background: "teal",
	padding: ".375rem .75rem",
	border: "1px solid teal",
	borderRadius: ".25rem",
	fontSize: "1rem",
	lineHeight: 1.5,
	cursor: "pointer",
 };
const Button = ({children, onClick} : ButtonProps) => {
    return <button style={btnStyle} onClick={onClick} >{children}</button>;
}
export default Button;

