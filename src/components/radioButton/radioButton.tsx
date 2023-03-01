import React, {useState} from 'react';


import { CustomRadio as Radio, RadioButtonDiv } from './radioButton.styles';
import { RadioButtonBox } from './radioButtonBox';

export const RadioButton = () => {
    const [titlePrimary, setTitlePrimary] = useState<string>('Ready-made');
    const [textDescription, setTextDescription] = useState<string>('professionally constructed multi-sector investment options');
    const [name, setName] = useState<string>('investmentStrategy');
    const [value, setValue] = useState<string>('tailormade');
    const [sourceImg, setSourceImg] = useState<string>('https://robohash.org/1?set=set2');
    const [altImg, setAltImg] = useState<string>('sample-image');
    const [radioToggle, setRadioToggle] = useState(false)

    const radioToggleEvent = () => {
      console.log('is clicked')
      setRadioToggle(!radioToggle);
      setValue(`${radioToggle}`);
    }
    

    return (
        <RadioButtonDiv>
             <Radio name={name} value={value}/>
             <RadioButtonBox ontoggle={radioToggleEvent} textDescription={textDescription} titlePrimary={titlePrimary} sourceImg={sourceImg} altImg={altImg}/>
        </RadioButtonDiv>
       
      );
}
