
## Naming Convetions

- **Extensions**: Use `.jsx` for React components.
- **File names**: Use **PascalCase** for filenames. 
- **Folder names**: Use **camelCase** from folder names.
- **Reference naming**: Use **camelCase** for React components' instances.

Example Project Structure

```
- otherFiles
- components
    -- uiComponents
        -- PrimaryButton.jsx
        -- PrimaryInputField.jsx
    -- dashboard
        -- SomeComponent.jsx
        -- FooBar.jsx
    -- designSystem
```

```javascript

// good
import FooBar from './FooBar.jsx'

// bad
import fooBar from './FooBar.jsx'

// good
const thisIsGood = <FooBar/>;

// bad
const ThisIsBad = <FooBar/>;
```