// src/components/TabContent/ContactTab.jsx
import { Title, Text, Stack } from '@mantine/core';

function ContactTab() {
  return (
    <Stack>
      <Title order={2} mb="md" c="brand.2">Contact</Title>
      <Text c="brand.2">
        My contact information and ways to reach me will be displayed here.
      </Text>
    </Stack>
  );
}

export default ContactTab;