import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Services", "Blog", "Reviews", "Contact"];

const SERVICES = [
  {
    icon: "✈",
    title: "Immigration Consulting",
    desc: "Expert guidance on visa applications, residency, and citizenship pathways. We navigate complex immigration systems so you don't have to.",
    tags: ["Work Visas", "PR", "Citizenship"],
  },
  {
    icon: "📋",
    title: "Document Preparation",
    desc: "Meticulous review and preparation of immigration documents, ensuring accuracy and compliance with the latest regulations.",
    tags: ["Applications", "Appeals", "Reviews"],
  },
  {
    icon: "💼",
    title: "Career Development",
    desc: "Resume building, interview coaching, and career strategy to help professionals land roles that match their ambitions.",
    tags: ["Resume", "Coaching", "Strategy"],
  },
  {
    icon: "🎓",
    title: "Credential Recognition",
    desc: "Helping internationally educated professionals get their qualifications recognized so they can work in their field.",
    tags: ["ECA", "ICES", "WES"],
  },
  {
    icon: "🤝",
    title: "Settlement Services",
    desc: "Practical support for newcomers — housing, banking, healthcare navigation, and community integration.",
    tags: ["Housing", "Banking", "Community"],
  },
  {
    icon: "📊",
    title: "Employer Recruitment",
    desc: "Connecting forward-thinking employers with internationally trained talent through our curated candidate network.",
    tags: ["Hiring", "LMIA", "Onboarding"],
  },
];

const TESTIMONIALS = [
  {
    name: "Aisha Mohammed",
    role: "Software Engineer → Canada PR",
    text: "Career Upsteps transformed what felt like an impossible process into a clear, step-by-step journey. I received my PR in under 14 months.",
    avatar: "AM",
    color: "#1D9E75",
    rating: 5,
  },
  {
    name: "Ravi Sharma",
    role: "Doctor → UK Work Visa",
    text: "Their credential recognition support was extraordinary. I'd been stuck for 2 years — they resolved everything in 3 months. Truly exceptional.",
    avatar: "RS",
    color: "#185FA5",
    rating: 5,
  },
  {
    name: "Elena Kowalski",
    role: "Engineer → Australia Residency",
    text: "Professional, transparent, and genuinely invested in my success. The career coaching alongside immigration made all the difference.",
    avatar: "EK",
    color: "#993556",
    rating: 5,
  },
  {
    name: "James Okafor",
    role: "Finance Professional → US Work Visa",
    text: "I was skeptical after two failed attempts elsewhere. Career Upsteps diagnosed the issues immediately and got it right. Worth every penny.",
    avatar: "JO",
    color: "#BA7517",
    rating: 5,
  },
  {
    name: "Fatima Al-Hassan",
    role: "Nurse → Germany Blue Card",
    text: "The team's knowledge of European pathways is outstanding. They guided me through language requirements, recognition, and the full application.",
    avatar: "FA",
    color: "#534AB7",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Architect → New Zealand PR",
    text: "Efficient, responsive, and deeply knowledgeable. They secured my partner's visa simultaneously — a feat others said was impossible.",
    avatar: "CM",
    color: "#3B6D11",
    rating: 5,
  },
];

const BLOG_POSTS = [
  {
    category: "Immigration",
    title: "Express Entry 2025: What the Latest Draw Changes Mean for You",
    excerpt: "Canada's immigration ministry has issued new guidance on Express Entry draws. Here's how the updated scoring affects your profile.",
    date: "Mar 28, 2025",
    readTime: "5 min read",
    color: "#E1F5EE",
    accent: "#0F6E56",
  },
  {
    category: "Career",
    title: "The 7 Resume Mistakes That Cost International Professionals Their Dream Role",
    excerpt: "Your international experience is a strength — but only when framed correctly. Discover the common pitfalls and how to fix them.",
    date: "Mar 15, 2025",
    readTime: "7 min read",
    color: "#E6F1FB",
    accent: "#185FA5",
  },
  {
    category: "Settlement",
    title: "First 90 Days in a New Country: A Practical Newcomer Checklist",
    excerpt: "Banking, healthcare, SIN cards, and more — our comprehensive checklist ensures you hit the ground running from day one.",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    color: "#EEEDFE",
    accent: "#534AB7",
  },
];

