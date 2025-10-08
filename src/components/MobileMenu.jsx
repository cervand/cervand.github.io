import { Box, Tabs } from '@mantine/core';

function MobileMenu({ activeTab, setActiveTab }) {
  return (
    <Box
      h="100%"
      bg="white"
      ml="auto"
      mt="md"
      mr="xs"
    >
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
    </Box>
  );
}

export default MobileMenu;