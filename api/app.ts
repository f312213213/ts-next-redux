import { root } from './index'
import { from } from 'rxjs'

export const fetchInitRequest = () => {
  const request = fetch(root + '/init')
    .then(response => response.json())
  return from(request)
}
