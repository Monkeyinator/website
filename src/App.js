import React, { useEffect } from 'react';
import * as RNLocalize from 'react-native-localize';
import { HashRouter, Routes, Route } from "react-router-dom";
import i18n from './i18n';

import MainView from './main/Main.js';

import BingoCreatorPrivacyPolicyView from './main/projects/bingocreator/PrivacyPolicy.js';
import RedirectToBingoCreatorPrivacyPolicyView from './main/projects/bingocreator/RedirectToPrivacyPolicy.js';
import ContractReminderPrivacyPolicyView from './main/projects/contractreminder/PrivacyPolicy.js';
import RedirectToContractReminderPrivacyPolicyView from './main/projects/contractreminder/RedirectToPrivacyPolicy.js';
import LicensesView from './main/footer/licenses/Licenses.js';

function App() {
  useEffect(() => {
    const locale = RNLocalize.getLocales()[0].languageCode;
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
