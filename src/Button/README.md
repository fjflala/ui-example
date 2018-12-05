# Button Component


## Files
You need to import the styles on your own project.
```
@import '~ui-example/ui/button/styles__small.scss'

@media (min-width: 768px) {
	@import '~ui-example/ui/button/styles__medium.scss'
}
@media (min-width: 1024px) {
	@import '~ui-example/ui/button/styles__large.scss'
}
```

## Use

```
const React = require('react');
const Button = require('ui-example/ui/button');

const yourView = () => (
	<Button onClick={alert('Hello world')}>
		Click me!
	</Button>
);
```
## Props
| Property | Type | Default | Required |
|--|--| -- | -- |
| disabled | Boolean | false | NO |
| name | String | ' ' | NO |
| type | String | button | NO |
| onClick | Function | () => {} | NO |
| className | String | ' ' | NO |
| modifier | String | 'primary' | NO |
| size | String | 'medium' | NO |

