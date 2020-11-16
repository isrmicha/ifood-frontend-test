import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt_BR: {
    translation: {
      Location: 'Localização',
      Limit: 'Limite',
      Offset: 'Deslocamento',
      'Filter playlist by text': 'Filtrar playlist por texto',
      'Component Size': 'Tamanho dos componentes',
      Small: 'Pequeno',
      Medium: 'Médio',
      Large: 'Grande',
      Choose: 'Escolha',
      Language: 'Linguagem',
      Logout: 'Sair',
      'Logout Logout': 'Sair',
      'Login with Spotify': 'Entrar com spotify',
      'Components Size': 'Tamanho dos componentes'
    }
  },
  en_US: {
    translation: {

    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en_US',
  fallbackLng: 'en_US',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  },
  react: {
    useSuspense: true,
    wait: true
  }
})

export default i18n
