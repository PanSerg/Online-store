import { useState } from "react";
import { ProductCardWrapper, AddToCartButton, ProductName, ProductPhoto, ProductPrice } from "./ProductCard.styled";
import plusIcon from "../../assets/Icon-plus.svg";
import birdIcon from "../../assets/Icon-add.svg";

interface ProductCardProps {
    photoUrl: string;
    name: string;
    price: number;
    onAddToCart: () => void;
}

export default function ProductCard({ photoUrl, name, price, onAddToCart }: ProductCardProps) {
    const [added, setAdded] = useState(false);

    function handleAdd() {
        try {
            onAddToCart?.();
        } finally {
            setAdded(true);
        }
    }

    return (
        <ProductCardWrapper>
            <ProductPhoto src={photoUrl} alt={name} />
            <ProductName>{name}</ProductName>
            <ProductPrice>${price.toFixed(2)}</ProductPrice>
            <AddToCartButton onClick={handleAdd} aria-pressed={added}>
                <img src={added ? birdIcon : plusIcon} alt="" aria-hidden />
                <span>Add to Cart</span>
            </AddToCartButton>
        </ProductCardWrapper>
    )
}

