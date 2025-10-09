// src/components/TabContent/ExperienceTab.jsx
import { Title, Text, Stack } from '@mantine/core';
import Role from './Role';

function ExperienceTab() {
  return (
    <Stack>
      <Title order={2} mb="md">Experience</Title>
      <Role
        title="Something Developer"
        company="Banana Corp"
        date="2022 - Present"
        bullets={[
          "Developed user interfaces with React and Mantine.",
          "Collaborated with designers and backend engineers.",
          "Improved performance and accessibility."
        ]}
      />
    </Stack>
  );
}

export default ExperienceTab;