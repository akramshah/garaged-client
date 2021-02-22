import React, { Fragment } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Home = () => (
  <Fragment>
    <div className="container">
      <Jumbotron>
        <h1>Garaged</h1>
        <p>
          Garaged is an app that keeps track of all your cars
          mechanical issues, warranties, and routine check-ups.
          Register for a free account and get started.
        </p>
        <p>
          <Button variant="primary">Create A Car</Button>
        </p>
      </Jumbotron>
    </div>
  </Fragment>
)

export default Home
