import { useState } from 'react';

export default function InputModal({ isOpen, onClose, onSave }) {
  const [type, setType] = useState('expense');
  const [desc, setDesc] = useState('');
  const [val, setVal] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    const numVal = parseFloat(val);
    if (!desc || !numVal) return;

    const item = {
      id: Date.now(),
      type,
      desc,
      val: numVal,
      date: new Date().toISOString(),
    };

    onSave(item);
    setDesc('');
    setVal('');
    onClose();
  };

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <h3 className="modal-title">Tambah Baru</h3>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Pengeluaran (Likuid -)</option>
          <option value="income">Pemasukan (Likuid +)</option>
          <option value="asset">Aset Baru (Non-Likuid +)</option>
        </select>
        <input
          type="text"
          placeholder="Keterangan (cth: Gaji, Emas)"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nominal (Rp)"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button className="btn-save" onClick={handleSave}>
          Simpan
        </button>
        <button className="btn-cancel" onClick={onClose}>
          Batal
        </button>
      </div>
    </div>
  );
}
