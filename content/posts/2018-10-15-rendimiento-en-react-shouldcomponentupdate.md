---
templateKey: blog-post
title: 'Rendimiento en React: shouldComponentUpdate '
date: 2018-10-15T23:16:00.596Z
description: ' '
tags:
  - react
  - shouldComponentUpdate
  - rendimiento react
  - performance react
---
![performance header](/img/photo-1524177100258-782087dc2a31.jpeg)

> Una breve descripción con un caso de uso de como mejorar el rendimiento de una aplicación hecha con React utilizando shouldComponentUpdate

Cuando desarrollas en React, ¿Alguna vez se ha preguntado cuándo y por qué se ejecuta el método `render()` de un componente? O te has preguntado, ¿Cuándo usar métodos de ciclo de vida de un componente menos conocidos como `shouldComponentUpdate()`?

Si la respuesta es sí, tu aplicación podría tener problemas de rendimiento. En este post vamos a hacer un caso de uso simple para aprender a mejorar este aspecto de nuestra aplicación.

Todo se reduce a cómo React funciona bajo el capó. React promete que es muy rápido al representar elementos en una página. Para ello React mantiene en memoria dos versiones del DOM (Document Object Model, pues):

* La versión del DOM actualmente mostrada actualmente.
* La próxima versión del DOM que se mostrará.

Compara los dos y actualiza el DOM visualizado con solo las partes que han cambiado. Este proceso se llama** reconciliación**. La raíz del árbol evaluado para la reconciliación es un componente cuyos `props` han cambiado.

Entonces, ya que sabemos que tenemos 2 versiones del dom durante la evaluación de componentes en React, podemos aprovechar estas 2 versiones con el método `shouldComponentUpdate()`.

Este método en español significa (Literal) `DeberiaEsteComponenteActualizarse()` y su  razón de existir es el de evaluar los `props` actuales con los `props` futuros y el `state` actual con el `state` futuro.

```javascript
class BotonContador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cuenta: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {    
    
    // Si retornamos true, se volverá a renderizar el componente
    if (this.props.color !== nextProps.color) {
      return true;
    }

    // Si retornamos true, se volverá a renderizar el componente
    if (this.state.cuenta !== nextState.cuenta) {
      return true;
    }    

    // Si retornamos false, evitaremos el método render
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({cuenta: state.cuenta + 1}))}>
        Cuenta: {this.state.cuenta}
      </button>
    );
  }
}
```

Es importante tomar en cuenta que esta estrategia busca evitar re renders innecesarios, que pueden provocar lag para la interfaz de usuario. Ahora, sal a codear y toma en cuenta que el rendimiento importa... y mucho.
