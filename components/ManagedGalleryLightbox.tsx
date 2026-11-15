"use client";

import { useEffect, useState } from 'react';
import GalleryLightbox from '@/components/GalleryLightbox';
import { StorageManager } from '@/lib/storage';
import { GalleryItem } from '@/lib/types';

interface ManagedGalleryLightboxProps {
  initialItems: GalleryItem[];
  limit?: number;
}

export default function ManagedGalleryLightbox({ initialItems, limit }: ManagedGalleryLightboxProps) {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const managedItems = StorageManager.getGalleryItems();
    setItems(limit ? managedItems.slice(0, limit) : managedItems);
  }, [limit]);

  return <GalleryLightbox items={items} initialCategory="All" />;
}
