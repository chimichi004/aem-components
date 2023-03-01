import React, {useState} from 'react';


import { CustomRadio as Radio, RadioButtonDiv } from './radioButton.styles';
import { RadioButtonBox } from './radioButtonBox';

export const RadioButton = () => {
    const [titlePrimary, setTitlePrimary] = useState<string>('Ready-made');
    const [textDescription, setTextDescription] = useState<string>('professionally constructed multi-sector investment options');
    const [name, setName] = useState<string>('investmentStrategy');
    const [value, setValue] = useState<string>('tailormade');
    return (
        <RadioButtonDiv>
             <Radio name={name} value={value}/>
             <RadioButtonBox textDescription={textDescription} titlePrimary={titlePrimary}/>
        </RadioButtonDiv>
       
      );
}
