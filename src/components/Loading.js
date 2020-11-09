import React from 'react'
import styled from 'styled-components'
import { Skeleton } from 'antd'

const Loading = () => (
    <CenteredDiv>
        <Skeleton active />
    </CenteredDiv>
)
export default Loading

const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100;
`
