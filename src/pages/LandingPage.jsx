import { Link } from "react-router-dom";
import AnimatedCoffeeMilkBg from "../components/AnimatedCoffeeMilkBg";

export default function LandingPage() {
  return (
    <div className="main-container">
      <AnimatedCoffeeMilkBg />
      <div className="card">
        <div style={{ marginBottom: '1.5rem' }}>
          <svg width="64" height="64" fill="none" style={{ display: 'block', margin: '0 auto 0.5rem auto' }}>
            <ellipse cx="32" cy="32" rx="28" ry="18" fill="#d6ccc2" stroke="#7f5539" strokeWidth="2"/>
            <ellipse cx="32" cy="38" rx="22" ry="8" fill="#fffefb"/>
            <ellipse cx="32" cy="32" rx="12" ry="8" fill="#b08968"/>
          </svg>
        </div>
        <h1 className="heading font-handwriting">I’m Sorry</h1>
        <p className="text">
          Sometimes words are hard to find, but I hope this letter helps you feel how truly sorry I am.
        </p>
        <Link to="/letter">
          <button className="button font-handwriting">
            Read Letter
          </button>
        </Link>
      </div>
    </div>
  );
}
