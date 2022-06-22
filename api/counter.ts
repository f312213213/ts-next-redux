import { Observable, from } from 'rxjs'

const root = 'https://f-counter-api.vercel.app'

export const fetchInitData = () => {
  const request = fetch(root)
    .then(response => response.json())
  return from(request)
}

export const fetchIncrementData = () => {
  const request = fetch(`${root}/increment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      by: 100
    })
  })
    .then(response => response.json())
  return from(request)
}

export const fetchDecrementData = () => {
  const request = fetch(`${root}/decrement`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      by: 100
    })
  })
    .then(response => response.json())
  return from(request)
}
