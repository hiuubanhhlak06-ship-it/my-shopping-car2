import { useState } from "react";
import "./App.css";

type Product = {
  id: number;
  name: string;
  price: number;
};

function App() {
  const [tab, setTab] = useState<"products" | "cart">("products");

  // Danh sách sản phẩm
  const products: Product[] = [
    { id: 1, name: "Áo thun", price: 150000 },
    { id: 2, name: "Quần jean", price: 350000 },
    { id: 3, name: "Giày thể thao", price: 800000 },
    { id: 4, name: "Mũ lưỡi trai", price: 120000 },
    { id: 5, name: "Balo", price: 450000 },
  ];

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>🛍️ Cửa hàng</h1>

      {/* Tabs */}
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setTab("products")}>
          Sản phẩm
        </button>
        <button onClick={() => setTab("cart")} style={{ marginLeft: 10 }}>
          Giỏ hàng ({cart.length})
        </button>
      </div>

      {/* TAB SẢN PHẨM */}
      {tab === "products" && (
        <>
          <h2>Danh sách sản phẩm</h2>
          <ul>
            {products.map((p) => (
              <li key={p.id}>
                {p.name} - {p.price.toLocaleString()} đ
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() => addToCart(p)}
                >
                  Thêm vào giỏ
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* TAB GIỎ HÀNG */}
      {tab === "cart" && (
        <>
          <h2>Giỏ hàng</h2>

          {cart.length === 0 ? (
            <p>Giỏ hàng trống</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.price.toLocaleString()} đ
                  </li>
                ))}
              </ul>

              <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;