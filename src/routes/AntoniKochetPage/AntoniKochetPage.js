/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import AppBar from 'src/components/AppBar';
import VKLabel from 'src/components/VKLabel/VKLabel';
import RepositoriesUser from 'src/components/RepositoriesUserList/RepositoriesUser';

import './AntoniKochet-page.css';

function AntoniKochetPage() {
  const niknameRef = useRef(null);
  const [nikname, setName] = useState('');

  return (
    <div className="antoni-kochet-page">
      <AppBar title="Кочетков" />
      <div className="content">
        <div className="outerDiv">
          <input
            type="text"
            className="input"
            ref={niknameRef}
            placeholder="Введите никнейм на GitHub"
          />
          <button
            className="button"
            onClick={() => {
              setName(niknameRef.current.value);
            }}
          >
            Вывести репозитории пользователя
          </button>
        </div>
        <div className="ReposUser">
          <RepositoriesUser name={nikname} />
        </div>
        <div className="vklabel">
          <VKLabel to="id25624080" />
        </div>
      </div>
    </div>
  );
}

export default AntoniKochetPage;
