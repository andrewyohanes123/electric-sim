import styled from "@emotion/styled";

interface props {
  indicator: boolean;
}

export const OutputIndicator = styled.div<props>(({ indicator }) => ({
  // padding: 15,
  borderRadius: '50%',
  background: indicator ? '#e74c3c' : '#c0392b',
  width: 35,
  height: 35,
  margin: '2px auto'
}))