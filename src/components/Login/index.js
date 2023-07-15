// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  onClickLoginSuccsess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, 30)
    history.replace('/')
  }

  onClickLogin = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'praneetha',
      password: 'praneetha@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const fetchData = await response.json()

    if (response.ok === true) {
      this.onClickLoginSuccsess(fetchData.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bg-container">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
