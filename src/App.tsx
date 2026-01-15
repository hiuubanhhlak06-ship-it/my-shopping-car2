import { useState } from "react";
import "./App.css";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

function App() {
  const [tab, setTab] = useState<"products" | "cart">("products");
  const [cart, setCart] = useState<Product[]>([]);
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cod");

  const products: Product[] = [
    {
      id: 1,
      name: "Áo thun",
      price: 150000,
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      name: "Quần jean",
      price: 350000,
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      name: "Giày thể thao",
      price: 800000,
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      id: 4,
      name: "Mũ lưỡi trai",
      price: 120000,
      image: "https://picsum.photos/300/200?random=4",
    },
    {
      id: 5,
      name: "Balo",
      price: 450000,
      image: "https://picsum.photos/300/200?random=5",
    },
  ];

  // Thêm vào giỏ
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  // Xóa khỏi giỏ
  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Tổng tiền
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <header className="header">
        <h1>🛍️ Shop Online</h1>
        <button className="cart-btn" onClick={() => setTab("cart")}>
          🛒 Giỏ hàng ({cart.length})
        </button>
      </header>

      <nav className="nav">
        <button onClick={() => setTab("products")}>Trang chủ</button>
        <button onClick={() => setTab("cart")}>Giỏ hàng</button>
      </nav>

      {/* ====== DANH SÁCH SẢN PHẨM ====== */}
      {tab === "products" && (
        <>
          <h2>Danh sách sản phẩm</h2>
          <div className="product-grid">
            {products.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>{p.price.toLocaleString()} đ</p>
                <button onClick={() => addToCart(p)}>
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ====== GIỎ HÀNG ====== */}
      {tab === "cart" && (
        <>
          <h2>Giỏ hàng</h2>

          {cart.length === 0 ? (
            <p>Giỏ hàng trống</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img src={item.image} />
                    <span>{item.name}</span>
                    <span>{item.price.toLocaleString()} đ</span>
                    <button onClick={() => removeFromCart(index)}>
                      ❌
                    </button>
                  </li>
                ))}
              </ul>

              <h3>Tổng tiền: {total.toLocaleString()} đ</h3>

              {/* Địa chỉ */}
              <div className="checkout-section">
                <h3>📍 Địa chỉ giao hàng</h3>
                <textarea
                  placeholder="Nhập địa chỉ giao hàng..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              {/* Thanh toán */}
              <div className="checkout-section">
                <h3>💳 Hình thức thanh toán</h3>

                <label>
                  <input
                    type="radio"
                    value="cod"
                    checked={payment === "cod"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  Thanh toán khi nhận hàng (COD)
                </label>

                <label>
                  <input
                    type="radio"
                    value="bank"
                    checked={payment === "bank"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  Chuyển khoản ngân hàng
                </label>

                <label>
                  <input
                    type="radio"
                    value="momo"
                    checked={payment === "momo"}
                    onChange={(e) => setPayment(e.target.value)}
                  />
                  Ví MoMo
                </label>
              </div>

              <button
                className="order-btn"
                disabled={!address}
                onClick={() => {
                  alert(`
Đặt hàng thành công!
Địa chỉ: ${address}
Thanh toán: ${payment}
Tổng tiền: ${total.toLocaleString()} đ
                  `);
                  setCart([]);
                  setAddress("");
                }}
              >
                ✅ Đặt hàng
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
