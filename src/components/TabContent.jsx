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
      style={{
        border: '1px solid #e0e0e0',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        backgroundColor: 'white',
        padding: '24px'
      }}
    >
      {activeTab === 'experience' && <ExperienceTab />}
      {activeTab === 'about' && <AboutTab />}
      {activeTab === 'contact' && <ContactTab />}
    </Paper>
  );
}

export default TabContent;