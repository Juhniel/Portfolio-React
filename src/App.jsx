import React from "react"

import Header from "./components/Header"
import AnimRoutes from "./components/AnimRoutes"
import { BrowserRouter as Router } from "react-router-dom";

import { motion } from "framer-motion" 
export default function App() {
  // const projectArray = Object.values(ProjectData);


  return (
      <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      </>
  )
}