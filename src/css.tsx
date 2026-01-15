





// import { useState } from "react";
// import "./App.css";

// type Product = {
//   name: string;
//   price: number;
// };

// function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = () => {
//     if (name === "" || price === "") {
//       alert("Vui lòng nhập đầy đủ thông tin");
//       return;
//     }

//     setCart([...cart, { name, price: Number(price) }]);
//     setName("");
//     setPrice("");
//   };

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🛒 Giỏ hàng</h1>

//       {/* Form nhập sản phẩm */}
//       <div style={{ marginBottom: 20 }}>
//         <input
//           type="text"
//           placeholder="Tên sản phẩm"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br /><br />
//         <input
//           type="number"
//           placeholder="Giá"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//         />
//         <br /><br />
//         <button onClick={addToCart}>Thêm vào giỏ</button>
//       </div>

//       {/* Danh sách giỏ hàng */}
//       <h2>Danh sách sản phẩm</h2>
//       {cart.length === 0 ? (
//         <p>Chưa có sản phẩm</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               {item.name} - {item.price.toLocaleString()} đ
//             </li>
//           ))}
//         </ul>
//       )}

//       <h3>Tổng tiền: {total.toLocaleString()} đ</h3>
//     </div>
//   );
// }


// export default App;
