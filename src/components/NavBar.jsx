// src/components/Navbar/index.jsx
import { Group, Burger, Tabs, Title, Box } from '@mantine/core';
import MobileMenu from './MobileMenu';

function Navbar({ opened, setOpened, activeTab, setActiveTab }) {
  return (
    <Group justify="space-between" h="100%" px="md">
      <Title 
        order={4} 
        style={{ 
          fontWeight: 600, 
          color: '#000000',
          letterSpacing: '-0.5px'
        }}
      >
      Andres Cervantes
      </Title>
      
      <Group gap="md">
        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          visibleFrom="sm"
          color="dark"
          style={{
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <Tabs.List>
            <Tabs.Tab 
              value="experience"
              style={{
                fontWeight: 500,
                padding: '8px 16px'
              }}
            >
              Experience
            </Tabs.Tab>
            <Tabs.Tab 
              value="about"
              style={{
                fontWeight: 500,
                padding: '8px 16px'
              }}
            >
              About
            </Tabs.Tab>
            <Tabs.Tab 
              value="contact"
              style={{
                fontWeight: 500,
                padding: '8px 16px'
              }}
            >
              Contact
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        
        <Burger
          opened={opened}
          onClick={() => setOpened(!opened)}
          hiddenFrom="sm"
          size="sm"
          color="black"
        />
      </Group>
    </Group>
  );
}

// Attach MobileMenu as a subcomponent for better organization
Navbar.MobileMenu = MobileMenu;

export default Navbar;