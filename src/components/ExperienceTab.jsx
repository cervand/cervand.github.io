// src/components/TabContent/ExperienceTab.jsx
import { Title, Text, Stack } from '@mantine/core';
import Role from './Role';

function ExperienceTab() {
  return (
    <Stack spacing="xl">
      <Stack spacing="md">
        <Title order={2} c="brand.2">Professional Experience</Title>
        <Role
          title="Software Engineer"
          company="Summit Interconnect"
          date="2024 - Present"
          bullets={[
            "Developed user interfaces with React and Mantine.",
            "Collaborated with designers and backend engineers.",
            "Improved performance and accessibility."
          ]}
        />
        <Role
          title="Professional Services Consultant Intern"
          company="Amazon Web Services"
          date="2020-2020"
          bullets={[
            "Developed user interfaces with React and Mantine.",
            "Collaborated with designers and backend engineers.",
            "Improved performance and accessibility."
          ]}
        />
      </Stack>

      <Stack spacing="md">
        <Title order={2} c="brand.2">College Experience</Title>
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
    </Stack>
  );
}

export default ExperienceTab;