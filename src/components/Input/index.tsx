import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Container } from "./styles";


interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label: string;
  
}

export function Input({ name, label , ...rest }: Props) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);
  return (
   <Container checkbox={{...rest}.type === 'checkbox'}>
    
       {label && (
        <label htmlFor={fieldName}>{label}: </label>
      )}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      {error && <span>{error}</span>}
    </Container>
  );
}