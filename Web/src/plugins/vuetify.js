// plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// 🎨 Définition des thèmes
const light = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const dark = {
  dark: true,
  colors: {
    background: '#0A0A0A',
    surface: '#121212',
    primary: '#0D47A1',
    secondary: '#1E1E1E',
    accent: '#2962FF',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const gotham = {
  dark: true,
  colors: {
    background: '#0B0C10',
    surface: '#1F2833',
    primary: '#C5C6C7',
    secondary: '#45A29E',
    accent: '#66FCF1',
    warning: '#F9A825',
    error: '#D32F2F',
    success: '#2E7D32'
  }
}

// 🛠️ Création de Vuetify
export default createVuetify({
  theme: {
    defaultTheme: 'gotham', // doit correspondre à la clé du thème
    themes: {
      light,
      dark,
      gotham
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  }
})
