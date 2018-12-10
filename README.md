# UI EXAMPLE

## Description
UI Library proof of concept. This library is bootstrapped using React, without any extra framework or library. It uses Webpack under the hood to generate the bundles, and it uses SASS syntax for the styles. The styles are not going to generate a bundle `.css`, because the library is created to import only the styles that we need inside each project. This way we will optimize the performance of the projects.

## Getting started
```
git clone https://github.com/fjflala/ui-example.git

npm install

npm run storybook
```

See http://localhost:9002 and play with Storybook:)

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


