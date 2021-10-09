import styled from "@emotion/styled";

interface props {
  position?: 'left' | 'right';
}

export const TopBar = styled.div<props>(({ position }) => ({
  position: 'absolute',
  ...(position === 'left' ? {
    left: 15
  } : {
    right: 15
  }),
  top: 15,
  background: 'white',
  borderRadius: 12,
  padding: 8,
  zIndex: 1000,
  boxShadow: '0px 6px 20px -8px rgba(0,0,0,0.69);'
}))

TopBar.defaultProps = {
  position: 'left'
}