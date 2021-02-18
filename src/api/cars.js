import apiUrl from '../apiConfig'
import axios from 'axios'

export const createCar = (car, user) => {
  return axios({
    url: apiUrl + '/cars/',
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { car }
  })
}

export const indexCars = (user) => {
  return axios({
    url: apiUrl + '/cars/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const indexCar = (user) => {
  return axios({
    url: apiUrl + '/car/',
    method: 'GET',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

export const updateCar = (car, user) => {
  return axios({
    url: apiUrl + '/car/',
    method: 'PATCH',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: { car }
  })
}

export const deleteCar = user => {
  return axios({
    url: apiUrl + '/car/',
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
