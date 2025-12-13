// src/components/TabContent/AboutTab.jsx
import { Title, Text, Stack, Grid, Image } from '@mantine/core';

function AboutTab() {
  return (
    <Grid gutter={50} align="center">
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image 
          src="https://placehold.co/700x700" 
          alt="Profile" 
          radius="md"
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <Stack>
          <Title order={2} c="brand.2">Hi, I am Andres</Title>
          <Text c="brand.2">
            Someone excited to work hard on becoming a better engineer.
            This is a summary about me and my background.
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default AboutTab;