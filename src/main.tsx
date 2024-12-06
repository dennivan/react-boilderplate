import '@/index.css';
import Index from '@/pages';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Index />
    </StrictMode>
);
