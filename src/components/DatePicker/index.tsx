import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';
import pt_br from "date-fns/locale/pt-BR";
import { useField } from '@unform/core';
import { parseISO, format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './../Input/styles'
import moment from 'moment';
interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
  label?: string;
}

export function DatePicker({ name, label, ...rest }: Props) {
  registerLocale("pt_br", pt_br);
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(defaultValue || null);
  // console.log(date)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      getValue: (ref) => ref.props.selected,
      setValue: (ref, value : string) => {
        if (value) { ref.setSelected(moment(value).toDate()) }
      },
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
    {label && (
        <label htmlFor={fieldName}>{label}: </label>
      )}
    <ReactDatePicker

          ref={datepickerRef}
          selected={date}
          timeInputLabel="Horário"
          onChange={(e: Date)=>setDate(e)}
          dateFormat="MM/dd/yyyy h:mm aa"
          locale="pt_br"
          // isClearable
          // showMonthDropdown
          showTimeInput
          showYearDropdown
          {...rest}
  
    />
    {error && <span>{error}</span>}
   </Container>
  );
};