import reactLogo from "/react.svg";
import wooLogo from "/woo.svg";
import cuatro20 from "/420.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://github.com/woocommerce/woocommerce" target="_blank">
          <img src={wooLogo} className="logo" alt="Woocomerce logo" />
        </a>
      </div>
      <h1>Reactive Woo</h1> 
      <div className="card">
        <p>
          Una App <code>headless, reactive, </code> y <code> api-based </code>
          para WooCommerce.
        </p>
        <p>Hecho con mucho 💚 por el cannabis y la tecnología</p>
      </div>
      <div>
        <a href="https://cuatroveintedigital.com" target="_blank">
          <img src={cuatro20} className="cuatro20" alt="CuatroVeinte Digital" />
        </a>
      </div>
    </>
  );
}

export default App;
