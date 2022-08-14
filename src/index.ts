import 'dotenv/config'
import axios from 'axios'
import { matrix } from './config'
import {
  MatrixPasswordLoginRequest,
  MatrixAuthResponse
} from './types/index'

const tryLogin = async () => {
  try {
    const requestBody: MatrixPasswordLoginRequest = {
      type: 'm.login.password',
      identifier: {
        type: 'm.id.user',
        user: matrix.username
      },
      password: matrix.password
    }

    const { data } = await axios.post<MatrixAuthResponse>(
      `${matrix.homeserver}/_matrix/client/v3/login`,
      requestBody
    )

    console.log(data)
  } catch (e) {
    console.trace(e)
  }
}

tryLogin()
