import { useTranslation } from 'react-i18next';

import './Contact.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <h2 className="section-heading contact__heading">{t('contact')}</h2>
      <p className="contact__text">{t('thisIsHowYouCanReachMe')}</p>
      <a type="button" className="project__button" href="mailto:myprogrammingprojects@outlook.com">myprogrammingprojects@outlook.com</a>
    </section>
  );
}

export default Contact;
