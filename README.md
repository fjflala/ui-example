# UI EXAMPLE

## Intro
Antes que nada esto es una prueba de concepto, de como una librería UI debería ser.
Esta librería está realizada con ReactJS, sin ningún framework extra. Esto está pensando para que sea lo más standalone posible.
Para generar los bundles se utiliza Webpack, en cuanto a los estilos se utiliza SASS como sintaxís. Estos estilos no van a generar bundle `.css`, ya que está pensando para que, en cada proyecto puedas importar los estilos dónde se desee y así optimizar los bundles en su proyecto tanto como sea posible, o incluso si quieres utilizar tus propios estilos.

## Componentes

### JS
La idea principal de como están organizados estos componentes, es que, solo resuelvan o tengan la lógica que implique sólo a la experiencia de usuario.
Estos componentes van a ser personalizables por medio de `props`.
En el caso de ser wrapper de componentes ya existentes como por ejemplo: `Inputs`, `Buttons`, etc. También van a aceptar como `props` todos los atributos propios de estos componentes nativos web.

#### Ejemplo de uso de componente
```
<Button
  onClick={() => alert('Hello World')}
  modifier="default"
  disabled={false}
>
  Click me!
</Button>
```

#### Guidelines
- Utilización de PropTypes en todos los componentes.
- Uso de ReactJS nativo y vainillaJS, sólo algunas excepciones para el uso de librerías externas.

### STYLES
Los estilos se van a desarrollar en SCSS.
¿Porqué SCSS y no CSS in JS?
La idea de no utilizar CSS in JS (styled-components, por ejemplo), es no mezclar sintaxís que no tienen sentido. Es decir, separar las responsablidades en distintos archivos. Además nos ayuda a optimizar en tiempo y tamaño los bundles que entregamos a nuestros clientes.

#### Responsive & mobile first
El desarrollo debe ser orientado para mobile first.
Es decir, que primero vamos a desarrollar los estilos base en un archivo `styles__small.scss`

```
.ui-[component] {
  background-color: red;
  color: white;
  font-size: 14px;
  padding: 16px;
  width: 100%;
}
```

Si estilos deben modificarse para pantallas más grandes se deberá agregar otro archivo `styles__medium.scss` o incluso `styles__large.scss`.

```
.ui-[component] {
  max-width: 320px;
}
```

Implementación en cada proyecto
```
@import '~ui-example/ui/[component]/styles__small.scss'

@media (min-width: 768px) {
  @import '~ui-example/ui/[component]/styles__medium.scss'
}

@media (min-width: 1024px) {
  @import '~ui-example/ui/[component]/styles__large.scss'  
}
```

#### Guidelines
- Metodología [BEM](http://getbem.com/) para crear componentes reusables.
- Variables definidas en la libería se podrán reutilizar en todos los proyectos que consuman ésta


## Desarrollo
- Uso de storybook: esto nos permite desarrollar de manera más rápida y genera documentación y playground de los componentes para que los devs, pueden ver rápido y fácilmente la utilización de libería.


