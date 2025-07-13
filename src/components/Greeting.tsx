import React from 'react';

/**
 * TYPESCRIPT CONVERSION STEP 1: Define Props Interface
 * 
 * In JavaScript, we had: const Greeting = ({ name }) => { ... }
 * In TypeScript, we need to explicitly define the shape of our props
 * 
 * Benefits of this approach:
 * - Compile-time type checking ensures 'name' is always a string
 * - IDE autocompletion and error detection
 * - Self-documenting code - other developers know exactly what props are expected
 */
interface GreetingProps {
  name: string; // Explicitly define that 'name' must be a string
}

/**
 * TYPESCRIPT CONVERSION STEP 2: Add Type Annotations to Functional Component
 * 
 * Original JavaScript: const Greeting = ({ name }) => { ... }
 * TypeScript version: const Greeting: React.FC<GreetingProps> = ({ name }) => { ... }
 * 
 * Alternative (more modern approach): const Greeting = ({ name }: GreetingProps) => { ... }
 * 
 * Why we use React.FC<GreetingProps>:
 * - React.FC stands for "Function Component"
 * - It automatically includes children prop (though we're not using it here)
 * - It provides better TypeScript integration with React
 * - It ensures the component returns valid JSX
 */
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  /**
   * TYPESCRIPT CONVERSION STEP 3: Return Type Inference
   * 
   * TypeScript automatically infers that this function returns JSX.Element
   * We could explicitly type it as: ): JSX.Element => {
   * But it's not necessary since TypeScript can infer it
   * 
   * The destructured 'name' parameter is now guaranteed to be a string
   * This prevents runtime errors from undefined or wrong types
   */
  return <div>Hello, {name}!</div>;
};

/**
 * TYPESCRIPT CONVERSION STEP 4: Export with Type Safety
 * 
 * The export remains the same, but now TypeScript ensures:
 * - Anyone importing this component knows it requires a 'name' prop
 * - The 'name' prop must be a string
 * - Missing props will cause compile-time errors
 */
export default Greeting;