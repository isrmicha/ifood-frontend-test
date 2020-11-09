import React from 'react'
import { Button, Result } from 'antd'

const Error = () => (
    <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary" onClick={() => window.location.reload()}>Try again</Button>}
  />
)
export default Error
