import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import FunctionsPageContent from '@/components/functions-page-content';

export const metadata: Metadata = siteMetadata['/functions'];

export default function FunctionsPage() {
  return <FunctionsPageContent />;
}
