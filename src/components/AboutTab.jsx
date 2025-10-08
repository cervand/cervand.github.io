// src/components/TabContent/AboutTab.jsx
import { Title, Text, Stack } from '@mantine/core';

function AboutTab() {
  return (
    <Stack>
      <Title order={2} mb="md">About</Title>
      <Text>
        Information about me and my background will be displayed here.
      </Text>
    </Stack>
  );
}

export default AboutTab;