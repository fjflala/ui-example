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

### JavaScript
The main idea is to isolate the components. If we have isolated components, we have ease of deployments, improved scalability with smaller pieces, technological stack isolation with API integrations, and localized complexity with every piece easier to reason about.

Each component is going to be customizable via `props`. In the case of native web components like `Inputs`, `Buttons`, we would be able to modify the native attributes and properties.

#### Component usage example
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
- PropTypes on each component.
- Usage of Native ReactJS and VainillaJS.
- If an external library is needed, we should think twice and try to mantain it as native as we can.

### Styles
The styles are developed with `CSS Modules` and `SCSS`. Why CSS Modules over CSS in JS? Because in a large project, with a lot of people, is going to be hard to componentize all the application, and reuse the Styled Components. CSS Modules help us defining a single scope for each component, so we can not have mixed classNames or shared styles between components. Also, CSS-preproccessed help us to optimize the time and the bundles that we build.

#### Responsive & mobile first
The development is going to be Mobile First, which means that we are going to implement the mobile styles first in the base file: `styles__small.scss`.

```
.ui-[component] {
  background-color: red;
  color: white;
  font-size: 14px;
  padding: 16px;
  width: 100%;
}
```

If we need styles for bigger breakpoints we will add another file or even more than one: `styles__medium.scss` and `styles__large.scss`. This styles isolation is good because it is mobile first and we are able to change easily all the styles for each breakpoint.

```
.ui-[component] {
  max-width: 320px;
}
```

Implementation on a project:
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
- BEM metodology (http://getbem.com) to create reusable components.
- The defined variables in the library will be resusable in all the projects.

## Development
- Storybook allow us to develop faster and to generate documentation and playground for all the components. The developers and the UX is going to be testable and easy to use around the application.
