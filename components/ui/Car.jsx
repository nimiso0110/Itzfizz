export default function Car({ className = '' }) {
  return (
    <svg viewBox="0 0 420 170" className={className} aria-hidden="true" style={{ filter: 'drop-shadow(0 18px 16px rgba(16,24,32,.35))' }}>
      <g fill="#050608">
        <rect x="70" y="3" width="64" height="27" rx="8" />
        <rect x="70" y="140" width="64" height="27" rx="8" />
        <rect x="290" y="3" width="64" height="27" rx="8" />
        <rect x="290" y="140" width="64" height="27" rx="8" />
      </g>
      <path d="M12 85C12 50 40 30 90 26L300 22C350 22 392 44 408 85C392 126 350 148 300 148L90 144C40 140 12 120 12 85Z" fill="#FF6A13" />
      <path d="M300 22C350 22 392 44 408 85C380 70 340 62 300 62Z" fill="#fff" opacity=".18" />
      <rect x="20" y="82" width="372" height="6" fill="#101820" opacity=".22" />
      <path d="M150 48L262 52C282 60 288 72 288 85C288 98 282 110 262 118L150 122C136 110 132 98 132 85C132 72 136 60 150 48Z" fill="#101820" />
      <path d="M170 58L250 60C262 68 266 76 266 85C266 94 262 102 250 110L170 112C162 104 160 94 160 85C160 76 162 66 170 58Z" fill="#26323D" />
      <path d="M386 56L404 72H386Z M386 114L404 98H386Z" fill="#F7F8F9" />
      <rect x="14" y="58" width="8" height="54" rx="3" fill="#E5252A" />
    </svg>
  );
}
