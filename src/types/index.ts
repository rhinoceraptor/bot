
export type MatrixAuthResponse = {
  user_id: string,
  access_token: string,
  home_server: string,
  device_id: string
}

export type MatrixPasswordLoginRequest = {
  type: 'm.login.password',
  identifier: {
    type: 'm.id.user',
    user: string
  },
  password: string
}
