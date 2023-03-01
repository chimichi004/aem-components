import {Radio, Box, Typography} from '@mui/material';
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
    display: 'none'
}) as typeof Radio;

export const RadioButtonDiv = styled('div')({
  fontSize: 16,
  fontWeight: 700,
  color: '#000',
  letterSpacing: 0.2,
  height: 'inherit',
  width: 'inherit',
  justifyContent: 'center',
  flexDirection: 'row',
  margin: '0 auto',
  textAlign: 'center',
  maxWidth: '920px',
  alignItems: 'stretch'
});

export const RadioIconDiv = styled('div')({
  position: 'relative',
  margin: '20px 16px 0 16px'
});

export const CustomImage = styled('img')({
  verticalAlign: 'middle',
  borderStyle: 'none',
  height: 100,
  width: 100
});

export const TextDescription = styled(Typography)({
  textAlign: 'center',
  color: '#545454',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  margin: 0
}) as typeof Typography;

export const Secondary = styled(Typography)({
  color: '#164a9a',
  fontWeight: 600,
  size: '18px',
  lineHeight: '27px',
  margin: '16px 15px 16px 15px',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center'
}) as typeof Typography;