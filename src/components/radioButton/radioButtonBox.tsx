import React from 'react'
import { CustomBox as Box, RadioIconDiv, CustomImage, Secondary, TextDescription } from './radioButton.styles';
import InfoIcon from '@mui/icons-material/Info';


export const RadioButtonBox = ({titlePrimary, textDescription}:any) =>{
    return  <Box>
            <RadioIconDiv>
                <CustomImage src={`https://robohash.org/1?set=set2`} alt="sample-image"/>
            </RadioIconDiv>
            <Secondary variant="h5" align="center" color='#164a9a'>
                {titlePrimary} <InfoIcon sx={{ color:"#164a9a", marginLeft: '5px'}}  />
            </Secondary>
            <TextDescription variant="body2">
                {textDescription}
            </TextDescription>
        </Box>
}