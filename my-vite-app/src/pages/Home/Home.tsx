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
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
          />
        ))}
      </ProductsContainer>
    </>
    )
}
