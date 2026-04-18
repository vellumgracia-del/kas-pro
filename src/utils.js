export function formatRp(num) {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(num);
}

export function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
  });
}

export function formatDateFull(isoString) {
  const dateObj = new Date(isoString);
  const dateStr = dateObj.toLocaleDateString('id-ID', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
  const timeStr = dateObj.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${dateStr} • ${timeStr}`;
}

export function getCurrentDate() {
  const d = new Date();
  return d.toLocaleDateString('id-ID', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}
