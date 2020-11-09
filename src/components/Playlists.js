import React, { useCallback, useEffect, useMemo } from 'react'
import { List, Avatar, Collapse } from 'antd'
import { connect } from 'react-redux'
import { fetchFeaturedPlaylists, fetchTracks } from '../actions/playlist'
import Loading from './Loading'
import Error from './Error'
import _deburr from 'lodash/deburr'
import _debounce from 'lodash/debounce'
import { PlayCircleTwoTone } from '@ant-design/icons'
import styled from 'styled-components'

const REFRESH_TIME = 30000

const { Panel } = Collapse

export const Playlists = ({
  fetchFeaturedPlaylists,
  playlist,
  filter,
  fetchTracks,
  auth
}) => {
  const debouncedFetchFeaturedPlaylists = useCallback(
    _debounce(fetchFeaturedPlaylists, 800),
    []
  )
  useEffect(() => {
    debouncedFetchFeaturedPlaylists()
    const interval = setInterval(() => {
      if (auth?.token) debouncedFetchFeaturedPlaylists()
    }, REFRESH_TIME)
    return () => clearInterval(interval)
  }, [filter?.values])
  const filteredPlaylist = useMemo(
    () =>
      playlist?.filters?.playlists?.items?.filter(({ name }) =>
        _deburr(name)
          .toLowerCase()
          .includes(_deburr(filter?.text).toLowerCase())
      ),
    [filter?.text, playlist?.filters?.playlists?.items]
  )

  if (playlist?.loading) return <Loading />
  if (playlist?.error) return <Error />

  return (
    <Container>

    <Collapse
      accordion
      onChange={(index) => {
        if (!index) return
        fetchTracks(filteredPlaylist[index]?.tracks?.href)
      }}
    >
      {filteredPlaylist?.map((item, index) => (
        <React.Fragment key={item?.id}>
          <Panel header={item.name} key={index}>
            <List
              itemLayout="horizontal"
              dataSource={playlist?.playlistTracks?.items}
              style={{ maxHeight: 400, overflow: 'auto' }}
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
                    onClick={() => track.preview_url && window.open(track.preview_url)}
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
const mapStateToProps = ({ playlist, filter, auth }) => ({
  playlist,
  filter,
  auth
})

export default connect(mapStateToProps, {
  fetchFeaturedPlaylists,
  fetchTracks
})(Playlists)

const Container = styled.div``

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
