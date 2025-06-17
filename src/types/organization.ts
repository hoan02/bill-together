export interface Organization {
  id: string;
  name: string;
  description?: string;
  slug?: string;
  logo?: string;
  createdAt: Date;
  metadata?: { plan?: string };
  inviteCode?: string;
  createdById?: string;
  // Thêm các trường khác nếu cần
} 