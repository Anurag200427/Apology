// Animated cartoon background with coffee, milk, and cute characters (plain CSS)
export default function AnimatedCoffeeMilkBg() {
  return (
    <div className="animated-bg">
      {/* Animated floating coffee cup */}
      <div className="float-cup">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <ellipse cx="35" cy="35" rx="34" ry="26" fill="#d6ccc2" stroke="#7f5539" strokeWidth="2"/>
          <ellipse cx="35" cy="40" rx="28" ry="10" fill="#fffefb"/>
          <ellipse cx="35" cy="35" rx="18" ry="12" fill="#b08968"/>
          <rect x="28" y="15" width="14" height="8" rx="4" fill="#f5ebe0" stroke="#7f5539" strokeWidth="1.5"/>
        </svg>
      </div>
      {/* Animated floating milk carton */}
      <div className="float-milk">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <rect x="10" y="20" width="40" height="50" rx="8" fill="#fffefb" stroke="#e9e4d6" strokeWidth="2"/>
          <rect x="18" y="10" width="24" height="18" rx="4" fill="#f7f6f3" stroke="#b08968" strokeWidth="1.5"/>
          <text x="30" y="50" textAnchor="middle" fontSize="16" fill="#b08968" fontFamily="Arial">MILK</text>
        </svg>
      </div>
      {/* Cute animated heart */}
      <div className="float-heart">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 44s-14-8.35-14-18.5C10 16.5 16 12 24 20c8-8 14-3.5 14 5.5C38 35.65 24 44 24 44z" fill="#fbbf24" stroke="#7f5539" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
}
