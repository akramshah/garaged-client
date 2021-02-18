import React, { Component, Fragment } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { showCar, deleteCar } from '../../api/cars'

class CarShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props
    showCar(match.params.name, user)
      .then(res => this.setState({ car: res.data.car }))
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
  handleDelete = event => {
    const { user, msgAlert, clearCar } = this.props
    deleteCar(user)
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Success',
        message: 'Car deleted successfully.',
        variant: 'success'
      }))
      .then(() => clearCar())
      .catch(error => {
        msgAlert({
          heading: 'Error',
          message: 'Car could not be deleted. Error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    const { car, deleted } = this.state
    const { user, msgAlert } = this.props
    if (!car) {
      return (
        msgAlert({
          heading: 'Error',
          message: 'No cars in your garage. Please add a car.',
          variant: 'Danger'
        })
      )
    }
    if (deleted) {
      return <Redirect to="/car/" />
    }
    const buttonsJsx = (
      <div>
        <Button className='primary' variant="primary" onClick={this.handleDelete}>Delete Car</Button>
        <Button className='primary' variant="primary">
          <Link to={'/profile/update'}>Update Profile</Link>
        </Button>
      </div>
    )
    return (
      <Fragment>
        <div className="displayCar">
          <p>
            Name: {car.name}
            Year: {car.year}
            Mileage: {car.mileage}
          </p>
          { user._id === car.owner && buttonsJsx }
        </div>
      </Fragment>
    )
  }
}

export default withRouter(CarShow)
