# useReducer Hook

This template provides a minimal project to learn ```useReducer``` hook in React

**Definition:** The useReducer hook is a built-in React hook that is used for managing complex state logic in functional components. 

#### Arguments of useReducer hook
- reducer: This is the reducer function that defines how the state should be updated in response to different actions. It takes two arguments: the current state and the action, and it returns the new state.
- initialState (required): This is the initial state of your component. It represents the initial value of your state.

### Syntax
```const [state, dispatch] = useReducer(reducer, initialState);```
