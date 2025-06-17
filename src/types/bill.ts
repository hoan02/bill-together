export interface Bill {
  id: string;
  organizationId: string;
  title: string;
  description?: string;
  totalAmount: string; // decimal dạng string
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BillItem {
  id: string;
  billId: string;
  name: string;
  amount: string; // decimal dạng string
  createdAt: Date;
  updatedAt: Date;
}

export interface BillItemShare {
  id: string;
  billItemId: string;
  userId: string;
  amount: string; // decimal dạng string
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
} 