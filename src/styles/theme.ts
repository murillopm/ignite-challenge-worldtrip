import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      'white': '#FFFFFF',
      'white-text': '#F5F8FA',
      'white-info': '#DADADA',
      'black': '#000000',
      'black-text': '#47585B',
      'black-info': '#999999',
      'black-info-op': 'rgba(153, 153, 153, 0.5)',
      'yellow-op': 'rgba(255, 186, 8, 0.5)',
      'yellow': '#FFBA08',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',

  },
  styles: {
    global: {
      body: {
        bg: 'brand.white-text',
        color: 'brand.black-text'
      }
    }
  }
})