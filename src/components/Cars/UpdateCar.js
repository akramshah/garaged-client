import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { updateCar } from '../../api/cars'
import CarForm from './CarForm'

class CarUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      car: {
      },
      updated: false
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { user, msgAlert, match } = this.props
    const { car } = this.state
    console.log(match)
    const id = match.params.id
    updateCar(id, car, user)
      .then(res => {
        this.setState({ updated: true })
        return res
      })
      .then(res => (res.data.car))
      .then(msgAlert({
        heading: 'Car updated successfully.',
        message: 'Head to your Garage to see your cars.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to update car.',
          message: 'Please try again. Error: ' + error.message,
          variant: 'success'
        })
      })
  }
    handleChange = event => {
      event.persist()
      this.setState(state => {
        return {
          car: { ...state.car, [event.target.name]: event.target.value }
        }
      })
    }
    render () {
      const { car, updated } = this.state
      if (updated) {
        return <Redirect to={'/home'} />
      }

      return (
        <Fragment>
          <h3 style={{ marginTop: '20px' }}>Update Car</h3>
          <CarForm
            car={car}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} />
        </Fragment>
      )
    }
}

export default withRouter(CarUpdate)
