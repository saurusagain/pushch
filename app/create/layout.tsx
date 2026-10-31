import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Input ID Channel & Generate JSON (/create)',
  description:
    'Formulir input nama dan ID channel WhatsApp (@newsletter) untuk update /idch.json secara rapi tanpa duplikasi nama.',
  openGraph: {
    title: 'Input ID Channel & Generate JSON (/create) - By saurus',
    description:
      'Formulir input nama dan ID channel WhatsApp (@newsletter) untuk update /idch.json secara rapi tanpa duplikasi nama.',
  },
};

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
