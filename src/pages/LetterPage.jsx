import { useState } from "react";
import "./wimpyKidLetter.css";
import AnimatedCoffeeMilkBg from "../components/AnimatedCoffeeMilkBg";

export default function LetterPage() {
  const [responseType, setResponseType] = useState(null); // 'accept' | 'reject' | null

  return (
    <div className="main-container">
      <AnimatedCoffeeMilkBg />

      {responseType ? (
        <div style={{
          maxWidth: 600,
          margin: '5rem auto',
          padding: '2rem',
          borderRadius: '1.3rem',
          background: '#fffefb',
          boxShadow: '0 6px 28px rgba(127,85,57,0.10)',
          border: '2.5px solid #b08968',
          textAlign: 'center'
        }}>
          <h2 className="font-handwriting" style={{ color: '#7f5539', fontSize: '2rem', marginBottom: '1rem' }}>
            {responseType === 'accept' ? "Thank you for forgiving me 💌" : "Sorry to disturb you 🙏"}
          </h2>
          <p className="font-handwriting" style={{ fontSize: '1.3rem', color: '#7f5539' }}>
            {responseType === 'accept'
              ? "Here’s a rose for you 🌹"
              : "I bought this rose for you if you accepted, but never mind—you can still keep the rose though 🌹"}
          </p>
          <div style={{ margin: '2rem 0' }}>
            <img
              src={responseType === 'accept' ? "/accept.jpg" : "/reject.jpg"}
              alt="A rose"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '0.5rem' }}
            />
          </div>
          <button
            className="button font-handwriting"
            style={{ background: '#e9e4d6', color: '#7f5539', border: '2px solid #b08968', padding: '0.6rem 2rem' }}
            onClick={() => setResponseType(null)}
          >
            ← Back
          </button>
        </div>
      ) : (
        <>
          <div className="card wimpy-kid-paper" style={{ position: 'relative', marginTop: '3rem', maxWidth: 700 }}>
            <div style={{ position: 'absolute', top: '-3.5rem', left: '50%', transform: 'translateX(-50%)' }}>
              <svg width="90" height="60" viewBox="0 0 90 60" fill="none">
                <ellipse cx="25" cy="40" rx="20" ry="14" fill="#d6ccc2" stroke="#7f5539" strokeWidth="2" />
                <ellipse cx="65" cy="40" rx="18" ry="13" fill="#fffefb" stroke="#e9e4d6" strokeWidth="2" />
                <ellipse cx="25" cy="44" rx="14" ry="6" fill="#b08968" />
                <rect x="57" y="22" width="16" height="8" rx="3" fill="#f7f6f3" stroke="#b08968" strokeWidth="1.5" />
              </svg>
            </div>
            <h2 className="heading font-handwriting">My Love,</h2>
            <p className="text font-handwriting" style={{ whiteSpace: 'pre-line', marginBottom: '2rem' }}>
              I don’t know where to start, but I want to speak from the heart. I’m deeply sorry. Truly. I know things have been messy, confusing, and painful lately—and I take full responsibility for the hurt you felt.

              Whatever happened between us, I want you to know it was never my intention to hurt you. I now realize how things may have looked or felt to you, and I understand why you were upset. But I promise you—from the bottom of my heart—it was a misunderstanding. I should’ve been clearer. I should’ve communicated better. And I should’ve never let you carry the weight of doubt, confusion, or pain.

              You’ve always been there for me—loving me, supporting me, and believing in me. And it breaks my heart to think that I let anything come between us. I can’t change what happened, but I can promise you this: from now on, I will be more open, more honest, and more intentional with my words and actions. No more grey areas, no more confusion—only clarity, love, and truth.

              You mean so much to me. Losing your trust, even for a moment, has shaken me in ways I can’t explain. Please, forgive me. Let’s not let a misunderstanding define what we’ve built together. Let’s hold on to the love, the laughter, and the dreams we share.

              I’m still here, loving you just the same—if not more—with a heart full of hope that we can heal this, together.

              Yours always,
              Anurag
              <br />
              <span style={{ fontSize: '2rem' }}>❤️</span>
            </p>

            <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.5rem', opacity: 0.8 }}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="5" y="10" width="30" height="22" rx="6" fill="#fffefb" stroke="#b08968" strokeWidth="2" />
                <ellipse cx="20" cy="27" rx="10" ry="4" fill="#e9e4d6" />
                <circle cx="15" cy="22" r="2" fill="#b08968" />
                <circle cx="25" cy="22" r="2" fill="#b08968" />
                <path d="M16 26 Q20 29 24 26" stroke="#b08968" strokeWidth="1.5" fill="none" />
              </svg>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <button className="button font-handwriting" onClick={() => {
                document.getElementById('milestone-timeline')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Want to know how far we have come?
              </button>
            </div>
          </div>

          {/* Our Journey Timeline */}
          <section id="milestone-timeline" style={{ marginTop: '4rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className="timeline-container">
              <h3 className="heading font-handwriting" style={{ textAlign: 'center', marginBottom: '2.5rem', color: '#7f5539' }}>
                Our Journey Milestones
              </h3>
              <div className="timeline">
                <div className="timeline-item left">
                  <div className="timeline-img-wrapper">
                    <img src="/i1.jpg" alt="First Meeting" />
                  </div>
                  <div className="timeline-content">
                    <h4>First Meeting</h4>
                    <p>That first magical moment when our eyes met and everything changed.</p>
                    <span className="timeline-date">2024</span>
                  </div>
                </div>

                <div className="timeline-item right">
                  <div className="timeline-img-wrapper">
                    <img src="/i2.jpg" alt="First Date" />
                  </div>
                  <div className="timeline-content">
                    <h4>First Date</h4>
                    <p>Remember the bad coffee at CCD.</p>
                    <span className="timeline-date">Oct 2024</span>
                  </div>
                </div>

                <div className="timeline-item left">
                  <div className="timeline-img-wrapper">
                    <img src="/i3.jpeg" alt="Shopping Together" />
                  </div>
                  <div className="timeline-content">
                    <h4>Shopping Together</h4>
                    <p>Following your lead in the market. Smelling your hair while you shop.</p>
                    <span className="timeline-date">Mar 2025</span>
                  </div>
                </div>

                <div className="timeline-item right">
                  <div className="timeline-img-wrapper">
                    <img src="/i4.jpg" alt="Pinterest Photos" />
                  </div>
                  <div className="timeline-content">
                    <h4>Clicking Pinterest Photos</h4>
                    <p>Exploring new poses, clicking new memories.</p>
                    <span className="timeline-date">Oct 2024</span>
                  </div>
                </div>

                <div className="timeline-item left">
                  <div className="timeline-img-wrapper">
                    <img src="/i5.jpeg" alt="I Love You" />
                  </div>
                  <div className="timeline-content">
                    <h4>Kisses and 'I Love You's</h4>
                    <p>Every touch was real and true. Just pure togetherness.</p>
                    <span className="timeline-date">March 2025</span>
                  </div>
                </div>

                <div className="timeline-item right">
                  <div className="timeline-img-wrapper">
                    <img src="/i6.jpeg" alt="Goodbyes" />
                  </div>
                  <div className="timeline-content">
                    <h4>The Goodbyes</h4>
                    <p>The pain of leaving. But hope that this isn’t the end.</p>
                    <span className="timeline-date">26th Aug - forever</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Apology Buttons */}
          <div style={{ maxWidth: 700, margin: '2.5rem auto 0 auto', background: '#fffefb', borderRadius: '1.3rem', boxShadow: '0 6px 28px rgba(127,85,57,0.10)', border: '2.5px solid #b08968', padding: '2.2rem 1.8rem 2.8rem 1.8rem', textAlign: 'center' }}>
            <p style={{ color: '#7f5539', fontSize: '1.13rem', marginBottom: '2.2rem', fontFamily: 'inherit' }}>
              I had been a bad guy and I promise to improve. You deserve better and the final call is yours.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <button
                className="button font-handwriting"
                style={{ background: '#e9e4d6', color: '#7f5539', border: '2px solid #b08968', minWidth: 140 }}
                onClick={() => setResponseType('accept')}
              >
                Accept Apology
              </button>
              <button
                className="button font-handwriting"
                style={{ background: '#f7e0d6', color: '#b08968', border: '2px solid #b08968', minWidth: 140 }}
                onClick={() => setResponseType('reject')}
              >
                Reject
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
