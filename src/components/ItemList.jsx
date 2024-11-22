import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  return (
    <div className="cards-container">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
