import { useState } from 'react';
import './App.css';

function App() {
  const [modalType, setModalType] = useState<'customer' | 'cert' | null>(null);
  const [formData, setFormData] = useState<any>({});

  const openModal = (type: 'customer' | 'cert') => {
    setModalType(type);
    setFormData({});
  };
  const closeModal = () => setModalType(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-orange-600 p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        hey. i&apos;m Exempi. want to add a customer or a certificate?
      </h1>
      <div className="flex gap-4">
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600"
          onClick={() => openModal('customer')}
        >
          add a customer
        </button>
        <button
          className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-600"
          onClick={() => openModal('cert')}
        >
          add a cert
        </button>
      </div>

      {modalType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {modalType === 'customer' ? 'Add a Customer' : 'Add a Certificate'}
            </h2>
            <div className="space-y-3">
              {modalType === 'customer' ? (
                <>
                  <input type="text" name="customerCode" placeholder="Customer Code" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="name" placeholder="Customer Name" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="line1" placeholder="Street Address" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="city" placeholder="City" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="region" placeholder="State / Region" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="country" placeholder="Country Code (e.g. US)" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                </>
              ) : (
                <>
                  <input type="text" name="customerCode" placeholder="Customer Code" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="exemptReasonId" placeholder="Exempt Reason ID" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="exemptStates" placeholder="Exempt States (comma-separated)" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="date" name="issueDate" placeholder="Issue Date" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="date" name="expirationDate" placeholder="Expiration Date" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="documentTypeId" placeholder="Document Type ID" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="businessTypeId" placeholder="Business Type ID" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="signerName" placeholder="Signer Name" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                  <input type="text" name="signerTitle" placeholder="Signer Title" onChange={handleChange} className="w-full border border-orange-300 px-4 py-2 rounded" />
                </>
              )}
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                nevermind
              </button>
              <button
                onClick={() => {
                  console.log('Form submitted:', formData);
                  closeModal();
                }}
                className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white"
              >
                let&apos;s go
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