const STATS = [
  { value: "2,400+", label: "Clients Served" },
  { value: "94%", label: "Success Rate" },
  { value: "15+", label: "Countries" },
  { value: "12", label: "Years Experience" },
];

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#EF9F27", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

function NavBar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #eee" : "none",
      transition: "all 0.3s ease",
      padding: "0 clamp(1.5rem, 5vw, 4rem)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        {/* Logo */}
        <div
          onClick={() => setActive("Home")}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #1D9E75 0%, #185FA5 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: -0.5,
          }}>CU</div>
          <div>
            <div style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 17, color: "#0a0a0a", lineHeight: 1.1, letterSpacing: -0.3 }}>Career Upsteps</div>
            <div style={{ fontSize: 10, color: "#888", letterSpacing: 1.5, textTransform: "uppercase" }}>Immigration & Career</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 6, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => setActive(link)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px 14px", borderRadius: 8,
                fontSize: 14, fontWeight: active === link ? 600 : 400,
                color: active === link ? "#1D9E75" : "#444",
                transition: "all 0.15s",
                position: "relative",
              }}
            >
              {link}
              {active === link && (
                <div style={{
                  position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                  width: 4, height: 4, borderRadius: "50%", background: "#1D9E75",
                }} />
              )}
            </button>
          ))}
          <button
            onClick={() => setActive("Contact")}
            style={{
              marginLeft: 8,
              background: "#1D9E75", color: "#fff", border: "none",
              padding: "9px 20px", borderRadius: 8, fontSize: 14,
              fontWeight: 600, cursor: "pointer", transition: "background 0.2s",
            }}
            onMouseOver={e => e.currentTarget.style.background = "#0F6E56"}
            onMouseOut={e => e.currentTarget.style.background = "#1D9E75"}
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(v => !v)}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", fontSize: 22, color: "#333",
          }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{
          background: "#fff", borderTop: "1px solid #eee",
          padding: "1rem", display: "flex", flexDirection: "column", gap: 4,
        }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => { setActive(link); setMobileOpen(false); }}
              style={{
                background: active === link ? "#f0faf6" : "none",
                border: "none", cursor: "pointer", textAlign: "left",
                padding: "10px 14px", borderRadius: 8, fontSize: 15,
                color: active === link ? "#1D9E75" : "#333", fontWeight: active === link ? 600 : 400,
              }}
            >{link}</button>
          ))}
          <button
            onClick={() => { setActive("Contact"); setMobileOpen(false); }}
            style={{
              marginTop: 8, background: "#1D9E75", color: "#fff",
              border: "none", padding: "11px 20px", borderRadius: 8,
              fontSize: 14, fontWeight: 600, cursor: "pointer",
            }}
          >Free Consultation</button>
        </div>
      )}
    </nav>
  );
}

