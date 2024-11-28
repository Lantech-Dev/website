import React from 'react';

export function lazyImport(factory: () => Promise<{ default: React.ComponentType }>) {
  return React.lazy(() => factory());
}