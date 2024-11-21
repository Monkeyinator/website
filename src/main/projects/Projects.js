import { useTranslation } from 'react-i18next';

import bingoCreatorImage from './../../images/bingocreator.png'
import contractReminderImage from './../../images/contractreminder.png'

import './Projects.css';

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading section-heading">{t('projects')}</h2>
      <div className="project project-left">
        <a href="https://play.google.com/store/apps/details?id=com.brotherprojekt.bingo_creator" target="_blank" rel="noreferrer">
          <div className="project__image-container todo">
            <div className="project__image-image">
              <img src={bingoCreatorImage} alt=""></img>
            </div>
          </div>
        </a>
        <div className="project__info">
          <h3 className="project__title">
            Bingo Maker<br/>{t('casualGameApp')}
          </h3>
          <p className="project__description">{t('bingoCreatorDescription')}</p>
          <a href="https://play.google.com/store/apps/details?id=com.brotherprojekt.bingo_creator" target="_blank" rel="noreferrer">
            <div className="project__button">{t('getOnPlayStore')}</div>
          </a>
        </div>
      </div>
      <div className="project project-right">
        <div className="project__info">
          <h3 className="project__title">
            Contract Reminder<br/>{t('efficiencyApp')}
          </h3>
          <p className="project__description">{t('contractReminderDescription')}</p>
          <a href="https://play.google.com/store/apps/details?id=com.brotherprojects.contract_reminder" target="_blank" rel="noreferrer">
            <div className="project__button ">{t('getOnPlayStore')}</div>
          </a>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.brotherprojects.contract_reminder" target="_blank" rel="noreferrer">
          <div className="project__image-container todo">
            <div className="project__image-image">
              <img src={contractReminderImage} alt=""></img>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
