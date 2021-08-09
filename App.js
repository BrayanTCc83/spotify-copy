import React from 'react';
import { DesignProvider } from './providers/design';
import { MusicProvider } from './providers/music';
import AppRouter from './router';

export default function App() {
  return (
    <DesignProvider>
      <MusicProvider>
        <AppRouter/>
      </MusicProvider>
    </DesignProvider>
  );
}