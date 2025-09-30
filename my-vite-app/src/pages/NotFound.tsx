import Header from '../components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 80, maxWidth: 900, margin: '24px auto' }}>
        <h2>Page not found</h2>
        <p>The page you are looking for doesn't exist.</p>
      </main>
    </>
  )
}
