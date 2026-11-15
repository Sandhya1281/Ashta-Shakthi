"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  Users,
  Heart,
  Mail,
  Edit3,
  CheckCircle2,
  XCircle,
  Clock,
  Download,
  Lock,
  Unlock,
  KeyRound,
  Eye,
  Trash2,
  TrendingUp,
  FileSpreadsheet,
  RefreshCw,
  LogOut,
  Calendar,
  Image as ImageIcon,
  Plus,
  Upload
} from 'lucide-react';
import { StorageManager } from '@/lib/storage';
import { VolunteerApplication, DonationRecord, ContactMessage, ImpactMetric, EventItem, GalleryItem } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [activeTab, setActiveTab] = useState<'volunteers' | 'donations' | 'contacts' | 'metrics' | 'events' | 'gallery'>('volunteers');
  
  // Data States
  const [volunteers, setVolunteers] = useState<VolunteerApplication[]>([]);
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [metrics, setMetrics] = useState<ImpactMetric[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [eventPhoto, setEventPhoto] = useState<File | null>(null);
  const [galleryPhoto, setGalleryPhoto] = useState<File | null>(null);
  const [contentNotice, setContentNotice] = useState('');
  const [contentError, setContentError] = useState('');
  const [eventForm, setEventForm] = useState({
    title: '', category: 'Volunteer Drives' as EventItem['category'], date: '', time: '', location: '', description: '', seatsTotal: '',
  });
  const [galleryForm, setGalleryForm] = useState({
    title: '', caption: '', category: 'Food Program',
  });
  
  // Volunteer Filter & Detail View
  const [volStatusFilter, setVolStatusFilter] = useState<string>('All');
  const [selectedVol, setSelectedVol] = useState<VolunteerApplication | null>(null);

  // Editable Metric Form
  const [editingMetric, setEditingMetric] = useState<{ id: string; value: string } | null>(null);

  useEffect(() => {
    // Check local session
    const isAuth = sessionStorage.getItem('astha_admin_auth') === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
      loadAllData();
    }
  }, []);

  const loadAllData = () => {
    setVolunteers(StorageManager.getVolunteers());
    setDonations(StorageManager.getDonations());
    setContacts(StorageManager.getContacts());
    setMetrics(StorageManager.getMetrics());
    setEvents(StorageManager.getEvents());
    setGallery(StorageManager.getGalleryItems());
  };

  const optimizeImageUpload = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read the selected image.'));
    reader.onload = () => {
      const image = new window.Image();
      image.onerror = () => reject(new Error('The selected file is not a valid image.'));
      image.onload = () => {
        const scale = Math.min(1, 1400 / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext('2d');
        if (!context) return reject(new Error('Image processing is unavailable in this browser.'));
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setContentError('');
    setContentNotice('');
    try {
      const imageUrl = eventPhoto ? await optimizeImageUpload(eventPhoto) : undefined;
      StorageManager.addEvent({
        ...eventForm,
        seatsTotal: eventForm.seatsTotal ? Number(eventForm.seatsTotal) : undefined,
        seatsRemaining: eventForm.seatsTotal ? Number(eventForm.seatsTotal) : undefined,
        imageUrl,
      });
      setEventForm({ title: '', category: 'Volunteer Drives', date: '', time: '', location: '', description: '', seatsTotal: '' });
      setEventPhoto(null);
      setContentNotice('Event saved. Its status is based on the date you entered.');
      loadAllData();
    } catch (error) {
      setContentError(error instanceof Error ? error.message : 'Could not save the event. Check available browser storage.');
    }
  };

  const handleAddPhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    setContentError('');
    setContentNotice('');
    if (!galleryPhoto) {
      setContentError('Choose a photo to upload.');
      return;
    }
    try {
      const imageUrl = await optimizeImageUpload(galleryPhoto);
      StorageManager.addGalleryItem({
        ...galleryForm,
        imageUrl,
        date: new Date().toISOString().slice(0, 10),
      });
      setGalleryForm({ title: '', caption: '', category: 'Food Program' });
      setGalleryPhoto(null);
      setContentNotice('Photo added to the community gallery.');
      loadAllData();
    } catch (error) {
      setContentError(error instanceof Error ? error.message : 'Could not save the photo. Check available browser storage.');
    }
  };

  const handleRemovePhoto = (id: string) => {
    if (StorageManager.removeGalleryItem(id)) {
      setContentNotice('Uploaded photo removed from the gallery.');
      loadAllData();
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default demo passcode
    if (passcode === 'astha2026' || passcode === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('astha_admin_auth', 'true');
      setAuthError('');
      loadAllData();
    } else {
      setAuthError('Invalid passcode. Default demo passcode is: astha2026');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('astha_admin_auth');
    setPasscode('');
  };

  const handleStatusChange = (id: string, newStatus: VolunteerApplication['status']) => {
    StorageManager.updateVolunteerStatus(id, newStatus);
    loadAllData();
    if (selectedVol && selectedVol.id === id) {
      setSelectedVol({ ...selectedVol, status: newStatus });
    }
  };

  const handleToggleContact = (id: string) => {
    StorageManager.toggleContactRead(id);
    loadAllData();
  };

  const handleSaveMetric = (id: string) => {
    if (!editingMetric) return;
    StorageManager.updateMetricValue(id, editingMetric.value);
    loadAllData();
    setEditingMetric(null);
  };

  // Export Contacts to CSV
  const exportContactsCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Subject', 'Message', 'Date'];
    const rows = contacts.map(c => [
      c.id,
      `"${c.name.replace(/"/g, '""')}"`,
      `"${c.email}"`,
      `"${c.phone || ''}"`,
      `"${c.subject.replace(/"/g, '""')}"`,
      `"${c.message.replace(/"/g, '""')}"`,
      `"${c.createdAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Astha_Shakti_Contacts_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export Volunteers to CSV
  const exportVolunteersCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Age', 'City', 'Occupation', 'Interests', 'Status', 'Applied Date'];
    const rows = volunteers.map(v => [
      v.id,
      `"${v.fullName.replace(/"/g, '""')}"`,
      `"${v.email}"`,
      `"${v.phone}"`,
      `"${v.age}"`,
      `"${v.city}"`,
      `"${v.occupation.replace(/"/g, '""')}"`,
      `"${v.interests.join('; ')}"`,
      `"${v.status}"`,
      `"${v.createdAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Astha_Shakti_Volunteers_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered volunteers
  const filteredVolunteers = volStatusFilter === 'All'
    ? volunteers
    : volunteers.filter(v => v.status === volStatusFilter);

  // Total donation sum
  const totalDonationAmount = donations.reduce((sum, d) => sum + (Number(d.amount) || 0), 0);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-3xl max-w-md w-full p-8 border border-cream-300 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-saffron-500 flex items-center justify-center mx-auto shadow-md">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h1 className="font-serif font-bold text-2xl text-charcoal-900">
              Coordinator Portal
            </h1>
            <p className="text-xs text-charcoal-600">
              Restricted management area for Astha Shakti coordinators.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-charcoal-800 mb-1">
                Admin Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (Demo: astha2026)"
                  className="w-full p-3 pl-10 rounded-xl border border-cream-300 bg-cream-50/50 focus:outline-hidden focus:ring-2 focus:ring-saffron-500"
                />
                <KeyRound className="w-4 h-4 text-charcoal-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              {authError && <p className="text-[11px] text-red-600 mt-1 font-medium">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white font-bold transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" /> Unlock Admin Dashboard
            </button>
          </form>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-800">
            <strong>Demo Access:</strong> Use passcode <code>astha2026</code> to manage events and community photos, review submissions, and update metrics.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Admin Header */}
      <div className="bg-charcoal-950 text-white p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg border border-slate-800">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-400 bg-saffron-950/80 px-2.5 py-0.5 rounded border border-saffron-800">
            Astha Shakti Management Suite
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Coordinator Dashboard
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage volunteer submissions, donor inquiries, events, community photos, and homepage impact numbers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadAllData}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors flex items-center gap-1.5"
            title="Refresh records"
          >
            <RefreshCw className="w-4 h-4" /> Refresh
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 border border-red-800 text-xs font-bold transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-xs">
          <div className="flex items-center justify-between text-xs text-charcoal-500 mb-1">
            <span>Volunteers</span>
            <Users className="w-4 h-4 text-forest-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-charcoal-900">
            {volunteers.length}
          </div>
          <p className="text-[10px] text-forest-700 mt-1">
            {volunteers.filter(v => v.status === 'New').length} pending review
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-xs">
          <div className="flex items-center justify-between text-xs text-charcoal-500 mb-1">
            <span>Donations Logged</span>
            <Heart className="w-4 h-4 text-saffron-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-charcoal-900">
            {formatCurrency(totalDonationAmount)}
          </div>
          <p className="text-[10px] text-charcoal-500 mt-1">
            {donations.length} records recorded
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-xs">
          <div className="flex items-center justify-between text-xs text-charcoal-500 mb-1">
            <span>Inquiries / Messages</span>
            <Mail className="w-4 h-4 text-marigold-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-charcoal-900">
            {contacts.length}
          </div>
          <p className="text-[10px] text-amber-700 mt-1">
            {contacts.filter(c => !c.isRead).length} unread messages
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-cream-300 shadow-xs">
          <div className="flex items-center justify-between text-xs text-charcoal-500 mb-1">
            <span>Impact Metrics</span>
            <TrendingUp className="w-4 h-4 text-saffron-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-charcoal-900">
            {metrics.length}
          </div>
          <p className="text-[10px] text-charcoal-500 mt-1">
            Syncing live to Homepage
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-cream-300 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('volunteers')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 ${
            activeTab === 'volunteers'
              ? 'bg-charcoal-900 text-white'
              : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <Users className="w-4 h-4" /> Volunteer Applications ({volunteers.length})
        </button>

        <button
          onClick={() => setActiveTab('contacts')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 ${
            activeTab === 'contacts'
              ? 'bg-charcoal-900 text-white'
              : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <Mail className="w-4 h-4" /> Contact Inquiries ({contacts.length})
        </button>

        <button
          onClick={() => setActiveTab('donations')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 ${
            activeTab === 'donations'
              ? 'bg-charcoal-900 text-white'
              : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <Heart className="w-4 h-4" /> Donations Log ({donations.length})
        </button>

        <button
          onClick={() => setActiveTab('metrics')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 ${
            activeTab === 'metrics'
              ? 'bg-charcoal-900 text-white'
              : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <TrendingUp className="w-4 h-4" /> Live Impact Counters ({metrics.length})
        </button>

        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 ${
            activeTab === 'events'
              ? 'bg-charcoal-900 text-white'
              : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <Calendar className="w-4 h-4" /> Events ({events.length})
        </button>

        <button
          onClick={() => setActiveTab('gallery')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-2 ${
            activeTab === 'gallery'
              ? 'bg-charcoal-900 text-white'
              : 'bg-white text-charcoal-700 hover:bg-cream-200 border border-cream-300'
          }`}
        >
          <ImageIcon className="w-4 h-4" /> Photos ({gallery.length})
        </button>
      </div>

      {/* TAB 1: VOLUNTEERS */}
      {activeTab === 'volunteers' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-cream-200">
            <div>
              <h3 className="font-serif font-bold text-xl text-charcoal-900">
                Volunteer Applications Management
              </h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Review submitted forms, assign statuses, and download CSV roster.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={volStatusFilter}
                onChange={(e) => setVolStatusFilter(e.target.value)}
                className="p-2 rounded-xl border border-cream-300 text-xs bg-cream-50"
              >
                <option value="All">All Statuses</option>
                <option value="New">New Only</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Contacted">Contacted</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>

              <button
                onClick={exportVolunteersCSV}
                className="px-3 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Export CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-cream-300 text-charcoal-500 font-bold uppercase tracking-wider text-[10px] bg-cream-50">
                  <th className="p-3">Applicant Name</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Occupation / City</th>
                  <th className="p-3">Interests</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {filteredVolunteers.map((vol) => (
                  <tr key={vol.id} className="hover:bg-cream-50/60 transition-colors">
                    <td className="p-3 font-bold text-charcoal-900">
                      <div>{vol.fullName}</div>
                      <span className="text-[10px] text-charcoal-400 font-normal">
                        Applied: {formatDate(vol.createdAt)}
                      </span>
                    </td>
                    <td className="p-3 text-charcoal-600">
                      <div>{vol.email}</div>
                      <div>{vol.phone}</div>
                    </td>
                    <td className="p-3 text-charcoal-700">
                      <div>{vol.occupation}</div>
                      <div className="text-charcoal-500 text-[11px]">{vol.city}</div>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {vol.interests.map((it, idx) => (
                          <span key={idx} className="bg-cream-200 text-charcoal-800 text-[10px] px-1.5 py-0.5 rounded">
                            {it}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3">
                      <select
                        value={vol.status}
                        onChange={(e) => handleStatusChange(vol.id, e.target.value as VolunteerApplication['status'])}
                        className={`p-1.5 rounded-lg text-xs font-bold border ${
                          vol.status === 'New' ? 'bg-amber-50 text-amber-800 border-amber-300' :
                          vol.status === 'Accepted' ? 'bg-forest-50 text-forest-800 border-forest-300' :
                          vol.status === 'Contacted' ? 'bg-blue-50 text-blue-800 border-blue-300' :
                          vol.status === 'Reviewed' ? 'bg-purple-50 text-purple-800 border-purple-300' :
                          'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => setSelectedVol(vol)}
                        className="p-1.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-charcoal-800 font-semibold text-[11px] flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" /> Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: CONTACT MESSAGES */}
      {activeTab === 'contacts' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-cream-200">
            <div>
              <h3 className="font-serif font-bold text-xl text-charcoal-900">
                Contact Inquiries & Messages
              </h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Review website inquiries from prospective donors, volunteers, and CSR teams.
              </p>
            </div>

            <button
              onClick={exportContactsCSV}
              className="px-3 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export Contacts to CSV
            </button>
          </div>

          <div className="space-y-4">
            {contacts.map((msg) => (
              <div
                key={msg.id}
                className={`p-5 rounded-2xl border transition-all ${
                  msg.isRead ? 'bg-cream-50/60 border-cream-200' : 'bg-white border-saffron-300 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-charcoal-900 text-sm">
                        {msg.name}
                      </span>
                      <span className="text-xs text-charcoal-500">
                        ({msg.email} {msg.phone ? `• ${msg.phone}` : ''})
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-saffron-800 mt-0.5">
                      Subject: {msg.subject}
                    </h4>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-charcoal-400">
                      {formatDate(msg.createdAt)}
                    </span>
                    <button
                      onClick={() => handleToggleContact(msg.id)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg font-bold border transition-colors ${
                        msg.isRead ? 'bg-cream-200 text-charcoal-700' : 'bg-saffron-600 text-white'
                      }`}
                    >
                      {msg.isRead ? 'Mark Unread' : 'Mark as Read'}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-charcoal-700 bg-white p-3 rounded-xl border border-cream-200 mt-2 leading-relaxed">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: DONATIONS */}
      {activeTab === 'donations' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-6">
          <div className="pb-4 border-b border-cream-200">
            <h3 className="font-serif font-bold text-xl text-charcoal-900">
              Donation Records & 80G Receipts
            </h3>
            <p className="text-xs text-charcoal-600 mt-0.5">
              Simulated & gateway verified contributions logged by donors.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-cream-300 text-charcoal-500 font-bold uppercase tracking-wider text-[10px] bg-cream-50">
                  <th className="p-3">Receipt / Txn ID</th>
                  <th className="p-3">Donor Name</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Allocated Cause</th>
                  <th className="p-3">PAN</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200">
                {donations.map((don) => (
                  <tr key={don.id} className="hover:bg-cream-50/60 transition-colors">
                    <td className="p-3">
                      <div className="font-mono font-bold text-saffron-800">{don.receiptNumber}</div>
                      <span className="text-[10px] text-charcoal-400 font-mono">{don.transactionId}</span>
                    </td>
                    <td className="p-3 font-bold text-charcoal-900">
                      <div>{don.donorName}</div>
                      <span className="text-[10px] text-charcoal-500 font-normal">{don.email}</span>
                    </td>
                    <td className="p-3 font-serif font-bold text-sm text-charcoal-900">
                      {formatCurrency(don.amount)}
                      <span className="block text-[10px] text-charcoal-500 font-normal capitalize">
                        ({don.donationType})
                      </span>
                    </td>
                    <td className="p-3 text-charcoal-700">{don.purpose}</td>
                    <td className="p-3 font-mono text-charcoal-600">{don.pan || 'N/A'}</td>
                    <td className="p-3">
                      <span className="bg-forest-100 text-forest-800 px-2 py-0.5 rounded text-[10px] font-bold">
                        {don.paymentStatus}
                      </span>
                    </td>
                    <td className="p-3 text-charcoal-500">{formatDate(don.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: LIVE IMPACT METRICS */}
      {activeTab === 'metrics' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-6">
          <div className="pb-4 border-b border-cream-200">
            <h3 className="font-serif font-bold text-xl text-charcoal-900">
              Live Homepage Impact Counters
            </h3>
            <p className="text-xs text-charcoal-600 mt-0.5">
              Update these numbers based on verified organizational registers. Changes reflect immediately across the entire site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.id} className="p-5 rounded-2xl border border-cream-300 bg-cream-50/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-charcoal-800">{m.label}</span>
                  <span className="text-[10px] uppercase font-bold text-saffron-700 bg-saffron-50 px-2 py-0.5 rounded">
                    Category: {m.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {editingMetric && editingMetric.id === m.id ? (
                    <div className="flex items-center gap-2 flex-1">
                      <input
                        type="text"
                        value={editingMetric.value}
                        onChange={(e) => setEditingMetric({ ...editingMetric, value: e.target.value })}
                        className="p-2 rounded-xl border border-saffron-500 text-sm font-serif font-bold w-32 bg-white"
                      />
                      <button
                        onClick={() => handleSaveMetric(m.id)}
                        className="px-3 py-2 rounded-xl bg-forest-800 text-white font-bold text-xs"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingMetric(null)}
                        className="px-3 py-2 rounded-xl bg-cream-200 text-charcoal-700 text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <div className="text-2xl font-serif font-black text-charcoal-900">
                        {m.prefix}{m.value}{m.suffix}
                      </div>
                      <button
                        onClick={() => setEditingMetric({ id: m.id, value: m.value })}
                        className="px-3 py-1.5 rounded-xl bg-cream-200 hover:bg-cream-300 text-charcoal-800 text-xs font-semibold flex items-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5" /> Edit Value
                      </button>
                    </div>
                  )}
                </div>

                <p className="text-[11px] text-charcoal-500">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-6">
          <div className="pb-4 border-b border-cream-200">
            <h3 className="font-serif font-bold text-xl text-charcoal-900">Community Events</h3>
            <p className="text-xs text-charcoal-600 mt-1">Add an event with its date and details. Past dates are automatically marked completed and cannot accept registrations.</p>
          </div>

          <form onSubmit={handleAddEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <label className="space-y-1">
              <span className="font-bold text-charcoal-800">Event name *</span>
              <input required value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50" placeholder="e.g. Community meal and learning day" />
            </label>
            <label className="space-y-1">
              <span className="font-bold text-charcoal-800">Program category *</span>
              <select value={eventForm.category} onChange={(e) => setEventForm({ ...eventForm, category: e.target.value as EventItem['category'] })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50">
                <option>Volunteer Drives</option><option>Workshops</option><option>Awareness Programs</option><option>Educational Activities</option><option>Community Events</option>
              </select>
            </label>
            <label className="space-y-1">
              <span className="font-bold text-charcoal-800">Date *</span>
              <input required type="date" value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50" />
            </label>
            <label className="space-y-1">
              <span className="font-bold text-charcoal-800">Time *</span>
              <input required value={eventForm.time} onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50" placeholder="e.g. 9:00 AM – 1:00 PM" />
            </label>
            <label className="space-y-1 md:col-span-2">
              <span className="font-bold text-charcoal-800">Location *</span>
              <input required value={eventForm.location} onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50" placeholder="Venue and area" />
            </label>
            <label className="space-y-1 md:col-span-2">
              <span className="font-bold text-charcoal-800">Description *</span>
              <textarea required rows={3} value={eventForm.description} onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50 resize-y" placeholder="What will happen at this event?" />
            </label>
            <label className="space-y-1">
              <span className="font-bold text-charcoal-800">Volunteer capacity (optional)</span>
              <input type="number" min="1" value={eventForm.seatsTotal} onChange={(e) => setEventForm({ ...eventForm, seatsTotal: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50" placeholder="e.g. 25" />
            </label>
            <label className="space-y-1">
              <span className="font-bold text-charcoal-800">Cover photo (optional)</span>
              <input key={eventPhoto ? eventPhoto.name : 'event-photo-empty'} type="file" accept="image/*" onChange={(e) => setEventPhoto(e.target.files?.[0] ?? null)} className="w-full p-2 rounded-xl border border-cream-300 bg-cream-50" />
            </label>
            <div className="md:col-span-2">
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold">
                <Plus className="w-4 h-4" /> Add Event
              </button>
            </div>
          </form>

          {contentNotice && <p role="status" className="rounded-xl bg-forest-50 border border-forest-200 p-3 text-xs text-forest-800">{contentNotice}</p>}
          {contentError && <p role="alert" className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700">{contentError}</p>}

          <div className="space-y-3">
            <h4 className="font-bold text-sm text-charcoal-900">Posted events ({events.length})</h4>
            {[...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((event) => (
              <div key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-2xl border border-cream-200 bg-cream-50">
                <div>
                  <p className="font-bold text-sm text-charcoal-900">{event.title}</p>
                  <p className="text-[11px] text-charcoal-600">{new Date(event.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · {event.location}</p>
                </div>
                <span className={`self-start sm:self-auto px-2.5 py-1 rounded-lg text-[10px] font-bold ${event.status === 'COMPLETED' ? 'bg-cream-200 text-charcoal-700' : 'bg-forest-100 text-forest-800'}`}>{event.status}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-3">This project currently saves admin changes in this browser. A shared database is needed for updates to appear on other devices and visitors’ browsers.</p>
        </section>
      )}

      {activeTab === 'gallery' && (
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-sm space-y-6">
          <div className="pb-4 border-b border-cream-200">
            <h3 className="font-serif font-bold text-xl text-charcoal-900">Community Photo Gallery</h3>
            <p className="text-xs text-charcoal-600 mt-1">Upload a photo, add an accurate caption, and choose the program category. Large photos are resized before saving.</p>
          </div>

          <form onSubmit={handleAddPhoto} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <label className="space-y-1">
              <span className="font-bold text-charcoal-800">Photo title *</span>
              <input required value={galleryForm.title} onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50" placeholder="Short title" />
            </label>
            <label className="space-y-1">
              <span className="font-bold text-charcoal-800">Program category *</span>
              <select value={galleryForm.category} onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50">
                <option>Food Program</option><option>Education Program</option><option>Resource Development & Quality Education</option><option>Internship Programs</option><option>COVID-19 Support Initiatives</option><option>Environment Programs</option><option>Felicitation & Recognitions</option><option>Programs for Special Children</option><option>Community Programs</option><option>Community Highlights</option>
              </select>
            </label>
            <label className="space-y-1 md:col-span-2">
              <span className="font-bold text-charcoal-800">Caption *</span>
              <textarea required rows={2} value={galleryForm.caption} onChange={(e) => setGalleryForm({ ...galleryForm, caption: e.target.value })} className="w-full p-3 rounded-xl border border-cream-300 bg-cream-50 resize-y" placeholder="Describe what is happening in the photo" />
            </label>
            <label className="space-y-1 md:col-span-2">
              <span className="font-bold text-charcoal-800">Photo file *</span>
              <input key={galleryPhoto ? galleryPhoto.name : 'gallery-photo-empty'} required type="file" accept="image/*" onChange={(e) => setGalleryPhoto(e.target.files?.[0] ?? null)} className="w-full p-2 rounded-xl border border-cream-300 bg-cream-50" />
            </label>
            <div className="md:col-span-2">
              <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold">
                <Upload className="w-4 h-4" /> Add Photo
              </button>
            </div>
          </form>

          {contentNotice && <p role="status" className="rounded-xl bg-forest-50 border border-forest-200 p-3 text-xs text-forest-800">{contentNotice}</p>}
          {contentError && <p role="alert" className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700">{contentError}</p>}

          <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-xl p-3">Photos and event updates are saved to this browser in this project prototype. They will not sync to other devices until a shared backend is connected.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((photo) => (
              <article key={photo.id} className="overflow-hidden rounded-2xl border border-cream-200 bg-white">
                <div className="relative aspect-square bg-cream-100">
                  <img src={photo.imageUrl} alt={photo.caption} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-3 space-y-1">
                  <p className="font-bold text-xs text-charcoal-900 line-clamp-1">{photo.title}</p>
                  <p className="text-[10px] text-charcoal-500 line-clamp-2">{photo.category} · {photo.caption}</p>
                  {photo.id.startsWith('photo-') && (
                    <button type="button" onClick={() => handleRemovePhoto(photo.id)} className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-red-700 hover:text-red-900">
                      <Trash2 className="w-3 h-3" /> Remove upload
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Volunteer Application Detail Modal */}
      {selectedVol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-cream-300 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-charcoal-900">
                  {selectedVol.fullName}
                </h3>
                <p className="text-xs text-charcoal-500">
                  {selectedVol.occupation} • {selectedVol.city} (Age: {selectedVol.age})
                </p>
              </div>
              <button
                onClick={() => setSelectedVol(null)}
                className="p-1 rounded-lg hover:bg-cream-100 text-charcoal-500"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs text-charcoal-700 bg-cream-50 p-4 rounded-2xl border border-cream-200">
              <div>
                <strong>Contact:</strong> {selectedVol.email} | {selectedVol.phone}
              </div>
              <div>
                <strong>Availability:</strong> {selectedVol.availability}
              </div>
              <div>
                <strong>Interests:</strong> {selectedVol.interests.join(', ')}
              </div>
              {selectedVol.skills && (
                <div>
                  <strong>Skills:</strong> {selectedVol.skills}
                </div>
              )}
              {selectedVol.experience && (
                <div>
                  <strong>Past Experience:</strong> {selectedVol.experience}
                </div>
              )}
              {selectedVol.resumeFileName && (
                <div className="flex items-center gap-1.5 text-forest-800 font-semibold">
                  <span>Attached File: {selectedVol.resumeFileName}</span>
                </div>
              )}
            </div>

            <div className="space-y-1 text-xs">
              <strong className="block text-charcoal-800">Motivation for Volunteering:</strong>
              <p className="bg-white p-3 rounded-xl border border-cream-200 text-charcoal-600 leading-relaxed italic">
                “{selectedVol.motivation}”
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-cream-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-charcoal-700">Set Status:</span>
                <select
                  value={selectedVol.status}
                  onChange={(e) => handleStatusChange(selectedVol.id, e.target.value as VolunteerApplication['status'])}
                  className="p-1.5 rounded-lg border border-cream-300 text-xs font-bold bg-white"
                >
                  <option value="New">New</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <button
                onClick={() => setSelectedVol(null)}
                className="px-4 py-2 rounded-xl bg-charcoal-900 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
