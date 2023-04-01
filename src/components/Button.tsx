import React from "react";
import styled from "styled-components";

interface ButtonProps{
    children: string;
    onClick: () => void;
}

const Button = ({children, onClick} : ButtonProps) => {
    return <button onClick={onClick}>{children}</button>;
}
export default Button;

