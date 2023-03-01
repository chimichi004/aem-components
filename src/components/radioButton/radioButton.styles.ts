import {Radio, Box} from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomBox = styled(Box)({
    width: 300,
    backgroundColor: '#ffff',
    boxShadow: '0 0 20px #0000001a',
    margin: '0 15px',
    padding: '10px',
    height: '100%',
    border: '1px solid #ebebeb',
    borderRadius: '4px',
    maxWidth: '444px',
    position:'relative',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&:hover': {
      backgroundColor: 'white',
      opacity: [0.9, 0.8, 0.7],
    },
}) as typeof Box;

export const CustomRadio = styled(Radio)({
    color: 'blue'
}) as typeof Radio;