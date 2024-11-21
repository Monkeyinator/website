import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'Home',
      greeting: 'Hello, I\'m ',
      jobDescription: 'I\'m a full stack developer.',
      viewMyWork: 'View my work',
      projects: 'Projects',
      casualGameApp: 'Casual game App',
      bingoCreatorDescription: 'Create custom Bingo games, share them, call them and play them with your friends.',
      efficiencyApp: 'Efficiency App',
      contractReminderDescription: 'Manage your contracts, their costs and notice periods.',
      getOnPlayStore: 'GET ON PLAY STORE',
      contact: 'Contact',
      thisIsHowYouCanReachMe: 'This is how you can reach me...',
    },
  },
  de: {
    translation: {
      home: 'Home',
      greeting: 'Hallo, ich bin ',
      jobDescription: 'Ich bin ein Full Stack Developer.',
      viewMyWork: 'Meine Arbeit',
      projects: 'Projekte',
      casualGameApp: 'Gelegenheitsspiel-App',
      bingoCreatorDescription: 'Erstellen Sie benutzerdefinierte Bingo-Spiele, teilen Sie sie, callen Sie sie und spielen Sie sie mit Ihren Freunden.',
      efficiencyApp: 'Effizienz-App',
      contractReminderDescription: 'Verwalten Sie Ihre Verträge, deren Kosten und Kündigungsfristen.',
      getOnPlayStore: 'ZUM PLAY STORE',
      contact: 'Kontakt',
      thisIsHowYouCanReachMe: 'So können Sie mich erreichen ...',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;