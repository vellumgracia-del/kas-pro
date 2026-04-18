import { formatRp, formatDateFull } from '../utils';

export default function SettingsView({
  transactions,
  onToggleTheme,
  onDeleteTransaction,
  onClearData,
}) {
  return (
    <main id="view-settings" className="view-section active">
      {/* DARK MODE TOGGLE */}
      <div className="card">
        <div className="settings-header">
          <div>
            <h4 className="settings-title">Mode Gelap</h4>
            <small className="settings-subtitle">Ubah tampilan aplikasi</small>
          </div>
          <div className="toggle-switch" onClick={onToggleTheme}></div>
        </div>
      </div>

      {/* TRANSACTION HISTORY */}
      <h4 className="history-section-title">Riwayat Transaksi (Likuid)</h4>
      <div className="card" style={{ paddingTop: 0 }}>
        <div>
          {transactions.length === 0 ? (
            <div className="empty-state">Belum ada data transaksi.</div>
          ) : (
            transactions.map((t) => {
              const isInc = t.type === 'income';
              const sign = isInc ? '+' : '-';
              return (
                <div className="list-item" key={t.id}>
                  <div className="list-info">
                    <div className="list-meta">{formatDateFull(t.date)}</div>
                    <div className="list-title">{t.desc}</div>
                  </div>
                  <div className="list-actions">
                    <div
                      className={isInc ? 'amount-inc' : 'amount-exp'}
                      style={{ marginRight: '10px' }}
                    >
                      {sign} Rp {formatRp(t.val)}
                    </div>
                    <button
                      className="btn-delete-small"
                      onClick={() => onDeleteTransaction(t.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* RESET BUTTON */}
      <div className="reset-container">
        <button className="btn-reset" onClick={onClearData}>
          Reset Semua Data
        </button>
      </div>
    </main>
  );
}
