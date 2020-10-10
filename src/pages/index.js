import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout';
import '../styles/index.scss'


const IndexPage = () => {


  return (
    <Layout>
      <h1>Hi!</h1>
      <h2>I'm Ivan, a front-end developer from Mexico.</h2>
      <p>Need a developer? <Link to='/contact'>Contact Me.</Link></p>
    </Layout>
  )
  
}

export default IndexPage;