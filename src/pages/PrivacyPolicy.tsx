import LegalPageLayout from '@/components/LegalPageLayout';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="September 12, 2026">
      <div>
        <h2>1. Introduction</h2>
        <p>
          AuthorizeTech ("we," "us," or "our") respects your privacy and is
          committed to protecting the personal data you share with us when you
          visit our website, request a quote, or engage us for engineering,
          cloud, or marketing services. This policy explains what data we
          collect, how we use it, and the choices you have.
        </p>
      </div>

      <div>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>
            <strong>Contact details</strong> you submit through our forms —
            name, email address, phone number, and company name.
          </li>
          <li>
            <strong>Project information</strong> you share with us to scope
            work, including messages sent via our contact form or WhatsApp.
          </li>
          <li>
            <strong>Usage data</strong> such as pages visited, device/browser
            type, and approximate location, collected automatically via
            standard analytics tools and server logs.
          </li>
          <li>
            <strong>Cookies</strong> used to remember preferences and measure
            site performance.
          </li>
        </ul>
      </div>

      <div>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries and prepare project proposals.</li>
          <li>To deliver, maintain, and support contracted services.</li>
          <li>To send updates relevant to an active or prospective engagement.</li>
          <li>To improve our website and service offerings.</li>
          <li>To comply with applicable legal and tax obligations.</li>
        </ul>
      </div>

      <div>
        <h2>4. Legal Basis &amp; Compliance</h2>
        <p>
          We process personal data on the basis of your consent, our
          legitimate business interest in responding to inquiries, and, where
          applicable, the necessity of processing to perform a contract with
          you. We aim to handle data in a manner consistent with India's
          Digital Personal Data Protection Act, 2023, and applicable
          international data protection standards for clients outside India.
        </p>
      </div>

      <div>
        <h2>5. Data Sharing</h2>
        <p>
          We do not sell personal data. We may share limited information with
          trusted service providers (e.g., hosting, analytics, payment
          processing, or communication tools) strictly to operate our
          business, and only under confidentiality obligations. We may also
          disclose data if required by law.
        </p>
      </div>

      <div>
        <h2>6. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the
          purposes described in this policy, satisfy legal or contractual
          obligations, and resolve disputes.
        </p>
      </div>

      <div>
        <h2>7. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your
          personal data, and may withdraw consent for future communications
          at any time by contacting us at{' '}
          <a href="mailto:contact@authorizetech.in">contact@authorizetech.in</a>.
        </p>
      </div>

      <div>
        <h2>8. Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards
          to protect personal data. However, no method of transmission or
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div>
        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Material changes will
          be reflected by updating the "Last updated" date above.
        </p>
      </div>

      <div>
        <h2>10. Contact Us</h2>
        <p>
          Questions about this policy can be directed to{' '}
          <a href="mailto:contact@authorizetech.in">contact@authorizetech.in</a>.
        </p>
      </div>
    </LegalPageLayout>
  );
}
