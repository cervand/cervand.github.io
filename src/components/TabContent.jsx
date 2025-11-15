// src/components/TabContent/index.jsx
import { Paper, Title, Text, Stack } from '@mantine/core';
import ExperienceTab from './ExperienceTab';
import AboutTab from './AboutTab';
import ContactTab from './ContactTab';

function TabContent({ activeTab }) {
  return (
    <Paper 
      p="xl" 
      radius="md" 
      bg="brand.0" 
    >
      {activeTab === 'experience' && <ExperienceTab />}
      {activeTab === 'about' && <AboutTab />}
      {activeTab === 'contact' && <ContactTab />}
    </Paper>
  );
}

export default TabContent;