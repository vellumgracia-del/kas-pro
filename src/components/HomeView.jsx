import { formatRp, formatDate } from '../utils';
import CashflowChart from './CashflowChart';

export default function HomeView({ totals, assets, theme, onDeleteAsset }) {
  const { inc, exp, liquid, assetTotal, netWorth } = totals;

  return (
    <main id="view-home" className="view-section active">
      {/* TOTAL NET WORTH CARD */}
      <div className="card net-worth-card">
        <div className="net-worth-label">Total Kekayaan (Net Worth)</div>
        <h1 className="net-worth-value">Rp {formatRp(netWorth)}</h1>
        <div className="net-worth-sub">Likuid + Aset Non-Likuid</div>
      </div>

      {/* LIQUID VS NON-LIQUID SPLIT */}
      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-label">Sisa Uang (Likuid)</div>
          <div className="stat-value stat-liquid">Rp {formatRp(liquid)}</div>
          <div className="stat-hint">Siap Pakai</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Aset (Non-Likuid)</div>
          <div className="stat-value stat-asset">Rp {formatRp(assetTotal)}</div>
          <div className="stat-hint">Investasi</div>
        </div>
      </div>

      {/* CASHFLOW CARD */}
      <div className="card">
        <div className="cashflow-header">
          <span className="stat-label">Arus Kas Bulan Ini</span>
        </div>
        <div className="cashflow-summary">
          <div className="cashflow-in">
            Masuk: <b>Rp {formatRp(inc)}</b>
          </div>
          <div className="cashflow-out">
            Keluar: <b>Rp {formatRp(exp)}</b>
          </div>
        </div>
        <CashflowChart income={inc} expense={exp} theme={theme} />
      </div>

      {/* ASSET LIST */}
      <div className="card">
        <h4 className="asset-header">
          Daftar Aset Non-Likuid
          <span className="asset-badge">Investasi</span>
        </h4>
        <div>
          {assets.length === 0 ? (
            <div className="empty-state">Belum ada aset.</div>
          ) : (
            assets.map((a) => (
              <div className="list-item" key={a.id}>
                <div className="list-info">
                  <div className="list-title">{a.desc}</div>
                  <div className="list-meta">
                    Ditambahkan: {formatDate(a.date)}
                  </div>
                </div>
                <div className="list-actions">
                  <div className="list-amount">Rp {formatRp(a.val)}</div>
                  <button
                    className="btn-delete-small"
                    onClick={() => onDeleteAsset(a.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
