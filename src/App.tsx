// src/App.tsx
import ItemCard from "./components/ItemCard";
import UserCard from "./components/UserCard";
import ClaimBadge from "./components/ClaimBadge";
import type { User, Item, Claim } from "./types/index";
import { ItemStatus, ClaimStatus } from "./types/index";

const admin: User = {
  id: 1,
  name: "Security Office",
  email: "security@campus.edu",
  role: "security_admin",
  isActive: true,
};

const student: User = {
  id: 2,
  name: "Juan dela Cruz",
  email: "juan@example.com",
  role: "student",
  isActive: true,
};

const item: Item = {
  id: 1,
  description: "Black umbrella left in Room 302",
  location: "Room 302",
  type: "found",
  reportedBy: admin.id,
  reportedAt: new Date(),
  status: ItemStatus.Open,
};

const claim: Claim = {
  id: 1,
  itemId: item.id,
  claimantId: student.id,
  submittedAt: new Date(),
  status: ClaimStatus.Pending,
};

function App() {
  return (
    <div className="app">
      <ItemCard
        item={item}
        onSelect={(i) => console.log("Selected item:", i)}
      />
      <UserCard user={student} />
      <ClaimBadge claim={claim}>
        <p>Awaiting verification</p>
      </ClaimBadge>
    </div>
  );
}

export default App;