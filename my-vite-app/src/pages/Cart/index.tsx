import Header from '../../components/Header/Header';
import { CartWrapper } from './Cart.styled';
import { useEffect } from 'react';

export default function Cart() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('CART mounted ->', window.location.pathname);
    }
  }, []);

  return (
    <>
      <Header />
      <CartWrapper id="CART-MOUNTED-2025">
        <h2>Cart Page</h2>
        <p>This is a placeholder for the Cart page.</p>
      </CartWrapper>
    </>
  );
}


// import { useEffect, useState } from 'react';
// import Header from '../../components/Header/Header';
// import { Page, Breadcrumbs, CardList, CartCard, Thumb, Meta } from './Cart.styled';

// export default function Cart() {
//   const [items, setItems] = useState<any[]>([]);

//   useEffect(() => {
//     const raw = localStorage.getItem('cart_items');
//     try {
//       const parsed = raw ? JSON.parse(raw) : {};
//       setItems(Object.values(parsed));
//     } catch (e) {
//       setItems([]);
//     }
//   }, []);

//   function clearCart() {
//     localStorage.removeItem('cart_items');
//     setItems([]);
//   }

//   return (
//     <>
//       <Header />
//       <Page>
//         <Breadcrumbs>
//           <span>Cart</span>
//           <span>{'>'}</span>
//           <span>Contact information</span>
//           <span>{'>'}</span>
//           <span>Shipment information</span>
//         </Breadcrumbs>

//         <button onClick={clearCart}>Clear cart</button>

//         <CardList>
//           {items.length === 0 && <p>Your cart is empty</p>}
//           {items.map((it, idx) => (
//             <CartCard key={it.id || idx}>
//               <Thumb src={it.image || ''} alt={it.title} />
//               <Meta>
//                 <strong>{it.title}</strong>
//                 <span>Qty: {it.qty}</span>
//                 <span>Price: ${it.price.toFixed(2)}</span>
//               </Meta>
//             </CartCard>
//           ))}
//         </CardList>
//       </Page>
//     </>
//   )
// }
