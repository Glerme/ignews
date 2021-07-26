import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 3rem;
  border-radius: 3rem;
  border: 0;
  background: var(--gray-850);
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: bold;

  transition: filter 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }

  svg.closeIcon {
    margin-left: 1rem;
  }
`;
