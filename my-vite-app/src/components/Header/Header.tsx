import { HeaderWrapper, HeaderContent, LogoImg, CartButton, CartIcon } from "./Header.styled";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cartIcon.png"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <HeaderContent>
  <LogoImg src={logo} alt="Logo" onClick={() => navigate("/")} />
      <CartButton to="/cart">
      <CartIcon src={cartIcon} alt="cart icon" />
      Cart</CartButton>
      </HeaderContent>
    </HeaderWrapper>
  );
}