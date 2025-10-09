// src/components/Navbar/index.jsx
import { Group, Burger, Tabs, Title } from '@mantine/core';

function NavBar({ opened, setOpened, activeTab, setActiveTab }) {
  return (
    <Group justify="space-between" align="center" px="md" py="sm">
      <Title order={3} fw={700} c="brand.1">
        Andres Cervantes
      </Title>
      <Tabs value={activeTab} onChange={setActiveTab} visibleFrom="sm" variant='pills' color="brand.1">
        <Tabs.List>
          <Tabs.Tab value="experience">Experience</Tabs.Tab>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="contact">Contact</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Burger opened={opened} onClick={() => setOpened((o) => !o)} hiddenFrom="sm" size="sm" />
    </Group>
  );
}

export default NavBar;