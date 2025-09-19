import { ProductCardWrapper, AddToCartButton, ProductName, ProductPhoto, ProductPrice } from "./ProductCard.styled";

interface ProductCardProps {
    photoUrl: string;
    name: string;
    price: number;
    onAddToCart: () => void;
}

export default function ProductCard({ photoUrl, name, price, onAddToCart }: ProductCardProps) {
    return (
        <ProductCardWrapper>
            <ProductPhoto src={photoUrl} alt={name} />
            <ProductName>{name}</ProductName>
            <ProductPrice>${price.toFixed(2)}</ProductPrice>
            <AddToCartButton onClick={() => onAddToCart?.()}>Add to Cart</AddToCartButton>
        </ProductCardWrapper>
    )
}

