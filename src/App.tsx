import { useState } from 'react';
import './App.css';

function App() {
  const [modalType, setModalType] = useState<'taxProfile' | 'transactions' | 'ecm' | 'returns' | null>(null);

  const openModal = (type: 'taxProfile' | 'transactions' | 'ecm' | 'returns') => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-orange-600 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        hey. i&apos;m Avanaut. what do you want to explore?
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600"
          onClick={() => openModal('taxProfile')}
        >
          tax profile
        </button>
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600"
          onClick={() => openModal('transactions')}
        >
          transactions
        </button>
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600"
          onClick={() => openModal('ecm')}
        >
          ecm
        </button>
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600"
          onClick={() => openModal('returns')}
        >
          returns
        </button>
      </div>

      {modalType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {modalType} panel (coming soon)
            </h2>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                nevermind
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
