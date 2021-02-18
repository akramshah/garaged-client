import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { createCar } from '../../api/cars'
import CarForm from './CarForm'

class CarCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: {
        name: '',
        year: '',
        mileage: ''
      },
      created: false
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    const { car } = this.state

    createCar(car, user)
      .then(res => {
        this.setState({ created: true })
        return res
      })
      .then(res => msgAlert({
        heading: 'New car added.',
        message: `Congratulations on adding your ${res.data.car.year} ${res.data.car.name}!`,
        variant: 'success'
      }))
      .catch(error => {
        if (error.response.status === 422) {
          msgAlert({
            heading: 'Error:',
            message: 'Car not created. Please try again.',
            variant: 'danger'
          })
        } else {
          msgAlert({
            heading: 'Error:',
            message: 'Could not create car with error: ' + error.message,
            variant: 'danger'
          })
        }
      })
  }
  handleChange = event => {
    event.persist()
    this.setState(state => {
      return {
        car: { ...state.car, [event.target]: event.target.value }
      }
    })
  }
  render () {
    const { car, created } = this.state
    if (created) {
      return <Redirect to={`/cars/${car.name}`} />
    }
    return (
      <Fragment>
        <h3>Add a car to your garage.</h3>
        <CarForm
          car={car}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    )
  }
}

export default CarCreate
