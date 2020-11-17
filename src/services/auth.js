import { REFRESH_TOKEN_URL } from '../consts'
import axios from 'axios'

export const refreshToken = (refreshToken) =>
  axios.post(REFRESH_TOKEN_URL, {
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
    client_id: CLIENT_ID
  })
