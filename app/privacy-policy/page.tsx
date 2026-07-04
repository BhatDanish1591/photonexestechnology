"use client";
import Link from "next/link";
import { Shield, Mail, ExternalLink } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "information-we-collect", label: "1. Information We Collect" },
  { id: "how-we-use", label: "2. How We Use Your Information" },
  { id: "data-security", label: "3. Data Security" },
  { id: "sharing", label: "4. Sharing Your Information" },
  { id: "your-rights", label: "5. Your Rights" },
  { id: "cookies", label: "6. Cookies Policy" },
  { id: "third-party", label: "7. Third-Party Links" },
  { id: "updates", label: "8. Policy Updates" },
  { id: "contact", label: "9. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: "#ffffff", minHeight: "100vh" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1e40af 100%)",
        padding: "5rem 2rem 4rem",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(37,99,235,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(234,88,12,0.1)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
            <Shield size={14} color="#93c5fd" />
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
            Privacy Policy
          </h1>
          <p style={{ color: "#bfdbfe", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "620px", marginBottom: "2rem" }}>
            We are committed to protecting your personal information and being transparent about how we use it.
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
              <div style={{ color: "#64748b", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>Applies To</div>
              <div style={{ color: "#e2e8f0", fontSize: "0.95rem", fontWeight: 600 }}>photonexes.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Body: Sidebar + Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem", display: "flex", gap: "4rem", alignItems: "flex-start" }}>

        {/* Sticky Sidebar TOC */}
        <aside style={{
          width: "240px",
          flexShrink: 0,
          position: "sticky",
          top: "100px",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem"
        }}>
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
            <Link href="/terms" style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#2563eb", fontSize: "0.83rem", fontWeight: 600, textDecoration: "none" }}>
              <ExternalLink size={12} /> Terms of Service
            </Link>
          </div>
        </aside>

        {/* Main Document */}
        <article style={{ flex: 1, minWidth: 0, maxWidth: "720px" }}>

          {/* Overview */}
          <section id="overview" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.85 }}>
              Photonexes Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates{" "}
              <strong>photonexes.com</strong> and provides IT training, software development, and placement services.
              This Privacy Policy describes how we collect, use, store, and share information about you when you use
              our services. By accessing or using our website, you agree to the collection and use of information in
              accordance with this policy.
            </p>
            <p style={{ color: "#374151", fontSize: "1rem", lineHeight: 1.85, marginTop: "1rem" }}>
              We are committed to protecting your personal data in compliance with applicable data protection laws,
              including the Information Technology Act, 2000 (India) and its associated rules.
            </p>
          </section>

          {/* Section 1 */}
          <section id="information-we-collect" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>1</span>
              Information We Collect
            </h2>

            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.5rem" }}>1.1 Personal Information</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>When you register for a course, apply for an internship, or contact us, we may collect:</p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {["Full name and email address", "Phone number and location", "Educational background and qualifications", "Resume or CV when applying for internships", "Payment information (processed securely via third-party gateways)"].map((item, i) => (
                <li key={i} style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7 }}>{item}</li>
              ))}
            </ul>

            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.5rem" }}>1.2 Usage Data</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We automatically collect certain information when you visit our website, including your IP address, browser type and version, pages you visit, time and date of visits, time spent on each page, and referring URLs. This data is used solely for improving our services.
            </p>

            <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem", marginTop: "1.5rem" }}>1.3 Cookies &amp; Tracking Technologies</h3>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. See Section 6 for our full Cookies Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="how-we-use" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>2</span>
              How We Use Your Information
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "1rem" }}>We use the information we collect for the following purposes:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Service Delivery", desc: "To process enrollments, provide course materials, send training updates, and deliver placement assistance." },
                { title: "Communication", desc: "To send newsletters, promotional offers, and updates about new courses. You may opt out of marketing emails at any time using the unsubscribe link." },
                { title: "Analytics & Improvement", desc: "To analyze aggregated, anonymized usage data to improve our website, course content, and overall user experience." },
                { title: "Legal & Security", desc: "To comply with applicable laws, detect and prevent fraud, and protect the rights and safety of our users and platform." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "1.25rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "0.35rem" }}>{item.title}</div>
                  <div style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="data-security" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>3</span>
              Data Security
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We implement industry-standard technical and organizational security measures to protect your personal data, including SSL/TLS encryption for all data in transit, secure access-controlled servers, and regular security audits.
            </p>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "1rem" }}>
              <strong style={{ color: "#1e293b" }}>Data Retention:</strong> We retain your personal information only for as long as necessary to fulfill the purposes in this policy, or as required by applicable law. You may request deletion of your data at any time (see Section 5).
            </p>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "1rem" }}>
              <strong style={{ color: "#1e293b" }}>Breach Notification:</strong> In the event of a personal data breach, we will notify affected users and relevant authorities within the timeframes required by applicable law.
            </p>
          </section>

          {/* Section 4 */}
          <section id="sharing" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>4</span>
              Sharing Your Information
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We do <strong>not</strong> sell your personal data. We may share your information only in the following limited circumstances:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { bold: "Service Providers:", text: "Trusted third-party vendors (e.g., payment processors, email delivery services) who are contractually bound to use your data only for the services they provide to us." },
                { bold: "Legal Requirements:", text: "When required to do so by law, court order, or in response to valid requests from public authorities." },
                { bold: "Business Transfers:", text: "In connection with a merger, acquisition, or sale of assets. We will notify you before your data is transferred and becomes subject to a different privacy policy." },
              ].map((item, i) => (
                <li key={i} style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  <strong style={{ color: "#1e293b" }}>{item.bold}</strong> {item.text}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section id="your-rights" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>5</span>
              Your Rights
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "1rem" }}>You have the following rights regarding your personal data:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {[
                { right: "Right to Access", desc: "Request a copy of the personal data we hold about you." },
                { right: "Right to Rectification", desc: "Request correction of inaccurate or incomplete data." },
                { right: "Right to Erasure", desc: "Request deletion of your personal data where legally applicable." },
                { right: "Right to Portability", desc: "Receive your data in a structured, machine-readable format." },
                { right: "Right to Object", desc: "Object to processing of your data for direct marketing purposes." },
                { right: "Withdraw Consent", desc: "Withdraw previously given consent at any time without penalty." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "1rem", background: "#f8fafc", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                  <div style={{ fontWeight: 700, color: "#0f172a", fontSize: "0.85rem", marginBottom: "0.3rem" }}>{item.right}</div>
                  <div style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.7, marginTop: "1rem" }}>
              To exercise any of these rights, please contact us at <a href="mailto:contact@photonexes.in" style={{ color: "#2563eb", fontWeight: 600 }}>contact@photonexes.in</a>.
            </p>
          </section>

          {/* Section 6 */}
          <section id="cookies" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>6</span>
              Cookies Policy
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We use cookies and similar technologies to operate and improve our website. Cookies are small text files stored on your device. We use the following types of cookies:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { bold: "Essential Cookies:", text: "Required for the website to function properly. These cannot be disabled." },
                { bold: "Analytics Cookies:", text: "Help us understand how visitors interact with our website (e.g., Google Analytics)." },
                { bold: "Preference Cookies:", text: "Remember your settings and preferences for a better experience." },
              ].map((item, i) => (
                <li key={i} style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  <strong style={{ color: "#1e293b" }}>{item.bold}</strong> {item.text}
                </li>
              ))}
            </ul>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "1rem" }}>
              You can control or disable cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.
            </p>
          </section>

          {/* Section 7 */}
          <section id="third-party" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>7</span>
              Third-Party Links
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Section 8 */}
          <section id="updates" style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #f1f5f9" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>8</span>
              Policy Updates
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85 }}>
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the &quot;Last Updated&quot; date at the top of this page and, where appropriate, sending an email notification.
            </p>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginTop: "1rem" }}>
              Your continued use of our services after any modifications to this policy constitutes your acceptance of those changes.
            </p>
          </section>

          {/* Section 9 — Contact */}
          <section id="contact" style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ display: "inline-flex", width: "28px", height: "28px", borderRadius: "8px", background: "#1e3a8a", color: "#fff", fontSize: "0.75rem", fontWeight: 700, alignItems: "center", justifyContent: "center", flexShrink: 0 }}>9</span>
              Contact Us
            </h2>
            <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              If you have any questions, requests, or concerns about this Privacy Policy or our data practices, please reach out to us:
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
              <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: "#ffffff", fontSize: "1.05rem", marginBottom: "0.3rem" }}>Still have questions?</div>
              <div style={{ color: "#93c5fd", fontSize: "0.88rem", lineHeight: 1.6 }}>Our team is happy to help with any privacy-related questions.</div>
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
