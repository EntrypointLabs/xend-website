import type { Metadata } from "next"

import { LegalLead, LegalPage, LegalSection } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for the Xend website.",
  alternates: {
    canonical: "/legal/terms-of-service",
  },
}

export default function Page() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="27th July 2026">
      <LegalSection>
        This Terms of Service agreement (the <LegalLead>&quot;Agreement&quot;</LegalLead>) governs
        your access to and use of the website located at xend.global and its
        subdomains (the <LegalLead>&quot;Site&quot;</LegalLead>), operated by Xend Global, Inc. (
        <LegalLead>&quot;Xend,&quot;</LegalLead> <LegalLead>&quot;we,&quot;</LegalLead>{" "}
        <LegalLead>&quot;us,&quot;</LegalLead> or <LegalLead>&quot;our&quot;</LegalLead>). By
        accessing or using the Site, you agree to be bound by this Agreement.
        If you do not agree, you should not access or use the Site.
      </LegalSection>

      <LegalSection>
        BY ACCESSING OR USING THE SITE IN ANY WAY, INCLUDING BROWSING,
        READING CONTENT, OR JOINING THE WAITLIST DESCRIBED IN SECTION 3, YOU
        ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY
        THIS AGREEMENT IN ITS ENTIRETY.
      </LegalSection>

      <LegalSection>
        <LegalLead>1. Acceptance of Terms.</LegalLead> This Agreement applies
        to anyone who visits or uses the Site, including anyone who submits
        an email address to join the waitlist. We may update this Agreement
        from time to time as described in Section 10, and your continued use
        of the Site after an update constitutes acceptance of the revised
        terms.
      </LegalSection>

      <LegalSection>
        <LegalLead>2. About the Site.</LegalLead> The Site is an
        informational and marketing resource for Xend, a dollar account
        product currently in pre-launch. It describes the product we are
        building and lets visitors request early access. The Xend
        application itself is not yet generally available. Nothing on the
        Site constitutes financial, investment, legal, tax, or other
        professional advice, and nothing on the Site is an offer or
        solicitation to open an account, hold funds, or use any financial
        service. Any figures, timelines, or forward-looking statements on
        the Site, including anything in our litepaper, are illustrative only
        and may change without notice.
      </LegalSection>

      <LegalSection>
        <LegalLead>3. The Waitlist.</LegalLead> The Site lets you submit your
        email address to request early access to Xend once it launches.
        Joining the waitlist does not create an account, does not
        guarantee you access to the product, and does not obligate Xend to
        launch on any particular timeline or at all. There is no fee to join
        the waitlist. When the Xend application becomes available, use of
        that application will be governed by its own separate terms of
        service and account agreements, which are not part of this
        Agreement.
      </LegalSection>

      <LegalSection>
        <LegalLead>4. Intellectual Property.</LegalLead> All content on the
        Site, including text, graphics, logos, marks, icons, and the
        underlying code and design, is owned by Xend or its licensors and is
        protected by copyright, trademark, and other intellectual property
        laws. <LegalLead>&quot;Xend&quot;</LegalLead> and associated logos and marks are
        the property of Xend Global, Inc. Except as necessary to view the
        Site in a standard web browser or to read our litepaper, you may not
        copy, reproduce, modify, distribute, or create derivative works from
        any part of the Site without our prior written permission.
      </LegalSection>

      <LegalSection>
        <LegalLead>5. Acceptable Use.</LegalLead> You agree not to use the
        Site to: (a) violate any applicable law or regulation; (b) probe,
        scan, or attempt to breach the security of the Site or any related
        system; (c) interfere with or disrupt the Site&apos;s operation,
        including through excessive automated requests; (d) submit false or
        fraudulent information through the waitlist form; (e) misrepresent
        your affiliation with Xend; or (f) collect data from the Site
        through automated means except as permitted by robots.txt. We may
        restrict or block access to the Site, or remove a submitted
        waitlist entry, for anyone we reasonably believe has violated this
        section.
      </LegalSection>

      <LegalSection>
        <LegalLead>6. Third-Party Links.</LegalLead> The Site may link to
        third-party destinations, including our litepaper and our social
        media presence, that we do not operate. We provide these links for
        convenience only. We do not control and are not responsible for the
        content, security, or practices of any third-party destination, and
        including a link does not imply our endorsement of it. You access
        third-party destinations at your own risk and subject to their own
        terms.
      </LegalSection>

      <LegalSection>
        <LegalLead>7. Not a Bank; No Custody.</LegalLead> Xend Global, Inc. is
        a software company. It is not a bank, and the Site does not
        currently offer accounts, hold funds, or process transactions. Any
        description of a future dollar account, balance, or transfer
        functionality on the Site or in our litepaper describes a product
        under development and is not currently available to Site visitors.
      </LegalSection>

      <LegalSection>
        <LegalLead>8. DISCLAIMER OF WARRANTIES.</LegalLead> THE SITE AND ALL
        CONTENT ON IT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
        AVAILABLE,&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS,
        IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
        NON-INFRINGEMENT. XEND DOES NOT WARRANT THAT THE SITE WILL BE
        UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY INFORMATION ON THE
        SITE IS ACCURATE, COMPLETE, OR CURRENT.
      </LegalSection>

      <LegalSection>
        <LegalLead>9. LIMITATION OF LIABILITY.</LegalLead> TO THE FULLEST
        EXTENT PERMITTED BY LAW, XEND AND ITS OFFICERS, EMPLOYEES, AND
        CONTRACTORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
        DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR ACCESS TO OR USE
        OF, OR INABILITY TO ACCESS OR USE, THE SITE, EVEN IF WE HAVE BEEN
        ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS LIMITATION APPLIES
        REGARDLESS OF THE LEGAL THEORY ON WHICH A CLAIM IS BASED.
      </LegalSection>

      <LegalSection>
        <LegalLead>10. Changes to the Terms.</LegalLead> We may revise this
        Agreement at any time by posting an updated version on the Site with
        a new &quot;Last Updated&quot; date. Changes take effect as soon as
        they are posted. It is your responsibility to review this Agreement
        periodically; continued use of the Site after a revision is posted
        constitutes your acceptance of it.
      </LegalSection>

      <LegalSection>
        <LegalLead>11. Termination.</LegalLead> We may suspend or terminate
        your access to the Site, or remove your waitlist entry, at any time,
        without notice, if we reasonably believe you have violated this
        Agreement. Sections of this Agreement that by their nature should
        survive termination, including Sections 4, 8, 9, and 12, will
        survive any termination of your access.
      </LegalSection>

      <LegalSection>
        <LegalLead>12. Governing Law.</LegalLead> This Agreement is governed
        by the laws applicable in Xend Global, Inc.&apos;s place of
        establishment, without regard to conflict-of-laws principles. Any
        dispute arising from this Agreement or your use of the Site will be
        resolved under those laws.
      </LegalSection>

      <LegalSection>
        <LegalLead>13. Contact.</LegalLead> Questions about this Agreement
        can be sent to us on X at{" "}
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
