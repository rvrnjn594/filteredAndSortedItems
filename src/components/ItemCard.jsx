import "../App.css";

export default function ItemCard({ item }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <p>Date Added: {item.dateAdded}</p>
    </div>
  );
}
