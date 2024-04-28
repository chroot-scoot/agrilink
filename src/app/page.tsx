'use client';
import React from 'react';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { NavbarDemo } from './(layout)/components/navbar-landing';

export default function HeroParallaxDemo() {
  return (
    <div className="flex flex-col">
      <NavbarDemo />
      <HeroParallax products={products} />
    </div>
  );
}
export const products = [
  {
    title: 'Moonbeam',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h52m24s_screenshot.png?t=2024-04-28T01%3A29%3A49.691Z',
  },
  {
    title: 'Cursor',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h53m57s_screenshot.png?t=2024-04-28T01%3A30%3A32.321Z',
  },
  {
    title: 'Rogue',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h53m57s_screenshot.png?t=2024-04-28T01%3A30%3A32.321Z',
  },

  {
    title: 'Editorially',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h55m48s_screenshot.png?t=2024-04-28T01%3A36%3A06.837Z',
  },
  {
    title: 'Editrix AI',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/jake-gard-CetB-bTDBtY-unsplash.jpg?t=2024-04-28T01%3A37%3A00.831Z',
  },
  {
    title: 'Pixel Perfect',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h56m22s_screenshot.png?t=2024-04-28T01%3A36%3A27.008Z',
  },
  {
    title: 'Aceternity UI',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/background-art-one.jpg?t=2024-04-28T01%3A36%3A36.229Z',
  },
  {
    title: 'Tailwind Master Kit',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h55m48s_screenshot.png?t=2024-04-28T01%3A36%3A06.837Z',
  },
  {
    title: 'SmartBridge',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h53m57s_screenshot.png?t=2024-04-28T01%3A30%3A32.321Z',
  },
  {
    title: 'Renderwork Studio',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h52m24s_screenshot.png?t=2024-04-28T01%3A29%3A49.691Z',
  },

  {
    title: 'Creme Digital',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h55m48s_screenshot.png?t=2024-04-28T01%3A36%3A06.837Z',
  },
  {
    title: 'Golden Bells Academy',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/background-art-one.jpg?t=2024-04-28T01%3A36%3A36.229Z',
  },
  {
    title: 'Invoker Labs',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h55m48s_screenshot.png?t=2024-04-28T01%3A36%3A06.837Z',
  },
  {
    title: 'E Free Invoice',
    link: '/auth/login',
    thumbnail:
      'https://khsvweruovpppinstuvf.supabase.co/storage/v1/object/public/se-hack-screenshots/240428_06h55m48s_screenshot.png?t=2024-04-28T01%3A36%3A06.837Z',
  },
];
