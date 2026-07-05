"use client";
import Link from "next/link";
import { FileText, Mail, ExternalLink } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "services", label: "2. Description of Services" },
  { id: "payments", label: "3. Payments & Refunds" },
  { id: "ip", label: "4. Intellectual Property" },
  { id: "responsibilities", label: "5. User Responsibilities" },
  { id: "disclaimers", label: "6. Disclaimers & Liability" },
  { id: "termination", label: "7. Termination" },
  { id: "governing-law", label: "8. Governing Law" },
  { id: "contact", label: "9. Contact Us" },
];

export default function TermsOfServicePage() {
  return (
    <main style={{ background: "#ffffff", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "5rem 2rem 4rem",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(37,99,235,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(234,88,12,0.1)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
            <FileText size={14} color="#93c5fd" />
            <span style={{ color: "#93c5fd", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Legal</span>
          </div>
          <h1 style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em"
          }}>
            Terms of Service
          </h1>
          <p style={{ color: "#bfdbfe", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "620px", marginBottom: "2rem" }}>
            Please read these Terms carefully. By using Photonexes Technologies services, you agree to be bound by the following terms and conditions.
          </p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Effective Date</div>
              <div style={{ color: "#e2e8f0", fontSize: "0.95rem", fontWeight: 600 }}>July 3, 2026</div>
            </div>
            <div>
              <div style={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Last Updated</div>
              <div style={{ color: "#e2e8f0", fontSize: "0.95rem", fontWeight: 600 }}>July 3, 2026</div>
            </div>
            <div>
              <div style={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Jurisdiction</div>
              <div style={{ color: "#e2e8f0", fontSize: "0.95rem", fontWeight: 600 }}>Chandigarh, India</div>
            </div>
          </div>
        </div>
      </div>

      {/* Body: Sidebar + Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Sticky Sidebar TOC */}
        <aside className="w-full lg:w-[240px] shrink-0 lg:sticky lg:top-[100px] flex flex-col gap-1">
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Table of Contents
          </div>
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                display: "block",
                padding: "0.45rem 0.75rem",
                borderLeft: "2px solid #e2e8f0",
                color: "#64748b",
                fontSize: "0.85rem",
                textDecoration: "none",
                lineHeight: 1.4,
                transition: "color 0.2s, border-color 0.2s"
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#1e3a8a";
                (e.currentTarget as HTMLElement).style.borderColor = "#1e3a8a";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "#64748b";
                (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
              }}
            >
              {item.label}
            </a>
          ))}

          {/* Also see */}
          <div style={{ marginTop: "2rem", padding: "1.25rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Also See</div>
            <Link href="/privacy-policy" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#2563eb", fontSize: "0.83rem", fontWeight: 600, textDecoration: "none" }}>
              <ExternalLink size={12} /> Privacy Policy
            </Link>
          </div>
        </aside>

        {/* Main Document */}
        <article className="flex-1 min-w-0 w-full lg:max-w-[720px]">

          {/* Overview */}
          <section id="overview" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.85 }}>
              Welcome to <strong>Photonexes Technologies</strong>. These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and Photonexes Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), governing your access to and use of our website, training programs, software development services, internship programs, and placement assistance.
            </p>
            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.85, marginTop: "1rem" }}>
              By accessing our website or enrolling in any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>
            {/* Notice box */}
            <div style={{ marginTop: "1.5rem", padding: "1.25rem 1.5rem", background: "#fffbeb", border: "1px solid #fde68a", borderLeft: "4px solid #f59e0b", borderRadius: "10px" }}>
              <p style={{ color: "#78350f", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                <strong>Important:</strong> These Terms were last updated on July 3, 2026. We recommend reviewing this page periodically for any changes. Your continued use of our services constitutes acceptance of any updates.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section id="acceptance" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>1</span>
              Acceptance of Terms
            </h2>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>1.1 Agreement</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              By accessing or using the Photonexes Technologies website, enrolling in any course, or engaging our services, you agree to be bound by these Terms. These Terms apply to all visitors, students, clients, and registered users.
            </p>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.25rem" }}>1.2 Eligibility</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              You must be at least 16 years of age to use our services. By using our platform, you confirm that you meet this age requirement and that you have the legal capacity to enter into a binding agreement.
            </p>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.25rem" }}>1.3 Modifications to Terms</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We reserve the right to modify these Terms at any time. We will notify you of significant changes via email or a prominent notice on our website. Continued use of our services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section id="services" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>2</span>
              Description of Services
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "IT Training & Courses", desc: "We provide online and offline training in web development, mobile app development, cloud computing, cybersecurity, and more. Course content, duration, and pricing are subject to change without prior notice." },
                { title: "Software Development", desc: "Software development engagements are governed by separate project-specific agreements. These Terms serve as the foundational agreement unless a written contract specifies otherwise." },
                { title: "Internship Programs", desc: "Internship programs provide hands-on experience and mentorship. Participation is subject to availability and meeting program prerequisites." },
                { title: "Placement Assistance", desc: "We strive to connect students with career opportunities through our placement program. However, we do not guarantee job placement or specific salary packages." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "1.25rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "0.35rem" }}>{item.title}</div>
                  <div style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="payments" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>3</span>
              Payments &amp; Refunds
            </h2>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>3.1 Fees &amp; Billing</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              Course fees and service charges are displayed on our website and are subject to applicable taxes. Full payment must be completed prior to accessing course materials unless a written payment plan has been agreed upon.
            </p>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.25rem" }}>3.2 Refund Policy</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              Refund requests must be submitted within <strong>7 days of enrollment</strong>. No refunds will be issued once course materials have been accessed or downloaded. Refunds for software development projects are governed by the individual project agreement.
            </p>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.25rem" }}>3.3 Billing Disputes</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              Any billing disputes must be raised within <strong>30 days</strong> of the charge. We will review disputes in good faith and aim to resolve them within 14 business days. Charges not disputed within 30 days are considered final.
            </p>
          </section>

          {/* Section 4 */}
          <section id="ip" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>4</span>
              Intellectual Property
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              All course materials, videos, code samples, documentation, logos, trademarks, and website content are the exclusive intellectual property of Photonexes Technologies and are protected under applicable copyright and intellectual property laws.
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { bold: "Limited License:", text: "Upon enrollment, you receive a limited, non-exclusive, non-transferable, revocable license to access course materials solely for personal, non-commercial educational use." },
                { bold: "Restrictions:", text: "You may not reproduce, distribute, sell, sublicense, publicly perform, or create derivative works from our content without prior written consent." },
                { bold: "User Content:", text: "By submitting projects or content on our platform, you grant us a royalty-free license to use such content for educational demonstration purposes." },
              ].map((item, i) => (
                <li key={i} style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  <strong style={{ color: "#1e293b" }}>{item.bold}</strong> {item.text}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section id="responsibilities" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>5</span>
              User Responsibilities
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "1rem" }}>You agree to use our services responsibly. Prohibited activities include, but are not limited to:</p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                "Using our platform for unlawful purposes or in violation of any applicable laws",
                "Distributing malware, viruses, or any harmful software",
                "Attempting to gain unauthorized access to our systems or other users' accounts",
                "Harassing, threatening, or abusing other users or our staff",
                "Sharing your account credentials with third parties",
                "Providing false or misleading information during registration or service use",
              ].map((item, i) => (
                <li key={i} style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</li>
              ))}
            </ul>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "1rem" }}>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Please notify us immediately at <a href="mailto:contact@photonexes.in" style={{ color: "#2563eb", fontWeight: 600 }}>contact@photonexes.in</a> if you suspect any unauthorized use.
            </p>
          </section>

          {/* Section 6 */}
          <section id="disclaimers" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>6</span>
              Disclaimers &amp; Limitation of Liability
            </h2>
            <div style={{ padding: "1.25rem 1.5rem", background: "#fff1f2", border: "1px solid #fecdd3", borderLeft: "4px solid #e11d48", borderRadius: "10px", marginBottom: "1.25rem" }}>
              <p style={{ color: "#881337", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                <strong>No Warranty:</strong> Our services are provided on an &quot;as-is&quot; and &quot;as-available&quot; basis without warranties of any kind, express or implied. We do not warrant that our platform will be uninterrupted, error-free, or free from harmful components.
              </p>
            </div>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              <strong style={{ color: "#1e293b" }}>Limitation of Liability:</strong> To the fullest extent permitted by applicable law, Photonexes Technologies shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of our services, even if we have been advised of the possibility of such damages. Our total liability for any claim shall not exceed the amount you paid us in the 3 months preceding the claim.
            </p>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "1rem" }}>
              <strong style={{ color: "#1e293b" }}>Indemnification:</strong> You agree to indemnify, defend, and hold harmless Photonexes Technologies and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising from your violation of these Terms or misuse of our services.
            </p>
          </section>

          {/* Section 7 */}
          <section id="termination" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>7</span>
              Termination
            </h2>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>7.1 Termination by Us</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We reserve the right to suspend or terminate your access to our services, with or without notice, if you violate these Terms, engage in fraudulent or harmful activity, or if we discontinue a service.
            </p>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.25rem" }}>7.2 Termination by You</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              You may stop using our services at any time. To close your account, please contact us at <a href="mailto:contact@photonexes.in" style={{ color: "#2563eb", fontWeight: 600 }}>contact@photonexes.in</a>. Termination does not entitle you to a refund of fees already paid.
            </p>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.25rem" }}>7.3 Effect of Termination</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              Upon termination, your license to use course materials is immediately revoked. Provisions that by their nature survive termination — including intellectual property rights, disclaimers, and limitations of liability — shall remain in full effect.
            </p>
          </section>

          {/* Section 8 */}
          <section id="governing-law" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>8</span>
              Governing Law &amp; Disputes
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              These Terms shall be governed by and construed in accordance with the laws of the <strong style={{ color: "#1e293b" }}>Republic of India</strong>. Any disputes arising from or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in <strong style={{ color: "#1e293b" }}>Chandigarh, India</strong>.
            </p>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "1rem" }}>
              Before initiating any legal proceedings, we strongly encourage you to contact us at <a href="mailto:contact@photonexes.in" style={{ color: "#2563eb", fontWeight: 600 }}>contact@photonexes.in</a> to resolve disputes amicably. We are committed to addressing concerns fairly and promptly.
            </p>
          </section>

          {/* Section 9 — Contact */}
          <section id="contact" style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>9</span>
              Contact Us
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              If you have any questions or concerns about these Terms, please contact us using the information below:
            </p>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ fontWeight: 800, color: "#0f172a", fontSize: "1rem" }}>Photonexes Technologies</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <div style={{ color: "#475569", fontSize: "0.9rem" }}><strong style={{ color: "#1e293b" }}>Email:</strong> <a href="mailto:contact@photonexes.in" style={{ color: "#2563eb" }}>contact@photonexes.in</a></div>
                <div style={{ color: "#475569", fontSize: "0.9rem" }}><strong style={{ color: "#1e293b" }}>Phone:</strong> +91 7006291591</div>
                <div style={{ color: "#475569", fontSize: "0.9rem" }}><strong style={{ color: "#1e293b" }}>Address:</strong> Chandigarh Zirakpur, India</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
            borderRadius: "16px",
            padding: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginTop: "2rem"
          }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Mail size={22} color="#fff" />
            </div>
            <div style={{ flex: 1, minWidth: "180px" }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.3rem" }}>Questions about these Terms?</div>
              <div style={{ color: "#93c5fd", fontSize: "0.88rem", lineHeight: 1.6 }}>Our team is available to clarify anything in these Terms of Service.</div>
            </div>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "#ea580c", color: "#ffffff",
              fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.88rem",
              padding: "0.7rem 1.5rem", borderRadius: "10px",
              textDecoration: "none", whiteSpace: "nowrap"
            }}>
              Contact Us →
            </Link>
          </div>

        </article>
      </div>
    </main>
  );
}
