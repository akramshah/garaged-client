import React, { Fragment } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Confirmation = () => (
  <Fragment>
    <div className="container" style={{ marginTop: '50px' }} >
      <Jumbotron style={{ backgroundColor: '#f2eddc' }} >
        <h1>Garaged</h1>
        <p>
          Your cars have been fully updated.
        </p>
        <p>
          <Button style={{ backgroundColor: '#1c3059', border: 'none', marginRight: '15px' }} href="#garage" variant="primary">
          My Garage
          </Button>
        </p>
      </Jumbotron>
    </div>
  </Fragment>
)

export default Confirmation
