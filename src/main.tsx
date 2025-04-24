import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";

import './styles.css';
import Layout from './layout/layout';
import DocumentScannerPage from './pages/document-scanner';
import SignStampPage from './pages/sign-stamp';
import BatchScanningPage from './pages/batch-scanning';
import AdvancedFiltersPage from './pages/advanced-filters';
import ExportSharePage from './pages/export-share';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DocumentScannerPage />} />
          <Route path="/sign-stamp" element={<SignStampPage />} />
          <Route path="/batch-scanning" element={<BatchScanningPage />} />
          <Route path="/advanced-filters" element={<AdvancedFiltersPage />} />
          <Route path="/export-share" element={<ExportSharePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
