import { useTranslation } from 'react-i18next';
import { HashLink } from "react-router-hash-link";

import './NavigationBar.css';

function NavigationBar() {
  const { t } = useTranslation();

  return (
    <nav className="navigation-bar">
      <ul className="navigation">
        <li className="navigation__item navigation__item-active" id="nav-hero">
          <HashLink to="/#hero">{t('home')}</HashLink>
        </li>
        <li className="navigation__item" id="nav-projects">
          <HashLink to="/#projects">{t('projects')}</HashLink>
        </li>
        <li className="navigation__item" id="nav-contact">
          <HashLink to="/#contact">{t('contact')}</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
