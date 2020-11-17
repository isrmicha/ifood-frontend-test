import moment from 'moment'
import { DEFAULT_SPOTIFY_EXPIRE_TIME } from '../consts'

export const isTokenValid = (grantedAt) =>
  Math.abs(moment(grantedAt).diff(moment())) < DEFAULT_SPOTIFY_EXPIRE_TIME
