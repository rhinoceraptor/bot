import * as env from 'env-var'

export const matrix = {
  username: env.get('MATRIX_USERNAME').required().asString(),
  password: env.get('MATRIX_PASSWORD').required().asString(),
  homeserver: env.get('MATRIX_HOMESERVER').required().asString()
}

