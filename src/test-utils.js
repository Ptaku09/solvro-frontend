import React from 'react';
import { render } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import AppProvidersWithoutTemplate from 'providers/AppProvidersWithoutTemplate';

const AllTheProviders = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};

const ProvidersWithoutTemplate = ({ children }) => {
  return <AppProvidersWithoutTemplate>{children}</AppProvidersWithoutTemplate>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });
const customRenderWithoutTemplate = (ui, options) => render(ui, { wrapper: ProvidersWithoutTemplate, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
export { customRenderWithoutTemplate as renderWithoutTemplate };
