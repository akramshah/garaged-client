import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CarForm = ({ car, handleSubmit, handleChange }) => (
  <Form className="showCar"
    Submit={handleSubmit}>
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control className= "input"
        placeholder='Enter the model'
        name='name'
        value={car.name}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Year</Form.Label>
      <Form.Control
        placeholder='Enter the model year'
        name='year'
        value={car.year}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Mileage</Form.Label>
      <Form.Control
        placeholder='Enter the mileage'
        name='mileage'
        value='car.mileage'
        onChange={handleChange}
      />
      <Button className='primary' variant='primary' type='submit'>
    Add Car
      </Button>
    </Form.Group>
  </Form>
)

export default CarForm
