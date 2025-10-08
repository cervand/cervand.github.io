import { Stack, Tabs } from '@mantine/core';

function MobileMenu({ activeTab, setActiveTab }) {
  return (
    <Tabs
      value={activeTab}
      onChange={setActiveTab}
      orientation="vertical"
      variant="pills"
      color="brand.9"
    >
      <Tabs.List>
        <Tabs.Tab value="experience" mb="sm">Experience</Tabs.Tab>
        <Tabs.Tab value="about" mb="sm">About</Tabs.Tab>
        <Tabs.Tab value="contact" mb="sm">Contact</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default MobileMenu;