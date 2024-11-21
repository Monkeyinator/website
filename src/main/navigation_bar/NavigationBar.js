import { useTranslation } from 'react-i18next';

import './NavigationBar.css';

function NavigationBar() {
  const { t } = useTranslation();

  return (
    <nav className="navigation-bar">
      <ul className="navigation">
        <li className="navigation__item navigation__item-active" id="nav-hero">
          <a href="#hero">{t('home')}</a>
        </li>
        <li className="navigation__item" id="nav-projects">
          <a href="#projects">{t('projects')}</a>
        </li>
        <li className="navigation__item" id="nav-contact">
          <a href="#contact">{t('contact')}</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
