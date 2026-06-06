import { NextResponse } from 'next/server';

const perfumes = [
  {
    id: "p1",
    name: "Unpatched",
    brand: "HMNS",
    type: "Local",
    notes: ["Oud", "Vanilla", "Amber"],
    vibe: "Elegant / Warm",
    age_group: "20s - 40s",
    popularity_score: 95,
    is_trending: true,
    dupe_for: "Baccarat Rouge 540",
    image_url: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=800&auto=format&fit=crop"
  },
  {
    id: "p2",
    name: "Baccarat Rouge 540",
    brand: "Maison Francis Kurkdjian",
    type: "Niche",
    notes: ["Saffron", "Jasmine", "Amberwood"],
    vibe: "Luxurious / Bold",
    age_group: "30s+",
    popularity_score: 98,
    is_trending: true,
    dupe_for: null,
    image_url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&auto=format&fit=crop"
  },
  {
    id: "p3",
    name: "Santal 33",
    brand: "Le Labo",
    type: "Niche",
    notes: ["Sandalwood", "Cedar", "Leather"],
    vibe: "Edgy / Minimalist",
    age_group: "20s - 40s",
    popularity_score: 92,
    is_trending: true,
    dupe_for: null,
    image_url: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&auto=format&fit=crop"
  },
  {
    id: "p4",
    name: "The Great Batavia",
    brand: "Project 1945",
    type: "Local",
    notes: ["Sandalwood", "Spices", "Leather"],
    vibe: "Edgy / Minimalist",
    age_group: "20s - 40s",
    popularity_score: 88,
    is_trending: false,
    dupe_for: "Santal 33",
    image_url: "https://images.unsplash.com/photo-1595425970377-c9703bc48b12?w=800&auto=format&fit=crop"
  },
  {
    id: "p5",
    name: "Chance Eau Tendre",
    brand: "Chanel",
    type: "Designer",
    notes: ["Grapefruit", "Jasmine", "White Musk"],
    vibe: "Playful / Clean Girl",
    age_group: "Teens - 20s",
    popularity_score: 90,
    is_trending: false,
    dupe_for: null,
    image_url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&auto=format&fit=crop"
  },
  {
    id: "p6",
    name: "Orphéon",
    brand: "Diptyque",
    type: "Niche",
    notes: ["Juniper Berry", "Cedar", "Tonka Bean"],
    vibe: "Sophisticated / Night Out",
    age_group: "30s+",
    popularity_score: 96,
    is_trending: true,
    dupe_for: null,
    image_url: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800&auto=format&fit=crop"
  }
];

export async function GET() {
  return NextResponse.json(perfumes);
}