function HomePage({ setActive }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #f8fffe 0%, #edf7f2 40%, #eaf3ff 100%)",
        display: "flex", alignItems: "center",
        padding: "120px clamp(1.5rem, 5vw, 4rem) 80px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background decoration */}
        <div style={{
          position: "absolute", right: -100, top: -100,
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(29,158,117,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", left: -150, bottom: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(24,95,165,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#e8f8f2", border: "1px solid #a3dfc7",
                borderRadius: 20, padding: "6px 14px", marginBottom: "1.5rem",
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1D9E75" }} />
                <span style={{ fontSize: 13, color: "#0F6E56", fontWeight: 600, letterSpacing: 0.3 }}>Trusted by 2,400+ Clients Worldwide</span>
              </div>

              <h1 style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 700, lineHeight: 1.12,
                color: "#0a0a0a", marginBottom: "1.5rem",
                letterSpacing: -1.5,
              }}>
                Your Career &<br />
                <span style={{ color: "#1D9E75" }}>Immigration</span><br />
                Partner
              </h1>

              <p style={{ fontSize: 17, color: "#555", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 460 }}>
                We guide professionals and families through immigration pathways and career transitions — with clarity, expertise, and a 94% success rate.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() => setActive("Contact")}
                  style={{
                    background: "#1D9E75", color: "#fff", border: "none",
                    padding: "14px 28px", borderRadius: 10, fontSize: 15,
                    fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                    boxShadow: "0 4px 20px rgba(29,158,117,0.3)",
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = "#0F6E56"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "#1D9E75"; e.currentTarget.style.transform = "translateY(0)"; }}
                >Book Free Consultation</button>
                <button
                  onClick={() => setActive("Services")}
                  style={{
                    background: "transparent", color: "#1D9E75",
                    border: "1.5px solid #1D9E75",
                    padding: "14px 28px", borderRadius: 10, fontSize: 15,
                    fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = "#f0faf6"; }}
                  onMouseOut={e => { e.currentTarget.style.background = "transparent"; }}
                >Explore Services</button>
              </div>

              {/* Trust markers */}
              <div style={{ display: "flex", gap: 24, marginTop: "3rem", flexWrap: "wrap" }}>
                {STATS.map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0a0a0a", letterSpacing: -0.5 }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero illustration panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="hero-cards">
              {/* Card 1 */}
              <div style={{
                background: "#fff", borderRadius: 16,
                border: "1px solid #e8f0e8", padding: "1.5rem",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "#e8f8f2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>✈</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#0a0a0a" }}>Express Entry Profile</div>
                    <div style={{ fontSize: 12, color: "#888" }}>CRS Score Analysis</div>
                  </div>
                  <div style={{ marginLeft: "auto", background: "#e8f8f2", color: "#0F6E56", borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 600 }}>Active</div>
                </div>
                <div style={{ background: "#f8f8f8", borderRadius: 8, padding: "10px 14px", display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "#666" }}>CRS Score</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#1D9E75" }}>487 / 600</span>
                </div>
              </div>

              {/* Card 2 */}
              <div style={{
                background: "#fff", borderRadius: 16,
                border: "1px solid #e8eef8", padding: "1.5rem",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                marginLeft: 32,
              }}>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 8 }}>Latest Success</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#1D9E75", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, fontSize: 13 }}>SA</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#0a0a0a" }}>Sarah A. — PR Approved</div>
                    <div style={{ fontSize: 12, color: "#888" }}>Ontario • 11 months</div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div style={{
                background: "linear-gradient(135deg, #1D9E75, #185FA5)",
                borderRadius: 16, padding: "1.5rem",
                boxShadow: "0 4px 24px rgba(29,158,117,0.25)",
              }}>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, marginBottom: 8 }}>Next Available Slot</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Free 30-Min Consultation</div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, marginBottom: 16 }}>Tomorrow, 10:00 AM • Video Call</div>
                <button
                  onClick={() => setActive("Contact")}
                  style={{
                    background: "#fff", color: "#1D9E75",
                    border: "none", padding: "10px 20px", borderRadius: 8,
                    fontWeight: 600, fontSize: 13, cursor: "pointer",
                  }}
                >Book Now →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{ padding: "5rem clamp(1.5rem, 5vw, 4rem)", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>What We Do</div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#0a0a0a", marginBottom: 12, letterSpacing: -0.8 }}>
              Comprehensive Support,<br />Start to Finish
            </h2>
            <p style={{ fontSize: 16, color: "#666", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              From your first visa inquiry to landing your dream role, we're with you at every step.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {SERVICES.slice(0, 3).map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#fafafa", border: "1px solid #efefef", borderRadius: 16,
                  padding: "1.75rem", transition: "all 0.25s", cursor: "pointer",
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.borderColor = "#1D9E75";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(29,158,117,0.1)";
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = "#fafafa";
                  e.currentTarget.style.borderColor = "#efefef";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: "#0a0a0a", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ background: "#edf7f2", color: "#0F6E56", borderRadius: 5, padding: "3px 9px", fontSize: 12, fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <button
              onClick={() => setActive("Services")}
              style={{
                background: "none", border: "1.5px solid #1D9E75", color: "#1D9E75",
                padding: "12px 28px", borderRadius: 9, fontSize: 14, fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseOver={e => e.currentTarget.style.background = "#f0faf6"}
              onMouseOut={e => e.currentTarget.style.background = "none"}
            >View All Services →</button>
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section style={{ padding: "5rem clamp(1.5rem, 5vw, 4rem)", background: "#f8fffe" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>Client Stories</div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#0a0a0a", letterSpacing: -0.8 }}>
              Real People, Real Results
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
            {TESTIMONIALS.slice(0, 3).map(t => (
              <div key={t.name} style={{
                background: "#fff", border: "1px solid #eee", borderRadius: 16, padding: "1.5rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}>
                <StarRating />
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.7, margin: "12px 0 16px", fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: "#0a0a0a" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#999" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage({ setActive }) {
  const team = [
    { name: "Dr. Amara Nwosu", role: "Founder & Lead Consultant", bio: "15+ years in immigration law and policy. Former government advisor with deep expertise across North American and European systems.", initials: "AN", color: "#1D9E75" },
    { name: "James Obi", role: "Senior Career Strategist", bio: "Helped 800+ professionals reframe their international experience for local job markets. Former recruiter at a Big 4 firm.", initials: "JO", color: "#185FA5" },
    { name: "Priya Chandran", role: "Immigration Specialist", bio: "Specialises in Express Entry, PNP streams, and UK Skilled Worker routes. Known for her meticulous document reviews.", initials: "PC", color: "#993556" },
    { name: "Marcus White", role: "Settlement & Integration Lead", bio: "Personally navigated immigration as a newcomer — brings lived experience and deep empathy to every client interaction.", initials: "MW", color: "#BA7517" },
  ];

  const values = [
    { title: "Transparency", desc: "No hidden fees, no vague timelines. You'll always know exactly where you stand and what comes next." },
    { title: "Expertise", desc: "Our team maintains active credentials and tracks policy changes daily, so your advice is always current." },
    { title: "Integrity", desc: "We only take on cases we believe we can win. If we can't help you, we'll say so — and point you somewhere that can." },
    { title: "Empathy", desc: "We understand the stakes. Immigration is deeply personal. We treat every case with the seriousness it deserves." },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg, #edf7f2 0%, #eaf3ff 100%)", padding: "5rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>Our Story</div>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0a0a0a", marginBottom: 20, letterSpacing: -1 }}>
            We Built Career Upsteps<br />Because We Lived It
          </h1>
          <p style={{ fontSize: 17, color: "#555", lineHeight: 1.8, maxWidth: 620, margin: "0 auto" }}>
            Founded in 2013, Career Upsteps was born out of a frustration with opaque, expensive immigration processes that left talented professionals stranded. Our founder, Dr. Amara Nwosu, navigated her own immigration journey and swore to build a consultancy that combined genuine legal expertise with real human care.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#1D9E75", padding: "2.5rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, textAlign: "center" }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", letterSpacing: -1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "5rem clamp(1.5rem, 5vw, 4rem)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "2rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "2.5rem", letterSpacing: -0.8 }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {values.map((v, i) => (
              <div key={v.title} style={{ borderLeft: "3px solid #1D9E75", paddingLeft: "1.25rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0a0a0a", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", background: "#f8fffe" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "2rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "2.5rem", letterSpacing: -0.8 }}>Meet the Team</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {team.map(m => (
              <div key={m.name} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 16, padding: "1.5rem" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: m.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 18, marginBottom: 14 }}>{m.initials}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: "#0a0a0a", marginBottom: 4 }}>{m.name}</h3>
                <div style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, marginBottom: 10 }}>{m.role}</div>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", textAlign: "center", background: "#fff" }}>
        <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "1.8rem", fontWeight: 700, color: "#0a0a0a", marginBottom: 12 }}>Ready to Take the Next Step?</h2>
        <p style={{ fontSize: 16, color: "#666", marginBottom: 24 }}>Book a free 30-minute consultation and let's map out your path together.</p>
        <button
          onClick={() => setActive("Contact")}
          style={{ background: "#1D9E75", color: "#fff", border: "none", padding: "14px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer" }}
        >Book Free Consultation</button>
      </section>
    </div>
  );
}

function ServicesPage({ setActive }) {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: "linear-gradient(160deg, #edf7f2 0%, #f0f4ff 100%)", padding: "5rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>Our Services</div>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0a0a0a", marginBottom: 16, letterSpacing: -1 }}>
            Everything You Need,<br />Under One Roof
          </h1>
          <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8 }}>We offer end-to-end support — from the first visa inquiry through to job placement and settlement.</p>
        </div>
      </section>

      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 22 }}>
          {SERVICES.map(s => (
            <div
              key={s.title}
              style={{
                background: "#fafafa", border: "1px solid #eee", borderRadius: 18, padding: "2rem",
                transition: "all 0.25s", cursor: "pointer",
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.borderColor = "#1D9E75";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(29,158,117,0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = "#fafafa";
                e.currentTarget.style.borderColor = "#eee";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: 18, color: "#0a0a0a", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                {s.tags.map(t => (
                  <span key={t} style={{ background: "#edf7f2", color: "#0F6E56", borderRadius: 5, padding: "3px 10px", fontSize: 12, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
              <button
                onClick={() => setActive("Contact")}
                style={{ background: "none", border: "1px solid #1D9E75", color: "#1D9E75", padding: "9px 18px", borderRadius: 7, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
              >Enquire →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", background: "#f8fffe" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "2rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "3rem", textAlign: "center", letterSpacing: -0.8 }}>
            How It Works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
            {[
              { step: "01", title: "Free Consultation", desc: "30 minutes to understand your situation and goals." },
              { step: "02", title: "Strategy Session", desc: "We map your best pathway with a clear timeline." },
              { step: "03", title: "Document Prep", desc: "Our team prepares and reviews every document." },
              { step: "04", title: "Submission", desc: "We file everything and track progress for you." },
            ].map(p => (
              <div key={p.step} style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#edf7f2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontWeight: 700, fontSize: 15, color: "#1D9E75" }}>{p.step}</div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: "#0a0a0a", marginBottom: 6 }}>{p.title}</h4>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: "linear-gradient(160deg, #edf7f2 0%, #eaf3ff 100%)", padding: "5rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>Insights & Guides</div>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "#0a0a0a", marginBottom: 16, letterSpacing: -1 }}>The Career Upsteps Blog</h1>
          <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8 }}>Expert guides on immigration, career development, and building a new life abroad.</p>
        </div>
      </section>

      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Featured */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ fontSize: 13, color: "#888", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Featured</div>
            <div style={{
              background: BLOG_POSTS[0].color, border: `1px solid ${BLOG_POSTS[0].accent}20`,
              borderRadius: 20, padding: "2.5rem", display: "grid",
              gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "center",
              cursor: "pointer",
            }}>
              <div>
                <span style={{ background: BLOG_POSTS[0].accent, color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: 12, fontWeight: 600, display: "inline-block", marginBottom: 16 }}>{BLOG_POSTS[0].category}</span>
                <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "1.6rem", fontWeight: 700, color: "#0a0a0a", marginBottom: 12, lineHeight: 1.3, letterSpacing: -0.5 }}>{BLOG_POSTS[0].title}</h2>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, marginBottom: 16 }}>{BLOG_POSTS[0].excerpt}</p>
                <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#888" }}>
                  <span>{BLOG_POSTS[0].date}</span>
                  <span>·</span>
                  <span>{BLOG_POSTS[0].readTime}</span>
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.5)", borderRadius: 14, height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 64 }}>✈</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {BLOG_POSTS.slice(1).map(p => (
              <div
                key={p.title}
                style={{
                  background: "#fafafa", border: "1px solid #eee", borderRadius: 16,
                  overflow: "hidden", cursor: "pointer", transition: "all 0.2s",
                }}
                onMouseOver={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseOut={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ background: p.color, height: 120, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
                  {p.category === "Career" ? "💼" : "🏠"}
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <span style={{ background: p.accent, color: "#fff", borderRadius: 5, padding: "3px 9px", fontSize: 11, fontWeight: 600, display: "inline-block", marginBottom: 10 }}>{p.category}</span>
                  <h3 style={{ fontWeight: 700, fontSize: 15, color: "#0a0a0a", marginBottom: 8, lineHeight: 1.4 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, marginBottom: 12 }}>{p.excerpt}</p>
                  <div style={{ display: "flex", gap: 10, fontSize: 12, color: "#aaa" }}>
                    <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{
            marginTop: "3rem", background: "linear-gradient(135deg, #1D9E75, #185FA5)",
            borderRadius: 20, padding: "2.5rem", textAlign: "center", color: "#fff",
          }}>
            <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: 8 }}>Stay Informed</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>Get immigration updates and career tips delivered to your inbox.</p>
            <div style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  flex: 1, padding: "11px 16px", borderRadius: 8, border: "none",
                  fontSize: 14, minWidth: 200, outline: "none",
                }}
              />
              <button style={{
                background: "#fff", color: "#1D9E75", border: "none",
                padding: "11px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ReviewsPage() {
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: "linear-gradient(160deg, #fffdf0 0%, #edf7f2 100%)", padding: "5rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: 16 }}>
            {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#EF9F27", fontSize: 28 }}>★</span>)}
          </div>
          <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "#0a0a0a", letterSpacing: -1 }}>4.9 / 5.0</div>
          <div style={{ fontSize: 14, color: "#888", marginBottom: 16 }}>Based on 480+ verified reviews</div>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#0a0a0a", letterSpacing: -0.8 }}>
            What Our Clients Say
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Platform ratings */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: "3.5rem" }}>
            {[
              { platform: "Google Reviews", score: "4.9", count: "312 reviews" },
              { platform: "Trustpilot", score: "4.8", count: "96 reviews" },
              { platform: "Facebook", score: "4.9", count: "74 reviews" },
            ].map(r => (
              <div key={r.platform} style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 14, padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 700, color: "#0a0a0a" }}>{r.score} ★</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#333", marginTop: 4 }}>{r.platform}</div>
                <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{r.count}</div>
              </div>
            ))}
          </div>

          {/* All testimonials */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
            {TESTIMONIALS.map(t => (
              <div key={t.name} style={{
                background: "#fff", border: "1px solid #eee", borderRadius: 18, padding: "1.75rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transition: "all 0.2s",
              }}>
                <StarRating count={t.rating} />
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.75, margin: "14px 0 18px", fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #f5f5f5", paddingTop: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#0a0a0a" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#999" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: "linear-gradient(160deg, #edf7f2 0%, #eaf3ff 100%)", padding: "5rem clamp(1.5rem, 5vw, 4rem)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>Get in Touch</div>
          <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0a0a0a", marginBottom: 16, letterSpacing: -1 }}>
            Let's Start Your Journey
          </h1>
          <p style={{ fontSize: 16, color: "#555", lineHeight: 1.8 }}>Book a free consultation or send us an enquiry. Our team responds within 1 business day.</p>
        </div>
      </section>

      <section style={{ padding: "4rem clamp(1.5rem, 5vw, 4rem)", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }} className="contact-grid">
          {/* Info column */}
          <div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "1.75rem" }}>Contact Information</h2>

            {[
              { icon: "✉", label: "Email", value: "hello@careerupsteps.com", href: "mailto:hello@careerupsteps.com" },
              { icon: "📱", label: "WhatsApp", value: "+1 (416) 555-0192", href: "https://wa.me/14165550192" },
              { icon: "📞", label: "Phone", value: "+1 (416) 555-0180", href: "tel:+14165550180" },
            ].map(c => (
              <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "#edf7f2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8 }}>{c.label}</div>
                  <a href={c.href} style={{ color: "#1D9E75", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>{c.value}</a>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
              <div style={{ fontSize: 12, color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 12 }}>Follow Us</div>
              <div style={{ display: "flex", gap: 10 }}>
                {["LinkedIn", "Facebook", "Instagram", "Twitter"].map(s => (
                  <div key={s} style={{
                    padding: "7px 14px", background: "#f5f5f5", borderRadius: 8,
                    fontSize: 12, fontWeight: 600, color: "#555", cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                    onMouseOver={e => { e.currentTarget.style.background = "#edf7f2"; e.currentTarget.style.color = "#1D9E75"; }}
                    onMouseOut={e => { e.currentTarget.style.background = "#f5f5f5"; e.currentTarget.style.color = "#555"; }}
                  >{s}</div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{
              background: "linear-gradient(135deg, #edf7f2 0%, #eaf3ff 100%)",
              borderRadius: 16, height: 200, display: "flex", alignItems: "center",
              justifyContent: "center", border: "1px solid #ddeee8", flexDirection: "column", gap: 8,
            }}>
              <div style={{ fontSize: 32 }}>📍</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#0a0a0a" }}>Career Upsteps HQ</div>
              <div style={{ fontSize: 13, color: "#666", textAlign: "center", lineHeight: 1.5 }}>
                Suite 400, 123 Bay Street<br />Toronto, ON M5J 2T3<br />Canada
              </div>
            </div>

            {/* Office hours */}
            <div style={{ marginTop: "1.5rem", padding: "1.25rem", background: "#fafafa", borderRadius: 12, border: "1px solid #eee" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#0a0a0a", marginBottom: 8 }}>Office Hours</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 2 }}>
                Mon – Fri: 9:00 AM – 6:00 PM (EST)<br />
                Saturday: 10:00 AM – 2:00 PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 20, padding: "2.5rem" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#edf7f2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 28 }}>✓</div>
                <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.4rem", fontWeight: 700, color: "#0a0a0a", marginBottom: 10 }}>Message Received!</h3>
                <p style={{ fontSize: 15, color: "#666", lineHeight: 1.7 }}>Thanks for reaching out. A member of our team will be in touch within 1 business day.</p>
                <button onClick={() => setSubmitted(false)} style={{ marginTop: 20, background: "#1D9E75", color: "#fff", border: "none", padding: "10px 24px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Send Another</button>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0a0a0a", marginBottom: "1.5rem" }}>Send an Enquiry</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#555", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Full Name *</label>
                    <input
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="John Doe"
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1px solid #e0e0e0", fontSize: 14, outline: "none", background: "#fff", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#555", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Email *</label>
                    <input
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="john@email.com"
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1px solid #e0e0e0", fontSize: 14, outline: "none", background: "#fff", boxSizing: "border-box" }}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#555", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Phone / WhatsApp</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                    placeholder="+1 (---) --- ----"
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1px solid #e0e0e0", fontSize: 14, outline: "none", background: "#fff", boxSizing: "border-box" }}
                  />
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#555", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Service of Interest</label>
                  <select
                    value={form.service}
                    onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1px solid #e0e0e0", fontSize: 14, outline: "none", background: "#fff", boxSizing: "border-box" }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#555", display: "block", marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>Your Message *</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us about your situation, goals, and any questions you have..."
                    rows={5}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1px solid #e0e0e0", fontSize: 14, outline: "none", background: "#fff", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100%", background: "#1D9E75", color: "#fff",
                    border: "none", padding: "14px", borderRadius: 10,
                    fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "background 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.background = "#0F6E56"}
                  onMouseOut={e => e.currentTarget.style.background = "#1D9E75"}
                >
                  Send Enquiry →
                </button>
                <p style={{ fontSize: 12, color: "#aaa", textAlign: "center", marginTop: 12 }}>We respond within 1 business day. Your information is never shared.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer({ setActive }) {
  return (
    <footer style={{ background: "#0a0a0a", color: "#ccc", padding: "4rem clamp(1.5rem, 5vw, 4rem) 2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2.5rem", marginBottom: "3rem" }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: "linear-gradient(135deg, #1D9E75, #185FA5)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13 }}>CU</div>
              <div style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 16, color: "#fff" }}>Career Upsteps</div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "#888", maxWidth: 280 }}>Empowering professionals to navigate immigration systems and build careers without borders since 2013.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              {["in", "fb", "ig", "𝕏"].map(s => (
                <div key={s} style={{ width: 32, height: 32, borderRadius: 7, background: "#1a1a1a", border: "1px solid #2a2a2a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, cursor: "pointer", color: "#888" }}>{s}</div>
              ))}
            </div>
          </div>
          {[
            { title: "Services", links: ["Immigration Consulting", "Document Prep", "Career Development", "Credential Recognition", "Settlement Services"] },
            { title: "Company", links: ["About Us", "Blog", "Reviews", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>{col.title}</div>
              {col.links.map(l => (
                <div key={l} style={{ fontSize: 13, color: "#888", marginBottom: 9, cursor: "pointer", transition: "color 0.15s" }}
                  onMouseOver={e => e.currentTarget.style.color = "#1D9E75"}
                  onMouseOut={e => e.currentTarget.style.color = "#888"}
                >{l}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "#555" }}>© 2025 Career Upsteps. All rights reserved.</div>
          <div style={{ fontSize: 12, color: "#555" }}>Regulated Immigration Consultant · ICCRC Member</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "Home": return <HomePage setActive={setActivePage} />;
      case "About": return <AboutPage setActive={setActivePage} />;
      case "Services": return <ServicesPage setActive={setActivePage} />;
      case "Blog": return <BlogPage />;
      case "Reviews": return <ReviewsPage />;
      case "Contact": return <ContactPage />;
      default: return <HomePage setActive={setActivePage} />;
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", color: "#0a0a0a", minHeight: "100vh" }}>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-cards { display: none !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        input:focus, textarea:focus, select:focus { border-color: #1D9E75 !important; box-shadow: 0 0 0 3px rgba(29,158,117,0.15) !important; }
      `}</style>
      <NavBar active={activePage} setActive={setActivePage} />
      <main>{renderPage()}</main>
      <Footer setActive={setActivePage} />
    </div>
  );
}
