import type { Metadata } from 'next';
import StyledComponentsProvider from '@/styles/StyledComponentsProvider';

export const metadata: Metadata = {
  title: 'Team Gonçalves | Personal Trainer',
  description: 'Transforme seu corpo com o Anderson Gonçalves - Treinamento Personalizado.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsProvider>
          {children}
        </StyledComponentsProvider>
      </body>
    </html>
  );
}
