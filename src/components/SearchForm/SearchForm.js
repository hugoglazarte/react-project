import React, { PropTypes } from 'react';

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {

  constructor(props){
    super(props);

    // binds
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      search: ''
    }

  }

  //queremos saber cuando escribe
  onChange(e) {
    //cambiamos el estado de search, e -> evento -> componente (input en este caso) -> value (contenido)
    this.setState({ search: e.target.value });
  }

  //queremos el contenidos al hacer submit
  onSubmit(e) {
    //con esta linea prevenimos que se envie el formu por post o get ya que es una single page app
    e.preventDefault();
    // accedemos al metodo onSubmit de la clase padre y pasamos el estado de search
    this.props.onSubmit(this.state.search);

  }

  render() {
    return <form onSubmit={ this.onSubmit }>
      <label> Buscando repositorio </label>
      <input type="text" className="u-full-width" placeholder="react, webpack..."
      onChange={ this.onChange } defaultValue = { this.state.search } />
      <p className="align-center" >
        <input type="submit" className="button-primary" value="Search" />
      </p>
    </form>;
  }
}

// Export the class
export default SearchForm;
