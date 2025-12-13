// src/components/TabContent/ContactTab.jsx
import { Title, Anchor, Stack, Group, rem } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

function ContactTab() {
  return (
    <Stack>
      <Title order={2} mb="md" c="brand.2">Contact</Title>
      
      <Group>
        <IconBrandLinkedin size={24} color="#0A66C2" />
        <Anchor href="https://linkedin.com/in/cervand" target="_blank" c="brand.1">LinkedIn</Anchor>
      </Group>

      <Group>
        <IconBrandGithub size={24} color="black" />
        <Anchor href="https://github.com/cervand" target="_blank" c="brand.1">GitHub</Anchor>
      </Group>
    </Stack>
  );
}

export default ContactTab;