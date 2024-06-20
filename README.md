### Project structure
Taken from and thus more explanation at: [React Native Project Structure: A Best Practices Guide](https://www.waldo.com/blog/react-native-project-structure) (type-based project structure)
```
/src
    /api
        /constants.js -> api configurations
        /<name>.service.js -> api services
    /hooks -> all custom hooks
    /navigation -> all navigation related code
        /stacks -> all stack navigators (e.g. ReviewStack contains ReviewOverview, ReviewDetail and NewReview screens)
    /ui -> all code related to UI
        /assets -> all assets
        /components
            /<name>.js -> reusable components
        /screens -> all screens of the application
            /<name> -> screen components
    /utils -> all utility functions (e.g. reusable functions)
    /wrappers -> all wrapper components (e.g. HOCs)
```
