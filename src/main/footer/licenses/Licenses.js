import React, { useEffect } from 'react';
import './Licenses.css';

export function OpenSourceLicenses() {
  const licenses = require('../../../licenses.json');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="licenses">
        <h2 className="licenses__heading licenses__section-heading">Licenses</h2>
      </div>
      <div className="license__description">
        {Json2Array(licenses).map((l) => (
          <React.Fragment key={l.name + l.version}>
            <p className="license__title">
              <strong>{l.name} {l.version} ({l.licenses})</strong>
            </p>
            <p className="license__description">
              {l.licenseText}
            </p>
          </React.Fragment>
        )
        )}
      </div>
    </>
  );
}

function Json2Array(json) {
  var array = [];
  var keys = Object.keys(json);
  keys.forEach(function (key) {
    array.push(json[key]);
  });
  return array;
}

export default OpenSourceLicenses;
