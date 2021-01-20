import styled from 'styled-components';
import { variant } from 'styled-system';

export const TemplateStyle = styled('div')(
    variant({
      scale: 'template',
      variants: {
        main: {}
      },
    })
);