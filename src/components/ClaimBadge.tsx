// src/components/ClaimBadge.tsx
import type { Claim } from "../types/index";

interface ClaimBadgeProps {
  claim: Claim;
  children?: React.ReactNode;
}

const ClaimBadge: React.FC<ClaimBadgeProps> = ({ claim, children }) => {
  return (
    <div className="claim-badge">
      <p>Claim ID: {claim.id}</p>
      <p>Status: {claim.status}</p>
      {children}
    </div>
  );
};

export default ClaimBadge;