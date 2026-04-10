import styled from 'styled-components'

export const HeaderContainer = styled.header`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  border: 1px solid var(--border-cell);
  border-radius: 6px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  margin-bottom: 1px;

  color: var(--text-cell);
  background: linear-gradient(135deg, var(--background-cell), var(--background-cell));

  font-family: 'Poppins', sans-serif;
  font-size: 0.9em;
  font-weight: 400;

  .version-badge {
    font-size: 0.78rem;
    color: var(--text-interval, #64748b);
    background: rgba(26, 138, 62, 0.08);
    padding: 2px 10px;
    border-radius: 12px;
    font-weight: 600;
    margin-top: 4px;
    border: 1px solid rgba(26, 138, 62, 0.15);
    letter-spacing: 0.01em;
  }

  [data-theme='dark'] & .version-badge {
    background: rgba(26, 138, 62, 0.15);
    border-color: rgba(26, 138, 62, 0.25);
    color: #94a3b8;
  }
`
