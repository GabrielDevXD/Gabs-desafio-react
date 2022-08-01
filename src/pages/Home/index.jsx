import './styles.css';

import { FaGithub as Github } from 'react-icons/fa';
import { FiMoon as Moon, FiSun as Sun } from 'react-icons/fi';

import React, { useState } from 'react';
import BtnTheme from '../../components/BtnTheme';
import { Navigate } from 'react-router';
function index({ toggleTheme, theme }) {
  const [user, setUser] = useState('');
  const [error, setError] = useState(false);

  const HandleClickFindUser = () => {
    if (user === '') {
      setError(true);
    } else {
      setError(false);
      window.location.href = `/profile/${user}`;
    }
  };

  return (
    <section className="home-container">
      <div className="btn">
        <BtnTheme
          toggleTheme={toggleTheme}
          theme={theme === 'dark' ? <Sun /> : <Moon />}
        />
      </div>
      <div className="direction">
        <div className="container-finder">
          <div className="title">
            <h1>Github Search</h1>
            <p>
              Buscar repositórios no github example
              <br />
              github.com/<span>GabrielDevXD</span>
            </p>
          </div>
          <div className="finder">
            <input
              type="text"
              placeholder="Digite o nome do usuário"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            {error && <p className="h1">Preencha esse campo</p>}
            <button onClick={HandleClickFindUser}>FIND</button>
          </div>
        </div>
        <div className="github-image">
          <Github />
        </div>
      </div>
    </section>
  );
}

export default index;
