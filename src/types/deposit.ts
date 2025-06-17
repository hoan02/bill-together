export interface Deposit {
  id: string;
  organizationId: string;
  userId: string;
  amount: string; // decimal dạng string
  createdAt: Date;
  updatedAt: Date;
} 