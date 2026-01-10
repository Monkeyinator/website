import React, { useLayoutEffect } from 'react';
import './Licenses.css';

import jsonLicenses from './../../../licenses.json';

export function OpenSourceLicenses() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="licenses">
        <h2 className="licenses__heading licenses__section-heading">Licenses</h2>
      </div>
      <div className="license__description" style={{ marginBottom: '5rem' }}>
        {Json2Array(jsonLicenses).map((l) => (
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

function Json2Array(json: Record<string, any>) {
  const array: any[] = [];
  const keys = Object.keys(json);

  keys.forEach((key) => {
    array.push(json[key]);
  });

  return array;
}

export default OpenSourceLicenses;
