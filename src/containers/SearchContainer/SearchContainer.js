import React, { PropTypes } from 'react';

// Importamos los componentes
import Header from '../../components/Header';
//impotamos el searchform
import SearchForm from '../../components/SearchForm';
/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    /*binds
    / le indicamos el ambito al metodo onSubmit*/
    this.onSubmit = this.onSubmit.bind(this);

    // propiedades de inicializacion para el buscador
    this.state = {
      //no tiene loading
      loading: false,
      // devuelve array
      results: [],
      //inicia vacio
      search: '',
      //prop de verificacion de resultados o llamada
      queried: false

    }
  }
  /**
   * Datos falsos. Los utilizamos en desarrollo hasta que leamos los datos de
   * la API.
   */
  stubData() {
    let repo = {
      full_name: 'My Repository',
      owner: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      stargazers_count: 10,
      forks_count: 5
    }
    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }

  onSubmit(value) {
    //cuando tipiemos le cambia el estado a cargando
    this.setState({ loading: true });

    console.log('submit: ' + value);

    setTimeout (() => {
      // indicamos un tiempo de demora y cuando llegan resultados cambian los estados
      this.setState({ loading: false, queried: true , results: this.stubData() })
    },2000);
  }

  /**
   * Render the SearchContainer component
   */

   //<SearchFrom onSubmit={ this.onSubmit } search={ this.state.search } />
   // con esto le pasamos el contenido de onSubmit al buscados y ademas en la proxima carga
   // del search carga ese contenido por defecto
   //
   //agregamos el header al render de la vista
  render() {
    return <main className="container">

    <Header />
      <SearchForm onSubmit={ this.onSubmit } search={ this.state.search } />
      <h1>Búsqueda</h1>
    </main>
  }
}

// Exportamos
export default SearchContainer;
