import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1>Estructura de Carpetas Exitosa</h1>
        <p>Este proyecto demuestra la organización profesional de archivos.</p>
        
        <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
          <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <h3>📂 /src/components</h3>
            <p>Contiene el Navbar (reutilizable).</p>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <h3>📂 /src/pages</h3>
            <p>Contiene esta vista (Home.jsx).</p>
          </div>
        </div>
      </div>
    </div>
  );
}
