export default {
  filter: {
    loading: false,
    error: false,
    values: {
      country: 'BR',
      locale: 'pt_BR'
    },
    filtersList: [
      {
        id: 'locale',
        name: 'Locale',
        values: [
          {
            value: 'en_AU',
            name: 'en_AU'
          },
          {
            value: 'de_DE',
            name: 'de_DE '
          },
          {
            value: 'pt_BR',
            name: 'pt_BR'
          },
          {
            value: 'fr_FR',
            name: 'fr_FR'
          },
          {
            value: 'en_US',
            name: 'en_US'
          },
          {
            value: 'es_AR',
            name: 'es_AR'
          }
        ]
      },
      {
        id: 'country',
        name: 'País',
        values: [
          {
            value: 'AU',
            name: 'Australia'
          },
          {
            value: 'DE',
            name: 'Alemanhã'
          },
          {
            value: 'BR',
            name: 'Brasil'
          },
          {
            value: 'PT',
            name: 'Portugal'
          },
          {
            value: 'en_US',
            name: 'EUA'
          },
          {
            value: 'RU',
            name: 'Rússia'
          }
        ]
      },
      {
        id: 'timestamp',
        name: 'Data e Horário',
        validation: {
          primitiveType: 'STRING',
          entityType: 'DATE_TIME',
          pattern: 'yyyy-MM-ddTHH:mm:ss'
        }
      },
      {
        id: 'limit',
        name: 'Quantidade',
        validation: {
          primitiveType: 'INTEGER',
          min: 1,
          max: 50
        }
      },
      {
        id: 'offset',
        name: 'Página',
        validation: {
          primitiveType: 'INTEGER'
        }
      }
    ]
  },
  playlist: {
    filters: {
      message: 'Preparado pra voltar à rotina?',
      playlists: {
        href: 'https://api.spotify.com/v1/browse/featured-playlists?country=BR&locale=pt_br&timestamp=2020-11-09T00%3A03%3A32&offset=0&limit=20',
        items: [
          {
            collaborative: false,
            description: 'A trilha perfeita pra embalar seu sono / Música perfecta para dormir',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX05Zqxyo07cQ'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX05Zqxyo07cQ',
            id: '37i9dQZF1DX05Zqxyo07cQ',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f0000000397e40cbd3fce67e782deaf14',
                width: null
              }
            ],
            name: 'Hora de Dormir',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwNDY3MDk1MCwwMDAwMDAzNTAwMDAwMTc1OWRkNzhjMzMwMDAwMDE2ZDE1MTUxM2U3',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX05Zqxyo07cQ/tracks',
              total: 359
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX05Zqxyo07cQ'
          },
          {
            collaborative: false,
            description: 'Ambient drone to make you feel weightless.',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX1n9whBbBKoL'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1n9whBbBKoL',
            id: '37i9dQZF1DX1n9whBbBKoL',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f00000003d33da3d4e483709cb1b33c8b',
                width: null
              }
            ],
            name: 'Floating Through Space',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwNDA5NzE5MiwwMDAwMDA1MzAwMDAwMTc1N2JhNGIyMGYwMDAwMDE2ZDAwYzU0ODJk',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1n9whBbBKoL/tracks',
              total: 119
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX1n9whBbBKoL'
          },
          {
            collaborative: false,
            description: 'Beats to relax, study and focus.',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn',
            id: '37i9dQZF1DWWQRwui0ExPn',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e',
                width: null
              }
            ],
            name: 'Lo-Fi Beats',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwNDg4MDE5NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWQRwui0ExPn/tracks',
              total: 450
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DWWQRwui0ExPn'
          },
          {
            collaborative: false,
            description: 'Adormecer ao som relaxante da chuva.',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWT0d3wigiTss'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWT0d3wigiTss',
            id: '37i9dQZF1DWT0d3wigiTss',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f0000000315124b001960c00634b808f3',
                width: null
              }
            ],
            name: 'Chuva para Dormir',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwMzk3OTY2OSwwMDAwMDAwODAwMDAwMTc1NzRhMzZmNWYwMDAwMDE3MGM0YjA3NWU2',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWT0d3wigiTss/tracks',
              total: 116
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DWT0d3wigiTss'
          },
          {
            collaborative: false,
            description: 'Acoustic covers of sad songs.',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX64Y3du11rR1'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX64Y3du11rR1',
            id: '37i9dQZF1DX64Y3du11rR1',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f00000003df7e498bfc071eafd143995e',
                width: null
              }
            ],
            name: 'Sad Covers',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwMzkwMDUwMiwwMDAwMDAxYjAwMDAwMTc1NmZlYjcxOTQwMDAwMDE3MGM0Y2E4YmU2',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX64Y3du11rR1/tracks',
              total: 75
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX64Y3du11rR1'
          },
          {
            collaborative: false,
            description: 'Feche os olhos e deixe o jazz embalar seu sono.',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX1U93rnCNfyR'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1U93rnCNfyR',
            id: '37i9dQZF1DX1U93rnCNfyR',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f00000003cb620976afac6db8a0674dc1',
                width: null
              }
            ],
            name: 'Jazz para Dormir',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwMzQ2NDM4OCwwMDAwMDAxNjAwMDAwMTc1NTVlY2RlMGEwMDAwMDE2ZDE1NDc5YzI2',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX1U93rnCNfyR/tracks',
              total: 55
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX1U93rnCNfyR'
          },
          {
            collaborative: false,
            description: 'Os hinos da Harpa, Cantor Cristão e Hinário na voz de grandes adoradores.',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX08zWBqYbS18'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX08zWBqYbS18',
            id: '37i9dQZF1DX08zWBqYbS18',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f000000031f4046cd548a01073e6cb8e4',
                width: null
              }
            ],
            name: 'Hinos da Harpa',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwMjgxNzI2MCwwMDAwMDAwYjAwMDAwMTc1MmY1YTdiNDMwMDAwMDE3MGM0YTliZjRh',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX08zWBqYbS18/tracks',
              total: 42
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX08zWBqYbS18'
          },
          {
            collaborative: false,
            description: 'Sons para seu bebê dormir e relaxar / Sonidos para relajar a tu bebé',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX7gmQDrFAm58'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX7gmQDrFAm58',
            id: '37i9dQZF1DX7gmQDrFAm58',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f000000031e32391802bd9cf355024b3b',
                width: null
              }
            ],
            name: 'Nana Nenê',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwMDI4NDYyOSwwMDAwMDAxMDAwMDAwMTc0OTg2NTliMWQwMDAwMDE3NDk4NjU3N2Mx',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX7gmQDrFAm58/tracks',
              total: 160
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX7gmQDrFAm58'
          },
          {
            collaborative: false,
            description: 'Buscando um sono profundo? Essa playlist te ajuda a dormir melhor.',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWWKap1fTevjS'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWKap1fTevjS',
            id: '37i9dQZF1DWWKap1fTevjS',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f00000003d366053cd68abd2fcdbb7b78',
                width: null
              }
            ],
            name: 'Sono Profundo',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwMjY5MDc2MiwwMDAwMDAxMjAwMDAwMTc1MjdkMDQ2MzQwMDAwMDE3MGM0Yzk2ZDBk',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DWWKap1fTevjS/tracks',
              total: 177
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DWWKap1fTevjS'
          },
          {
            collaborative: false,
            description: 'Relaxe com hinos acústicos. Foto: Thalles Roberto.',
            external_urls: {
              spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX7O8ONc6Mo0L'
            },
            href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX7O8ONc6Mo0L',
            id: '37i9dQZF1DX7O8ONc6Mo0L',
            images: [
              {
                height: null,
                url: 'https://i.scdn.co/image/ab67706f000000031a93afe7e48bf5cb7915653d',
                width: null
              }
            ],
            name: 'Gospel Acústico',
            owner: {
              display_name: 'Spotify',
              external_urls: {
                spotify: 'https://open.spotify.com/user/spotify'
              },
              href: 'https://api.spotify.com/v1/users/spotify',
              id: 'spotify',
              type: 'user',
              uri: 'spotify:user:spotify'
            },
            primary_color: null,
            public: null,
            snapshot_id: 'MTYwNDYzMjU5MSwwMDAwMDAzNjAwMDAwMTc1OWI4ZTNkYmQwMDAwMDE3NTc3NmE5OTQ1',
            tracks: {
              href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DX7O8ONc6Mo0L/tracks',
              total: 69
            },
            type: 'playlist',
            uri: 'spotify:playlist:37i9dQZF1DX7O8ONc6Mo0L'
          }
        ],
        limit: 20,
        next: null,
        offset: 0,
        previous: null,
        total: 10
      }
    }
  },
  auth: {
    token: 'BQCMtby0foHUktPUFgRUjKHYc55Kl3XPh2UDQQBVwNn6DZwDmIdPA5ELRVdWKHyica2Co3gYzD9f9jxga4-0iERFaMQxkQ8ohtFrThs1aIkeYkFgHebFiQQhVOgZFbJS51HAVBDP43c641kRR3v2b2eO-gI',
    refreshToken: 'AQADwwHD8SsUTAXqMTLzMcZ3YN2msSERtfB44ODALs52KJawuh7jVN9CXaZSRexiCwuK0gU0_i_UErXKSPnTih2wel9QnuT7sSiA86xrgt89z7sbw1X8xIlveRMWMIMYrSo'
  },
  settings: {
    componentSize: 'large',
    locale: 'enUS'
  }
}
