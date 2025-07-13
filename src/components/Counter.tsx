import React, { Component } from 'react';

/**
 * TYPESCRIPT CONVERSION STEP 1: Define Props Interface
 * 
 * Even though this component doesn't currently accept props,
 * it's good practice to define the interface for future extensibility
 * 
 * If we wanted to add props later (like initialCount), we'd add them here:
 * interface CounterProps {
 *   initialCount?: number; // Optional prop with default value
 * }
 */
interface CounterProps {
  // Currently empty, but ready for future props
}

/**
 * TYPESCRIPT CONVERSION STEP 2: Define State Interface
 * 
 * Original JavaScript: state = { count: 0 };
 * In TypeScript, we need to explicitly define the state shape
 * 
 * Benefits:
 * - Prevents typos in state property names
 * - Ensures state updates use correct types
 * - Compile-time checking for state access
 */
interface CounterState {
  count: number; // Explicitly define that count must be a number
}

/**
 * TYPESCRIPT CONVERSION STEP 3: Add Type Annotations to Class Component
 * 
 * Original JavaScript: class Counter extends Component { ... }
 * TypeScript version: class Counter extends Component<CounterProps, CounterState> { ... }
 * 
 * The generic parameters <CounterProps, CounterState> tell TypeScript:
 * - What props this component expects
 * - What shape the state should have
 * - This enables type checking for this.props and this.state
 */
class Counter extends Component<CounterProps, CounterState> {
  /**
   * TYPESCRIPT CONVERSION STEP 4: Type the State Object
   * 
   * Original JavaScript: state = { count: 0 };
   * 
   * TypeScript automatically infers the type from our CounterState interface
   * If we tried to add a property not in CounterState, we'd get a compile error
   * If we tried to set count to a string, we'd get a compile error
   */
  state: CounterState = {
    count: 0 // TypeScript ensures this matches CounterState interface
  };

  /**
   * TYPESCRIPT CONVERSION STEP 5: Type Event Handler Methods
   * 
   * Original JavaScript: increment = () => { ... }
   * 
   * TypeScript automatically infers the return type as 'void'
   * We could explicitly type it as: increment = (): void => { ... }
   * 
   * Benefits of arrow function methods:
   * - Automatically bind 'this' context
   * - No need for constructor binding
   * - TypeScript can properly infer types
   */
  increment = (): void => {
    /**
     * TYPESCRIPT CONVERSION STEP 6: Type-Safe State Updates
     * 
     * Original JavaScript: this.setState({ count: this.state.count + 1 });
     * 
     * TypeScript now ensures:
     * - We can only update properties that exist in CounterState
     * - The values we set match the expected types
     * - this.state.count is guaranteed to be a number
     */
    this.setState({ 
      count: this.state.count + 1 // TypeScript ensures count is number + number
    });
  };

  /**
   * TYPESCRIPT CONVERSION STEP 7: Type the Render Method
   * 
   * Original JavaScript: render() { ... }
   * 
   * TypeScript automatically infers return type as JSX.Element
   * We could explicitly type it as: render(): JSX.Element { ... }
   * 
   * Benefits:
   * - Ensures render always returns valid JSX
   * - Compile-time checking of JSX syntax
   * - Type-safe access to this.state and this.props
   */
  render(): JSX.Element {
    return (
      <div>
        {/* 
          TYPESCRIPT BENEFIT: this.state.count is guaranteed to be a number
          No risk of displaying 'undefined' or wrong data types
        */}
        <p>Count: {this.state.count}</p>
        
        {/* 
          TYPESCRIPT BENEFIT: this.increment is guaranteed to exist and be callable
          No risk of runtime errors from missing methods
        */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

/**
 * TYPESCRIPT CONVERSION STEP 8: Export with Full Type Safety
 * 
 * The export remains the same, but now TypeScript provides:
 * - Complete type safety for component usage
 * - IntelliSense support in IDEs
 * - Compile-time error detection
 * - Self-documenting component interface
 */
export default Counter;