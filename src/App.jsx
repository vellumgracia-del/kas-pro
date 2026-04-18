import { useState } from 'react';
import { useAppState } from './hooks/useAppState';
import LandingScreen from './components/LandingScreen';
import Header from './components/Header';
import HomeView from './components/HomeView';
import SettingsView from './components/SettingsView';
import BottomNav from './components/BottomNav';
import InputModal from './components/InputModal';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeView, setActiveView] = useState('home');
  const [modalOpen, setModalOpen] = useState(false);

  const {
    transactions,
    assets,
    theme,
    totals,
    toggleTheme,
    addTransaction,
    addAsset,
    deleteTransaction,
    deleteAsset,
    clearAllData,
  } = useAppState();

  const handleEnterApp = () => {
    setShowLanding(false);
  };

  const handleSaveItem = (item) => {
    if (item.type === 'asset') {
      addAsset(item);
    } else {
      addTransaction(item);
    }
  };

  if (showLanding) {
    return <LandingScreen onEnter={handleEnterApp} />;
  }

  return (
    <div className="app-container">
      <Header />

      {activeView === 'home' && (
        <HomeView
          totals={totals}
          assets={assets}
          theme={theme}
          onDeleteAsset={deleteAsset}
        />
      )}

      {activeView === 'settings' && (
        <SettingsView
          transactions={transactions}
          onToggleTheme={toggleTheme}
          onDeleteTransaction={deleteTransaction}
          onClearData={clearAllData}
        />
      )}

      <BottomNav
        activeView={activeView}
        onSwitchView={setActiveView}
        onOpenModal={() => setModalOpen(true)}
      />

      <InputModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveItem}
      />
    </div>
  );
}
