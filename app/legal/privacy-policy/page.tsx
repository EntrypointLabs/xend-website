import type { Metadata } from "next"

import { LegalLead, LegalPage, LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Xend website.",
  alternates: {
    canonical: "/legal/privacy-policy",
  },
}

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="27th July 2026">
      <LegalSection>
        This Privacy Policy explains how Entrypoint Labs, Inc., the team
        building Xend (
        <LegalLead>&quot;we,&quot;</LegalLead> <LegalLead>&quot;us,&quot;</LegalLead> or{" "}
        <LegalLead>&quot;our&quot;</LegalLead>), handles information in connection with the
        website located at xend.global (the <LegalLead>&quot;Site&quot;</LegalLead>). The Site is
        currently a pre-launch marketing site with a waitlist; once the Xend
        application itself is generally available, it will be governed by
        its own separate privacy policy covering account and transaction
        data, which will supplement or supersede this Policy for that
        application.
      </LegalSection>

      <LegalSection>
        <LegalLead>1. Who We Are.</LegalLead> Entrypoint Labs, Inc. is the
        team building Xend, a dollar account for everyday life. This Site is
        informational
        and lets visitors join a waitlist for early access. The Site does
        not currently offer live accounts, does not process payments, and
        does not custody funds.
      </LegalSection>

      <LegalSection>
        <LegalLead>2. Information We Collect.</LegalLead> We collect the
        following categories of information through the Site. First, if you
        join the waitlist, we collect the email address you submit. Second,
        our hosting provider generates standard server logs for every
        request, which may include an IP address, browser and device
        information, the page requested, and the time of the request. Third,
        we use privacy-friendly analytics, described in Section 4, to
        understand aggregate traffic to the Site. We do not knowingly
        collect sensitive personal information, such as financial account
        numbers or government identifiers, through the Site. If you email us
        or message us on X using the contact details in Section 10, we will
        see whatever information you choose to include in that message.
      </LegalSection>

      <LegalSection>
        <LegalLead>3. How We Use Information.</LegalLead> We use your email
        address to confirm your spot on the waitlist, send you a
        confirmation email, and contact you about early access and product
        updates when Xend launches. We use server logs and analytics data to
        operate, secure, and improve the Site — for example, to diagnose
        technical problems, prevent abuse, and understand which pages are
        useful to visitors. We do not sell information collected through the
        Site, and we do not use it to build advertising profiles.
      </LegalSection>

      <LegalSection>
        <LegalLead>4. Cookies.</LegalLead> The Site uses Vercel Analytics to
        measure aggregate traffic. Vercel Analytics is designed to avoid
        cross-site tracking and does not use cookies to identify individual
        visitors across sites. Beyond what this analytics service strictly
        requires to function, the Site does not set tracking cookies or use
        similar tracking technologies.
      </LegalSection>

      <LegalSection>
        <LegalLead>5. Third-Party Services.</LegalLead> The Site is hosted
        on Vercel&apos;s infrastructure, which processes server logs and
        analytics data on our behalf as described above. Waitlist email
        addresses are stored in a hosted database and used to send
        transactional email through Resend, our email delivery provider.
        Each of these providers acts as a processor of the data described in
        Section 2 on our behalf, and its own security practices govern how
        that data is handled on its infrastructure. The Site also links to
        our litepaper and to our presence on X, each of which has its own
        privacy practices that this Policy does not cover.
      </LegalSection>

      <LegalSection>
        <LegalLead>6. Data Retention.</LegalLead> We retain your waitlist
        email address until Xend launches and you either create an account
        or ask us to delete it, whichever comes first, after which we
        delete it unless we are required to keep it for legal reasons or you
        separately become a Xend user. We retain server logs only as long as
        needed for security and operational purposes, after which they are
        deleted or aggregated in a way that no longer identifies a specific
        visitor. Aggregate analytics data does not identify individual
        visitors and may be retained indefinitely for historical comparison.
      </LegalSection>

      <LegalSection>
        <LegalLead>7. Your Rights.</LegalLead> Depending on where you are
        located, you may have rights to request access to, correction of, or
        deletion of personal information we hold about you, including
        removal from the waitlist. To make a request, contact us using the
        details in Section 10 and describe the information involved as
        specifically as you can; we will respond within a reasonable time
        and may ask you to verify your request before acting on it.
      </LegalSection>

      <LegalSection>
        <LegalLead>8. Children.</LegalLead> The Site is not directed to
        children, and we do not knowingly collect personal information from
        children through the Site.
      </LegalSection>

      <LegalSection>
        <LegalLead>9. Changes to This Policy.</LegalLead> We may update this
        Policy from time to time by posting a revised version on the Site
        with a new &quot;Last Updated&quot; date. Continued use of the Site
        after a revision is posted constitutes your acceptance of it.
      </LegalSection>

      <LegalSection>
        <LegalLead>10. Contact.</LegalLead> Questions about this Policy can
        be sent to us on X at{" "}
        <a
          href="https://x.com/xend_global"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-foreground underline"
        >
          @xend_global
        </a>{" "}
        or by email at{" "}
        <a
          href="mailto:support@xend.global"
          className="font-semibold text-foreground underline"
        >
          support@xend.global
        </a>
        .
      </LegalSection>
    </LegalPage>
  )
}
