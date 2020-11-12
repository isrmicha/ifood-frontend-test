import React, { useCallback, useEffect, useMemo } from 'react'
import { List, Avatar, Collapse } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlaylists, fetchTracks } from '../slices/playlist'
import Loading from './Loading'
import Error from './Error'
import _deburr from 'lodash/deburr'
import _debounce from 'lodash/debounce'
import { PlayCircleTwoTone } from '@ant-design/icons'
import styled from 'styled-components'

const REFRESH_TIME = 30000

const { Panel } = Collapse

const Playlists = () => {
  const { values, text } = useSelector(state => state?.filter)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPlaylists())
    const interval = setInterval(() => {
      if (authToken) debouncedFetchPlaylists()
    }, REFRESH_TIME)
    return () => clearInterval(interval)
  }, [values])
  const { playlists, loading, error, playlistTracks, tracksLoading } = useSelector(state => state?.playlist)
  const authToken = useSelector(state => state?.auth?.token)
  const debouncedFetchPlaylists = useCallback(
    _debounce(() => dispatch(fetchPlaylists()), 800),
    []
  )
  const filteredPlaylist = useMemo(
    () =>
      playlists?.items?.filter?.(({ name }) =>
        _deburr(name)
          .toLowerCase()
          .includes(_deburr(text).toLowerCase())
      ),
    [text, playlists?.items]
  )

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <Container>
      <Collapse
        accordion
        onChange={(index) => {
          if (!index) return
          dispatch(fetchTracks(filteredPlaylist[index]?.tracks?.href))
        }}
      >
        {filteredPlaylist?.map?.((item, index) => (
          <React.Fragment key={item?.id}>
            <Panel header={item.name} key={index}>
              <List
                itemLayout="horizontal"
                dataSource={playlistTracks?.items}
                style={{ maxHeight: 400, overflow: 'auto' }}
                loading={tracksLoading}
                renderItem={({ track }) => (
                  <RowDiv
                    key={track.id}
                    onClick={() => window.open(track.preview_url)}
                  >
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            shape="square"
                            size="large"
                            src={track?.album?.images?.[0]?.url}
                          />
                        }
                        title={track?.name}
                        description={track?.artists?.[0]?.name}
                      />
                    </List.Item>
                    <PlayCircleTwoTone
                      onClick={() =>
                        track.preview_url && window.open(track.preview_url)
                      }
                    />
                  </RowDiv>
                )}
              />
            </Panel>
          </React.Fragment>
        ))}
      </Collapse>
    </Container>
  )
}

export default Playlists

const Container = styled.div`
  margin: 20px 0 100px 0; 
`

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  li {
    width: 100%;
  }
  svg {
    height: 30px;
    width: 30px;
    opacity: 0;
  }
  &:hover {
    svg {
      opacity: 1;
    }
    padding-right: 20px;
    cursor: pointer;
  }
`
