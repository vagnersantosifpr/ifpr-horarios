import styled from 'styled-components'

interface ThemeProps {
  teacherBackground: string
}

export const ItemContent = styled.div<{ theme: ThemeProps }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;

  text-align: center;

  padding: 0.4em;
  margin: 0 0px;

  border: 1px solid var(--border-cell);
  border-radius: 6px;

  [data-theme='dark'] {
    border: 1px solid var(--ifm-color-black);
  }

  color: var(--text-cell);
  background-color: ${(props) => props.theme.teacherBackground};

  font-family: 'Inter', 'Poppins', sans-serif;
  font-size: 0.9em;
  font-weight: 400;

  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  word-break: break-word;

  &:hover {
    filter: brightness(0.88);
  }

  .subject,
  a {
    color: var(--text-cell-light);
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.85;
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    &:hover {
      filter: brightness(0.85);
      transform: scale(1.02);
      z-index: 5;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }
  }
`

ItemContent.defaultProps = {
  theme: {
    teacherBackground: 'var(--background-cell)',
  },
}
