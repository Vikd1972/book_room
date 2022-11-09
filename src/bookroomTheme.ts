/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-duplicates */
import 'styled-components';
import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    backrground: string;
    button: {
      padding: string;
      fontColor: string;
      fontSize: string;
      fontWeight: string;
      fontHeight: string;
      backrground: string;
    };
  }
}

const bookroomTheme: DefaultTheme = {
  borderRadius: '16px',
  backrground: '#F0F4EF',
  button: {
    padding: '10px 0',
    fontColor: '#F0F4EF',
    fontSize: '16px',
    fontWeight: '500',
    fontHeight: '24px',
    backrground: '#344966',
  },
};

export default bookroomTheme;
