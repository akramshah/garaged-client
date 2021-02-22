import React, { Component, Fragment } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { indexCars, deleteCar } from '../../api/cars'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import './Garage.scss'

class Garage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cars: [],
      deleted: false,
      carId: ''
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    indexCars(user)
      .then(res => this.setState({ cars: res.data.cars }))
      .then(() => msgAlert({
        heading: 'Welcome',
        message: 'Here are all the cars in your garage.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'No cars to display.',
          message: 'Please add a car to your garage. Error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = (id) => {
    const { user, msgAlert } = this.props
    deleteCar(id, user)
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Success',
        message: 'Car deleted successfully.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Error',
          message: 'Car could not be deleted. Error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { cars, deleted } = this.state
    if (!cars) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Add A Car!</span>
        </Spinner>
      )
    }
    if (deleted) {
      return <Redirect to="/confirmation" />
    }
    const carJsx = cars.map(car => (
      <div key={car.id}>
        <Card className="garagecard" style={{ width: '18rem' }}>
          <Card.Img variant="top" className="img-size" src={'card.png'} />
          <Card.Body>
            <Card.Title><h6>{car.name}</h6></Card.Title>
            <Card.Text>
              <p>Year: {car.year}</p>
              <p>Mileage: {car.mileage}</p>
            </Card.Text>
            <Button className='primary' variant="primary" onClick={() => this.handleDelete(car.id)}>Delete Car</Button>
            <Button className='primary' variant="primary">
              <Link style={{ color: '#fff' }} to={`/cars/update/${car.id}`}>Update Car</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    ))
    return (
      <Fragment>
        <div className="displayCar">
          { carJsx }
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Garage)
