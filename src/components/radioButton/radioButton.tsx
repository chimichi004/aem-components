import React, {useState} from 'react';
import {Typography} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { CustomBox as Box, CustomRadio as Radio } from './radioButton.styles';

export const RadioButton = () => {
    const [titlePrimary, setTitlePrimary] = useState<string>('Ready-made');
    const [textDescription, setTextDescription] = useState<string>('professionally constructed multi-sector investment options')
    return (
        <Box>
            <Radio />
            <Typography variant="body2" align="center" color='#164a9a'>
                {titlePrimary} <InfoIcon color="primary" />
            </Typography>
            <Typography variant="body2" color="text.h1" align="center">
                {textDescription}
            </Typography>
        </Box>
      );
}
