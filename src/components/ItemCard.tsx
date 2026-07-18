// src/components/ItemCard.tsx (updated)
import type { Item } from "../types/index";

interface ItemCardProps {
  item: Item;
  onSelect: (item: Item) => void;
}

function ItemCard({ item, onSelect }: ItemCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    onSelect(item);
  };

  // Demo only -- shows the typed onChange pattern, not wired to real state
  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log("Note:", e.target.value);
  };

  return (
    <div className="item-card">
      <h3>{item.description}</h3>
      <p>Location: {item.location}</p>
      <p>Type: {item.type}</p>
      <button onClick={handleClick}>Select</button>
      <input onChange={handleNoteChange} placeholder="Quick note (demo only)" />
    </div>
  );
}

export default ItemCard;