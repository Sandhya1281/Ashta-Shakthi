import { VolunteerApplication, DonationRecord, ContactMessage, ImpactMetric, EventRegistration, EventItem, GalleryItem } from './types';
import { INITIAL_IMPACT_METRICS, UPCOMING_EVENTS, GALLERY_ITEMS } from './data';

const VOLUNTEERS_KEY = 'astha_shakti_volunteers_v1';
const DONATIONS_KEY = 'astha_shakti_donations_v1';
const CONTACTS_KEY = 'astha_shakti_contacts_v1';
const METRICS_KEY = 'astha_shakti_metrics_v1';
const EVENT_REGS_KEY = 'astha_shakti_event_regs_v1';
const EVENTS_KEY = 'astha_shakti_events_v1';
const GALLERY_KEY = 'astha_shakti_gallery_v1';

function isPastEvent(date: string): boolean {
  const eventDate = new Date(date);
  if (Number.isNaN(eventDate.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  return eventDate < today;
}

function updateEventStatuses(events: EventItem[]): EventItem[] {
  return events.map((event) => ({
    ...event,
    status: isPastEvent(event.date) ? 'COMPLETED' : event.status,
  }));
}

// Seed demo submissions if empty so admin is immediately vibrant and demonstrable
const SEED_VOLUNTEERS: VolunteerApplication[] = [
  {
    id: 'vol-101',
    fullName: 'Ananya Sharma',
    email: 'ananya.s@example.com',
    phone: '+91 98765 43210',
    age: '22',
    city: 'Bengaluru (Koramangala)',
    occupation: 'Engineering Student, RVCE',
    interests: ['Teaching', 'Social Media', 'Content Creation'],
    availability: 'Weekends (Saturday & Sunday mornings)',
    skills: 'English storytelling, basic math tutoring, graphic design in Canva',
    experience: 'Previous volunteer mentor at local community literacy camp.',
    motivation: 'I deeply believe every child deserves breakfast before being asked to learn algebra. Astha Shakti’s Nutri-Ed approach directly resonates with me.',
    resumeFileName: 'Ananya_Sharma_Profile.pdf',
    consent: true,
    status: 'New',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'vol-102',
    fullName: 'Rohit Kulkarni',
    email: 'rohit.kulkarni@example.com',
    phone: '+91 99887 76655',
    age: '29',
    city: 'Bengaluru (JP Nagar)',
    occupation: 'Software Engineer',
    interests: ['Technology', 'Event Support', 'Fundraising'],
    availability: 'Flexible weekends & weekday evenings',
    skills: 'Web maintenance, logistics management, photo/video documentation',
    experience: 'Organized neighborhood food donation drives.',
    motivation: 'Living near JP Nagar 6th phase, I want to actively give back to children in nearby underserved clusters.',
    resumeFileName: 'Rohit_Resume_2024.pdf',
    consent: true,
    status: 'Reviewed',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    notes: 'Contacted for upcoming weekend Nutri-Ed drive.'
  }
];

const SEED_DONATIONS: DonationRecord[] = [
  {
    id: 'don-1001',
    donationType: 'monthly',
    amount: 1200,
    purpose: 'Nutrition + Learning Kit',
    donorName: 'Priya Sundaram',
    email: 'priya.s@example.com',
    phone: '+91 98451 12233',
    city: 'Bengaluru',
    pan: 'ABCDE1234F',
    message: 'Happy to support children’s daily nutrition and education!',
    paymentStatus: 'COMPLETED_DEMO',
    transactionId: 'TXN_ASTHA_9847281',
    receiptNumber: 'ASTHA/2024-25/0842',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'don-1002',
    donationType: 'one-time',
    amount: 5000,
    purpose: 'Classroom Nutri-Ed Sponsorship',
    donorName: 'Vikram Mehta',
    email: 'vikram.m@example.com',
    phone: '+91 97312 88441',
    city: 'Mumbai',
    pan: 'WXYZP9876Q',
    message: 'Keep up the wonderful work for the children.',
    paymentStatus: 'COMPLETED_DEMO',
    transactionId: 'TXN_ASTHA_9847299',
    receiptNumber: 'ASTHA/2024-25/0843',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  }
];

const SEED_CONTACTS: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Deepak Rao',
    email: 'deepak.rao@example.com',
    phone: '+91 94480 12345',
    subject: 'CSR Partnership & Meal Sponsorship for School',
    message: 'Hello Astha Shakti team, our corporate employee engagement wing would love to sponsor monthly meal drives and volunteer at your learning center. Please let us know how we can coordinate a visit.',
    isRead: false,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: 'msg-2',
    name: 'Dr. Meera Nambiar',
    email: 'meera.n@example.com',
    phone: '+91 98860 55443',
    subject: 'Pro-bono Pediatric Screening Camps',
    message: 'I am a pediatrician in South Bengaluru. I would like to offer free monthly health check-ups and nutritional growth monitoring for the children at your center.',
    isRead: true,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Helper functions for safe browser localStorage interaction
export const StorageManager = {
  // Volunteers
  getVolunteers: (): VolunteerApplication[] => {
    if (typeof window === 'undefined') return SEED_VOLUNTEERS;
    const stored = localStorage.getItem(VOLUNTEERS_KEY);
    if (!stored) {
      localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(SEED_VOLUNTEERS));
      return SEED_VOLUNTEERS;
    }
    try {
      return JSON.parse(stored);
    } catch {
      return SEED_VOLUNTEERS;
    }
  },

  addVolunteer: (volunteer: Omit<VolunteerApplication, 'id' | 'createdAt' | 'status'>): VolunteerApplication => {
    const list = StorageManager.getVolunteers();
    const newVol: VolunteerApplication = {
      ...volunteer,
      id: `vol-${Date.now().toString().slice(-6)}`,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    const updated = [newVol, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(updated));
    }
    return newVol;
  },

  updateVolunteerStatus: (id: string, status: VolunteerApplication['status'], notes?: string): boolean => {
    const list = StorageManager.getVolunteers();
    const index = list.findIndex(v => v.id === id);
    if (index === -1) return false;
    list[index].status = status;
    if (notes !== undefined) {
      list[index].notes = notes;
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem(VOLUNTEERS_KEY, JSON.stringify(list));
    }
    return true;
  },

  // Donations
  getDonations: (): DonationRecord[] => {
    if (typeof window === 'undefined') return SEED_DONATIONS;
    const stored = localStorage.getItem(DONATIONS_KEY);
    if (!stored) {
      localStorage.setItem(DONATIONS_KEY, JSON.stringify(SEED_DONATIONS));
      return SEED_DONATIONS;
    }
    try {
      return JSON.parse(stored);
    } catch {
      return SEED_DONATIONS;
    }
  },

  addDonation: (donation: Omit<DonationRecord, 'id' | 'transactionId' | 'receiptNumber' | 'createdAt'>): DonationRecord => {
    const list = StorageManager.getDonations();
    const now = new Date();
    const randomHex = Math.floor(100000 + Math.random() * 900000);
    const newDonation: DonationRecord = {
      ...donation,
      id: `don-${Date.now().toString().slice(-6)}`,
      transactionId: `TXN_DEMO_${randomHex}`,
      receiptNumber: `ASTHA/${now.getFullYear()}-${(now.getFullYear()+1).toString().slice(-2)}/${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: now.toISOString()
    };
    const updated = [newDonation, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem(DONATIONS_KEY, JSON.stringify(updated));
    }
    return newDonation;
  },

  // Contact Messages
  getContacts: (): ContactMessage[] => {
    if (typeof window === 'undefined') return SEED_CONTACTS;
    const stored = localStorage.getItem(CONTACTS_KEY);
    if (!stored) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(SEED_CONTACTS));
      return SEED_CONTACTS;
    }
    try {
      return JSON.parse(stored);
    } catch {
      return SEED_CONTACTS;
    }
  },

  addContact: (contact: Omit<ContactMessage, 'id' | 'isRead' | 'createdAt'>): ContactMessage => {
    const list = StorageManager.getContacts();
    const newMsg: ContactMessage = {
      ...contact,
      id: `msg-${Date.now().toString().slice(-6)}`,
      isRead: false,
      createdAt: new Date().toISOString()
    };
    const updated = [newMsg, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(updated));
    }
    return newMsg;
  },

  toggleContactRead: (id: string): boolean => {
    const list = StorageManager.getContacts();
    const item = list.find(m => m.id === id);
    if (!item) return false;
    item.isRead = !item.isRead;
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(list));
    }
    return true;
  },

  // Impact Metrics
  getMetrics: (): ImpactMetric[] => {
    if (typeof window === 'undefined') return INITIAL_IMPACT_METRICS;
    const stored = localStorage.getItem(METRICS_KEY);
    if (!stored) {
      localStorage.setItem(METRICS_KEY, JSON.stringify(INITIAL_IMPACT_METRICS));
      return INITIAL_IMPACT_METRICS;
    }
    try {
      return JSON.parse(stored);
    } catch {
      return INITIAL_IMPACT_METRICS;
    }
  },

  updateMetricValue: (id: string, value: string): boolean => {
    const list = StorageManager.getMetrics();
    const item = list.find(m => m.id === id);
    if (!item) return false;
    item.value = value;
    if (typeof window !== 'undefined') {
      localStorage.setItem(METRICS_KEY, JSON.stringify(list));
    }
    return true;
  },

  // Events managed by the community coordinator in this browser
  getEvents: (): EventItem[] => {
    if (typeof window === 'undefined') return updateEventStatuses(UPCOMING_EVENTS);
    const stored = localStorage.getItem(EVENTS_KEY);
    let events = UPCOMING_EVENTS;
    if (stored) {
      try {
        events = JSON.parse(stored) as EventItem[];
      } catch {
        events = UPCOMING_EVENTS;
      }
    }
    const currentEvents = updateEventStatuses(events);
    localStorage.setItem(EVENTS_KEY, JSON.stringify(currentEvents));
    return currentEvents;
  },

  addEvent: (event: Omit<EventItem, 'id' | 'status'>): EventItem => {
    const list = StorageManager.getEvents();
    const newEvent: EventItem = {
      ...event,
      id: `event-${Date.now()}`,
      status: isPastEvent(event.date) ? 'COMPLETED' : 'UPCOMING',
    };
    localStorage.setItem(EVENTS_KEY, JSON.stringify([newEvent, ...list]));
    return newEvent;
  },

  // Community photo gallery managed by the coordinator
  getGalleryItems: (): GalleryItem[] => {
    if (typeof window === 'undefined') return GALLERY_ITEMS;
    const stored = localStorage.getItem(GALLERY_KEY);
    if (!stored) {
      localStorage.setItem(GALLERY_KEY, JSON.stringify(GALLERY_ITEMS));
      return GALLERY_ITEMS;
    }
    try {
      return JSON.parse(stored) as GalleryItem[];
    } catch {
      return GALLERY_ITEMS;
    }
  },

  addGalleryItem: (item: Omit<GalleryItem, 'id'>): GalleryItem => {
    const list = StorageManager.getGalleryItems();
    const newItem: GalleryItem = { ...item, id: `photo-${Date.now()}` };
    localStorage.setItem(GALLERY_KEY, JSON.stringify([newItem, ...list]));
    return newItem;
  },

  removeGalleryItem: (id: string): boolean => {
    const list = StorageManager.getGalleryItems();
    if (!id.startsWith('photo-')) return false;
    localStorage.setItem(GALLERY_KEY, JSON.stringify(list.filter((item) => item.id !== id)));
    return true;
  },

  // Event Registrations
  getEventRegistrations: (): EventRegistration[] => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(EVENT_REGS_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  },

  addEventRegistration: (reg: Omit<EventRegistration, 'id' | 'createdAt'>): EventRegistration => {
    const list = StorageManager.getEventRegistrations();
    const newReg: EventRegistration = {
      ...reg,
      id: `reg-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString()
    };
    const updated = [newReg, ...list];
    if (typeof window !== 'undefined') {
      localStorage.setItem(EVENT_REGS_KEY, JSON.stringify(updated));
    }
    return newReg;
  }
};
