import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import i18n from './i18n.tsx';

import MainView from './main/Main.tsx';

import BingoCreatorPrivacyPolicyView from './main/projects/bingocreator/PrivacyPolicy.tsx';
import RedirectToBingoCreatorPrivacyPolicyView from './main/projects/bingocreator/RedirectToPrivacyPolicy.tsx';
import ContractReminderPrivacyPolicyView from './main/projects/contractreminder/PrivacyPolicy.tsx';
import RedirectToContractReminderPrivacyPolicyView from './main/projects/contractreminder/RedirectToPrivacyPolicy.tsx';
import LicensesView from './main/footer/licenses/Licenses.tsx';

function App() {
  useEffect(() => {
    i18n.init({ fallbackLng: "en", });

    const raw = (navigator.languages?.length) ? navigator.languages[0] : (navigator.language || 'en');
    const locale = String(raw).split('-')[0];
    i18n.changeLanguage(locale);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="website" element={<MainView />} />
        <Route path="projects/bingocreator/privacy-policy" element={<BingoCreatorPrivacyPolicyView />} />
        <Route path="work/bingocreator/privacy" element={<RedirectToBingoCreatorPrivacyPolicyView />} />
        <Route path="projects/contractreminder/privacy-policy" element={<ContractReminderPrivacyPolicyView />} />
        <Route path="work/contractreminder/privacy" element={<RedirectToContractReminderPrivacyPolicyView />} />
        <Route path="licenses" element={<LicensesView />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
