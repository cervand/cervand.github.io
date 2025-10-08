// src/App.jsx
import { useState } from 'react';
import { MantineProvider, AppShell, Grid } from '@mantine/core';
import '@mantine/core/styles.css';
import Navbar from './components/NavBar';
import MobileMenu from './components/MobileMenu';
import TabContent from './components/TabContent';

function App() {
  const [opened, setOpened] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');

  // Custom black & white theme
  const theme = {
    colors: {
      brand: ['#FFFFFF', '#F5F5F5', '#EBEBEB', '#D6D6D6', '#C2C2C2', '#A3A3A3', '#858585', '#666666', '#383838', '#000000'],
      gray: ['#c1c1c1', '#b0b0b0', '#a0a0a0', '#909090', '#808080',
             '#707070', '#606060', '#505050', '#404040', '#303030'
      ],
      // Add other custom colors if needed
    },
    primaryColor: 'brand',
    black: '#000',
    white: '#fff',
   
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <AppShell
        header={{ height: 60 }}
        aside={{ // Using aside instead of navbar
          width: 250,
          breakpoint: 'sm',
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header style={{ borderBottom: '1px solid #e0e0e0' }}>
          <Navbar 
            opened={opened} 
            setOpened={setOpened} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </AppShell.Header>

        <AppShell.Aside bg="transparent">
          <MobileMenu 
            activeTab={activeTab} 
            setActiveTab={(value) => {
              setActiveTab(value);
              setOpened(false);
            }} 
          />
        </AppShell.Aside>

        <AppShell.Main>
          <TabContent activeTab={activeTab} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;