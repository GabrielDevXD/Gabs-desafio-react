import './styles.css';

import BtnFinder from '../../components/Button/BtnFinder';

function index() {
  return (
    <section className="container-error">
      <div className="error">
        <h1 className="title">Opss..</h1>
        <p className="phrase">
          Usuário nao encontrado no github. Verifique se você digitou o nome
          corretamente.
        </p>
        <BtnFinder content="FINDER" />
      </div>
    </section>
  );
}

export default index;
