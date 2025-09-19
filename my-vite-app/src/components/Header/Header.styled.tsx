import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  background-color: #171717;
  color: white;
  border-bottom: 1px solid #ccc;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  height: 64px;
  padding-left: 60px;
  padding-right: 60px;

  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const CartButton = styled(Link)<React.ComponentProps<typeof Link>>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
  width: 100px;
  height: 36px;
  color: white;
  background-color: #00AE1C;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: 1.33;
  letter-spacing: -0.3px;

  &:hover {
    background-color: #008F1A;
  }
`;

export const CartIcon = styled.img`
  width: 16px;
  height: 16px;
  display: block;
  `;

export const Logo = styled.img`
  width: 48px;
  height: 40px;
  object-fit: contain;
  margin-right: 1rem;
  cursor: pointer;
  background-color: #171717;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
  border-radius: 4px;
`;


