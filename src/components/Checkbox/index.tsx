import React, { useEffect, useRef, InputHTMLAttributes, useState } from 'react'
import { useField } from "@unform/core";
import { Container } from "../Input/styles";


interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  checked?: boolean; 
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

export function CheckBox({ name, label,value, ...rest }: Props) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = false, error } = useField(
    name
  );

    useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "checked",
  
    });
  }, [fieldName, registerField]);

   
  return (
   <Container checkbox={true}>
      <input
        type="checkbox"
        ref={inputRef}
        id={fieldName}
        {...rest}
      />
    </Container>
  );
}