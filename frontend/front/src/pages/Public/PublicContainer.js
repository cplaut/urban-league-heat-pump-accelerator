import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import About from "./about/About";
import Nav from "./nav/Nav";

const PublicContainer = () => {
  return (
    <Box>
      <Typography>Naviagation Wrapper</Typography>
      <Nav />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='about' element={<About />}></Route>
        </Routes>
      </Container>
    </Box>
  );
};

export default PublicContainer;