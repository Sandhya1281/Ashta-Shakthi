export type VolunteerStatus = 'New' | 'Reviewed' | 'Contacted' | 'Accepted' | 'Rejected';

export interface VolunteerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  age: string;
  city: string;
  occupation: string;
  interests: string[];
  availability: string;
  skills: string;
  experience?: string;
  motivation: string;
  resumeFileName?: string;
  consent: boolean;
  status: VolunteerStatus;
  createdAt: string;
  notes?: string;
}

export interface DonationRecord {
  id: string;
  donationType: 'one-time' | 'monthly';
  amount: number;
  purpose: string;
  donorName: string;
  email: string;
  phone: string;
  city: string;
  pan?: string;
  message?: string;
  isAnonymous?: boolean;
  paymentStatus: 'COMPLETED_DEMO' | 'SUCCESS_GATEWAY' | 'PENDING';
  transactionId: string;
  receiptNumber: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  description: string;
  isEditablePlaceholder: boolean;
  category: 'nutrition' | 'education' | 'community' | 'general';
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string[];
  category: string;
  location: string;
  impactMetrics?: { label: string; value: string }[];
  quote?: string;
  quoteAuthor?: string;
  imageUrl: string;
  imageCaption: string;
  publishedDate: string;
  isPlaceholderDetail: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Education' | 'Nutrition' | 'Volunteers' | 'Events' | 'Skill Development' | 'Children' | 'Community Programs';
  imageUrl: string;
  date: string;
  location?: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Workshops' | 'Awareness Programs' | 'Volunteer Drives' | 'Educational Activities' | 'Community Events';
  date: string;
  time: string;
  location: string;
  description: string;
  seatsTotal?: number;
  seatsRemaining?: number;
  imageUrl: string;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
}

export interface EventRegistration {
  id: string;
  eventId: string;
  eventTitle: string;
  fullName: string;
  email: string;
  phone: string;
  attendeesCount: number;
  createdAt: string;
}
