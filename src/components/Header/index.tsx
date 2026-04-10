import React, { useContext } from 'react'
import { GridContext } from '../Grid'
import { HeaderContainer } from './styles'

export function Header() {
  const { title, version } = useContext(GridContext)

  return (
    <HeaderContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '1.2',
        }}
      >
        <strong style={{ fontSize: '1.1rem', marginBottom: '2px' }}>
          {title}
        </strong>

        {version && (
          <span className="version-badge">
            {version}
          </span>
        )}
      </div>
    </HeaderContainer>
  )
}
