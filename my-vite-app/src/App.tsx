import { Routes, Route, useLocation, matchRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export default function App() {
  const loc = useLocation();
  // small on-page visual debug so you don't need the console
  // shows current pathname and whether /cart matches
  // keep these during diagnosis; we can remove after verification
  console.log('ROUTER: current location ->', loc.pathname);
  const checks = matchRoutes([
    { path: '/' },
    { path: '/cart' },
  ], loc);
  console.log('matchRoutes result ->', checks);

  return (
    <div>
      <div style={{ position: 'fixed', right: 12, bottom: 12, padding: '6px 10px', background: 'rgba(0,0,0,0.7)', color: '#fff', borderRadius: 6, zIndex: 9999 }}>
        <div style={{ fontSize: 12 }}>pathname: {loc.pathname}</div>
        <div style={{ fontSize: 11, opacity: 0.9 }}>matched: {checks ? 'yes' : 'no'}</div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart-test" element={<div style={{ paddingTop: 100, textAlign: 'center' }}><h2>/cart-test matched</h2><p>If you see this, route matching works.</p></div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}