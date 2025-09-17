import { HeaderWrapper, HeaderContent, LogoImg, CartButton } from "./Header.styled";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <HeaderContent>
  <LogoImg src={logo} alt="Logo" onClick={() => navigate("/")} />
      <CartButton to="/cart">Cart</CartButton>
      </HeaderContent>
    </HeaderWrapper>
  );
}