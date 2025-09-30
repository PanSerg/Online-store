import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header'
import { ProductsContainer } from './Home.styled'
import ProductCard from '../../components/ProductCard/ProductCard';

// const sampleProducts = [
//   { id: 1, name: "Chair 1" },
//   { id: 2, name: "Chair 2" },
//   { id: 3, name: "Chair 3" },
//   { id: 4, name: "Chair 4" },
// ];

interface Product {
    id: number;
    title: string;
    images: string[];
    price: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error('Error fetching products:', err));
  }, []);
    function addToCart(product: Product) {
      const raw = localStorage.getItem('cart_items');
      const parsed = raw ? JSON.parse(raw) : {};
      const existing = parsed[product.id];
      parsed[product.id] = existing ? { ...existing, qty: existing.qty + 1 } : { id: product.id, title: product.title, price: product.price, qty: 1, image: product.images[0] || '' };
      localStorage.setItem('cart_items', JSON.stringify(parsed));
    }

    return (
      <>
      <Header />
      <ProductsContainer>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            photoUrl={product.images[0] || ''}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </ProductsContainer>
    </>
    )
}
