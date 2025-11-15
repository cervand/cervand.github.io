// src/components/TabContent/AboutTab.jsx
import { Title, Text, Stack } from '@mantine/core';

function AboutTab() {
  return (
    <Stack>
      <Title order={2} mb="md" c="brand.2">About</Title>
      <Text c="brand.2">
        Someone excited to work hard on becoming a better engineer.
      </Text>
    </Stack>
  );
}

export default AboutTab;