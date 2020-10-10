import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout';

const About = () => {
    return (
        <div>
           <Layout>
            <h1>About me</h1>
            <p>My name is Iván Villegas, I'm from Mexico and I create fron-end applications using React!</p>
            <p><Link to="/contact">Contact Me</Link></p>
           </Layout>         
        </div>
    )
}

export default About
