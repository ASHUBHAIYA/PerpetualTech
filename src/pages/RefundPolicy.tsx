import LegalPageLayout from '@/components/LegalPageLayout';

export default function RefundPolicy() {
  return (
    <LegalPageLayout title="Refund Policy" lastUpdated="September 12, 2026">
      <div>
        <h2>1. Overview</h2>
        <p>
          This policy outlines how refunds are handled for engagements with
          AuthorizeTech, including project-based work and managed cloud
          retainers. Specific refund terms may also be set out in your
          Statement of Work ("SOW") — where they differ, the SOW takes
          precedence.
        </p>
      </div>

      <div>
        <h2>2. Milestone &amp; Project-Based Work</h2>
        <ul>
          <li>
            Deposits paid to begin discovery or design work are
            non-refundable once work has commenced, as they cover time
            already committed.
          </li>
          <li>
            Payments tied to a completed and approved milestone are
            non-refundable.
          </li>
          <li>
            If AuthorizeTech is unable to begin a project after a deposit is
            paid, the deposit will be refunded in full.
          </li>
        </ul>
      </div>

      <div>
        <h2>3. Monthly Retainers &amp; Managed Cloud</h2>
        <ul>
          <li>
            Retainer fees cover the billing month in which they are charged
            and are non-refundable once that month has begun.
          </li>
          <li>
            Cancelling a retainer stops future billing but does not refund the
            current billing cycle.
          </li>
        </ul>
      </div>

      <div>
        <h2>4. Ad Spend (Performance Marketing)</h2>
        <p>
          Management fees for performance marketing services are separate
          from advertising spend paid directly to platforms (Google, Meta,
          etc.). Ad spend is non-refundable once campaigns are live, as it is
          billed by the ad platform, not AuthorizeTech.
        </p>
      </div>

      <div>
        <h2>5. Dissatisfaction with Deliverables</h2>
        <p>
          If a delivered milestone does not meet the agreed acceptance
          criteria in the SOW, we will revise it at no additional cost within
          the agreed revision scope before any refund is considered.
        </p>
      </div>

      <div>
        <h2>6. How to Request a Refund</h2>
        <p>
          Refund requests should be sent to{' '}
          <a href="mailto:contact@authorizetech.in">contact@authorizetech.in</a>{' '}
          with your project or invoice reference. We aim to respond within 5
          business days.
        </p>
      </div>
    </LegalPageLayout>
  );
}
