import { Box, Tabs } from '@mantine/core';

function MobileMenu({ activeTab, setActiveTab }) {
  return (
    <Box h="100%" bg="brand.8" p="md">
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        orientation="vertical"
        variant="pills"
        color="brand.1"
      >
        <Tabs.List>
          <Tabs.Tab value="about" mb="sm">About</Tabs.Tab>
          <Tabs.Tab value="experience" mb="sm">Experience</Tabs.Tab>
          <Tabs.Tab value="contact" mb="sm">Contact</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Box>
  );
}

export default MobileMenu;