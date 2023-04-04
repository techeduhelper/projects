import React from 'react'
import {AppBar, Toolbar , styled , Box, Typography, Divider} from '@mui/material';

const Appbar = styled(AppBar)`
    background-color: #0F0C27;
    color: #fff;
    height: 60px;
    text-align: center;
`
const Navcompo = styled(Toolbar)`
    margin: 0 10% 0 10%;

`


const Navbar = () => {
  return (
    <>
    <Appbar position='sticky' style={{}}>
        <Navcompo>
            <Box>
                <Typography style={{fontSize: '1.5rem'}}>
                    Tech<span style={{fontSize: '1rem'}}>Edu</span>Helper
                </Typography>
            </Box>
            <Box>
                <ul>
                    <li ></li>
                </ul>
            </Box>
        </Navcompo>
        <Divider style={{background: 'white', height:'0.5px'}}/>
    </Appbar>
    
    </>
    

  )
}

export default Navbar