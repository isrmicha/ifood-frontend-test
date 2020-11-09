import React from 'react'
import { Button, Result } from 'antd'

const Error = ({ retryAction }) => (
    <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary" onClick={retryAction}>Try again</Button>}
  />
)
export default Error
