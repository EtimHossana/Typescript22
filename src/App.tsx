import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

/**
 * DEMONSTRATION: Using TypeScript-Converted Components
 * 
 * This App component demonstrates how the TypeScript conversion
 * provides better development experience and type safety
 */
function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            TypeScript Component Conversion Demo
          </h1>
          <p className="text-gray-600">
            Demonstrating functional and class components converted from JavaScript to TypeScript
          </p>
        </div>

        {/* Greeting Component Demo */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            Functional Component: Greeting
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            TypeScript ensures the 'name' prop is always a string. Try removing it to see compile errors!
          </p>
          <div className="space-y-2">
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />
            {/* 
              TYPESCRIPT BENEFIT: Uncommenting the line below would cause a compile error
              because 'name' prop is missing
            */}
            {/* <Greeting /> */}
            
            {/* 
              TYPESCRIPT BENEFIT: Uncommenting the line below would cause a compile error
              because 'name' must be a string, not a number
            */}
            {/* <Greeting name={123} /> */}
          </div>
        </div>

        {/* Counter Component Demo */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-green-600">
            Class Component: Counter
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            TypeScript ensures state management is type-safe and prevents runtime errors.
          </p>
          <Counter />
        </div>

        {/* TypeScript Benefits Summary */}
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-blue-800">
            TypeScript Conversion Benefits:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li><strong>Compile-time Error Detection:</strong> Catch bugs before runtime</li>
            <li><strong>Better IDE Support:</strong> Autocompletion, refactoring, navigation</li>
            <li><strong>Self-Documenting Code:</strong> Interfaces serve as documentation</li>
            <li><strong>Safer Refactoring:</strong> Type system prevents breaking changes</li>
            <li><strong>Enhanced Team Collaboration:</strong> Clear contracts between components</li>
            <li><strong>Improved Maintainability:</strong> Easier to understand and modify code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;