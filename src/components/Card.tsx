'use client';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 100px;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Card({ children }: { children: React.ReactNode }) {
  return <StyledCard>{children}</StyledCard>;
}
