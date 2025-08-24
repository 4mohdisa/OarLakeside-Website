import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import MenuPageContent from '@/components/menu-page-content';

export const metadata: Metadata = siteMetadata['/menu'];

export default function MenuPage() {
  return <MenuPageContent />;
}
