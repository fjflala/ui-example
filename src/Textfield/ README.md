# Textfield Component


## Files
You need to import the styles on your own project.
```
@import '~ui-example/ui/textfield/styles__small.scss'

@media (min-width: 768px) {
	@import '~ui-example/ui/textfield/styles__medium.scss'
}
@media (min-width: 1024px) {
	@import '~ui-example/ui/textfield/styles__large.scss'
}
```

## Use

```
const React = require('react');
const Textfield = require('ui-example/ui/textfield');

const yourView = () => (
	<Textfield
    label="Ciudad"
    hint="Por ejemplo: Barcelona, París"
    onChange={event => console.log(event.target.value)}
  />
);
```
## Props
| Property | Type | Default | Required |
|--|--| -- | -- |
| hint | String | ' ' | NO |
| label | String | ' ' | NO |
| className | String | '' | NO |
| modifier | String | 'default' | NO |
| onChange | Function | () => {} | NO |
| onFocus | Function | () => {} | NO |
| onHover | Function | () => {} | NO |