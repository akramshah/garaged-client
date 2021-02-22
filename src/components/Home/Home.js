import React, { Fragment } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import './Home.scss'

const Home = () => (
  <Fragment>
    <div className="jumbotron" >
      <Jumbotron style={{ backgroundColor: '#f2eddc' }} >
        <h1>Garaged</h1>
        <p>
          Garaged is an app that keeps track of all your cars
          mechanical issues, warranties, and routine check-ups.
          Register for a free account and get started.
        </p>
        <p>
          <Button style={{ backgroundColor: '#1c3059', border: 'none', marginRight: '15px' }} href="#sign-up" variant="primary">
          Sign-up
          </Button>
          <Button style={{ backgroundColor: '#1c3059', border: 'none' }} href="#sign-in" variant="primary">
          Sign-in
          </Button>
        </p>
        <img src = 'carhome.png' className="img"></img>
      </Jumbotron>
    </div>
  </Fragment>
)

export default Home
