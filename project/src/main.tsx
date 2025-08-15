import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🏪 Shoe Mart Inventory
        </h1>
        <p className="text-gray-600 mb-6">
          Your inventory management system is ready!
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-lg font-semibold">Counter: {count}</p>
            <button 
              onClick={() => setCount(count + 1)}
              className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
            >
              Add Item
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded">
              <p className="text-sm text-green-800">Status</p>
              <p className="font-semibold text-green-900">✅ Online</p>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <p className="text-sm text-purple-800">Version</p>
              <p className="font-semibold text-purple-900">1.0.0</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Ready to connect to Supabase database
          </p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
