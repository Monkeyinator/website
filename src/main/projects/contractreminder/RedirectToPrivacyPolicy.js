import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToContractReminderPrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/projects/contractreminder/privacy-policy');
  });

  return null;
}

export default RedirectToContractReminderPrivacyPolicy;
