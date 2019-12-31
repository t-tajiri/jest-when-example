import axios from 'axios'
export default class backendService {
  constructor() {
    this.api = axios.create({
      validateStatus: (status) => {
        return (status >= 200 && status < 300) || status === 400
      }
    })
  }

  getInstance() {
    return this.api
  }

  getSuperPower() {
    // axios.get('http://superpower.com')
    this.api.get('http://superpower.com')
  }
}
