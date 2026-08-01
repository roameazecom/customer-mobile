import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CustomerLogin from './pages/CustomerLogin';
import CustomerDashboard from './pages/CustomerDashboard';
import { usePosStore } from './store/posStore';

function App() {
  const fetchData = usePosStore(state => state.fetchData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* Customer Self-Ordering routes */}
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        
        {/* Wildcard redirect to customer entry point */}
        <Route path="*" element={<Navigate to="/customer/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
