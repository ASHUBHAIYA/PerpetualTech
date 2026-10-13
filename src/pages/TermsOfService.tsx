import LegalPageLayout from '@/components/LegalPageLayout';

export default function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="September 12, 2026">
      <div>
        <h2>1. Agreement to Terms</h2>
        <p>
          These Terms of Service ("Terms") govern your use of the AuthorizeTech
          website and any services engaged through it, including web
          engineering, cloud &amp; DevOps, performance marketing, and managed
          cloud retainers. By using our site or engaging our services, you
          agree to these Terms.
        </p>
      </div>

      <div>
        <h2>2. Services</h2>
        <p>
          Specific deliverables, timelines, and pricing for any engagement are
          defined in a separate Statement of Work ("SOW") or proposal agreed
          upon between AuthorizeTech and the client. In the event of a
          conflict between these Terms and a signed SOW, the SOW governs for
          that engagement.
        </p>
      </div>

      <div>
        <h2>3. Client Responsibilities</h2>
        <ul>
          <li>
            Provide timely access to necessary accounts, credentials, content,
            and feedback required to complete the project.
          </li>
          <li>
            Ensure any third-party materials supplied to us (content, brand
            assets, ad accounts) are properly licensed for use.
          </li>
          <li>Make payments according to the agreed schedule.</li>
        </ul>
      </div>

      <div>
        <h2>4. Payments</h2>
        <p>
          Unless otherwise stated in an SOW, projects are billed per an agreed
          milestone or retainer schedule. Late payments may result in paused
          work until the account is brought current. Refund terms are covered
          separately in our{' '}
          <a href="/refund-policy">Refund Policy</a>.
        </p>
      </div>

      <div>
        <h2>5. Intellectual Property</h2>
        <p>
          Upon full payment, clients receive ownership of the final,
          custom-developed deliverables specified in the SOW. AuthorizeTech
          retains ownership of pre-existing tools, frameworks, internal
          libraries, and know-how used to build those deliverables, and may
          reuse general (non-confidential) techniques in future projects.
        </p>
      </div>

      <div>
        <h2>6. Third-Party Services</h2>
        <p>
          Projects may rely on third-party platforms (cloud providers, ad
          networks, payment gateways, etc.). AuthorizeTech is not responsible
          for outages, policy changes, or costs imposed by third parties.
        </p>
      </div>

      <div>
        <h2>7. Warranties &amp; Limitation of Liability</h2>
        <p>
          Services are provided on a professional, best-effort basis. Except
          as expressly stated in an SOW, services are provided "as is" without
          warranties of any kind. To the maximum extent permitted by law,
          AuthorizeTech's total liability for any claim arising from an
          engagement is limited to the fees paid for that engagement in the
          preceding three months.
        </p>
      </div>

      <div>
        <h2>8. Confidentiality</h2>
        <p>
          Both parties agree to keep confidential information shared during
          an engagement private and to use it only for the purposes of that
          engagement.
        </p>
      </div>

      <div>
        <h2>9. Termination</h2>
        <p>
          Either party may terminate an active engagement per the notice
          period defined in the SOW. Fees for work completed up to the
          termination date remain payable.
        </p>
      </div>

      <div>
        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes shall be
          subject to the exclusive jurisdiction of the courts located in
          India, unless otherwise agreed in writing.
        </p>
      </div>

      <div>
        <h2>11. Contact</h2>
        <p>
          Questions about these Terms can be directed to{' '}
          <a href="mailto:contact@authorizetech.in">contact@authorizetech.in</a>.
        </p>
      </div>
    </LegalPageLayout>
  );
}
