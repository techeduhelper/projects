import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";


const Hbody = styled(Box)`
  color: white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`

const Container = styled(Box)`
    height: 100vh;
    margin: 0 10% 0 10%;
    color: white;
`

const Icon = styled('box-icon')`

`




const Home = () => {
  return (
    <>
      <Container>
        <Hbody style={{color: 'white'}}>
          <Icon type="logo" name="github"></Icon>
          <Icon type="logo" name="facebook-circle"></Icon>
          <Icon name="linkedin" type="logo"></Icon>
          <Icon type="logo" name="instagram"></Icon>
        </Hbody>
        <Box>
          
        </Box>
      </Container>
    </>
  );
};

export default Home;


