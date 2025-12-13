// src/components/TabContent/ContactTab.jsx
import { Title, Anchor, Stack } from '@mantine/core';

function ContactTab() {
  return (
    <Stack>
      <Title order={2} mb="md" c="brand.2">Contact</Title>
      <Anchor href="https://linkedin.com/in/cervand" target="_blank" c="brand.1">LinkedIn Profile</Anchor>
      <Anchor href="https://github.com/cervand" target="_blank" c="brand.1">GitHub Profile</Anchor>
    </Stack>
  );
}

export default ContactTab;