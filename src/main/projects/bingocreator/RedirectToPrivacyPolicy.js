import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToBingoCreatorPrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/website/projects/bingocreator/privacy-policy');
  });

  return null;
}

export default RedirectToBingoCreatorPrivacyPolicy;
