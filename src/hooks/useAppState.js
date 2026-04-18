import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEYS = {
  transactions: 'ym_trans',
  assets: 'ym_assets',
  theme: 'ym_theme',
};

export function useAppState() {
  const [transactions, setTransactions] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.transactions)) || [];
    } catch {
      return [];
    }
  });

  const [assets, setAssets] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.assets)) || [];
    } catch {
      return [];
    }
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.theme) || 'light';
  });

  // Sync theme to body class
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }, [theme]);

  // Persist transactions
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.transactions, JSON.stringify(transactions));
  }, [transactions]);

  // Persist assets
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.assets, JSON.stringify(assets));
  }, [assets]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const addTransaction = useCallback((item) => {
    setTransactions((prev) => [item, ...prev]);
  }, []);

  const addAsset = useCallback((item) => {
    setAssets((prev) => [item, ...prev]);
  }, []);

  const deleteTransaction = useCallback((id) => {
    if (confirm('Hapus transaksi ini?')) {
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    }
  }, []);

  const deleteAsset = useCallback((id) => {
    if (confirm('Hapus aset ini?')) {
      setAssets((prev) => prev.filter((a) => a.id !== id));
    }
  }, []);

  const clearAllData = useCallback(() => {
    if (confirm('PERINGATAN: Semua data akan dihapus! Lanjutkan?')) {
      localStorage.removeItem(STORAGE_KEYS.transactions);
      localStorage.removeItem(STORAGE_KEYS.assets);
      location.reload();
    }
  }, []);

  // Computed values
  const totals = (() => {
    let inc = 0;
    let exp = 0;
    transactions.forEach((t) => {
      if (t.type === 'income') {
        inc += t.val;
      } else {
        exp += t.val;
      }
    });
    const liquid = inc - exp;
    const assetTotal = assets.reduce((sum, a) => sum + a.val, 0);
    const netWorth = liquid + assetTotal;
    return { inc, exp, liquid, assetTotal, netWorth };
  })();

  return {
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
  };
}
