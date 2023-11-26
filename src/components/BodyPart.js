import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack 
    type='button'
    alignItems='center'
    justifyContent='center'
    className='bodyPart-card'
    onClick={()=>{
        setBodyPart(item);
        window.scrollTo({top:1800, left:100, behavior:'smooth'})
    }}
    sx={{
        borderTop:bodyPart === item ?  '5px solid #FF2625': '',
        background: '#FFF',
        borderBottomLeftRadius: '20px',
        width: '20vw',
        height: '20vw',
        cursor: 'pointer',
        gap: '47px'
    }}>
        <img src={Icon} alt='gym storefront' style={{ width: '40px', heigth:'40px'}}/>
        <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart