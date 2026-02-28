import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Get Jacked Academy",
  description: "Terms of service for Get Jacked Academy — rules and disclaimers for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-block text-gray-400 hover:text-white text-sm mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-2">
          Terms of Service
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Get Jacked Academy website and related services (the “Services”), you agree to be bound by these Terms of Service. If you do not agree, do not use the Services. Get Jacked Academy is operated by Jack Mandeville (“we,” “us,” or “our”).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">2. Description of Services</h2>
            <p>
              We provide educational content, protocol guides, and the option to book strategy calls related to fitness, performance, and related topics. Quiz results, protocol documents, and any advice given on calls are for informational and educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">3. Not Medical or Professional Advice</h2>
            <p>
              The content and services offered by Get Jacked Academy are not a substitute for professional medical, nutritional, or legal advice. Nothing on this site or in our materials constitutes a diagnosis, treatment plan, or recommendation that you should change your diet, supplements, or lifestyle without consulting a qualified healthcare provider. You use our content and services at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400 mt-2">
              <li>Use the Services for any illegal purpose or in violation of any laws</li>
              <li>Impersonate another person or provide false information</li>
              <li>Attempt to gain unauthorized access to our systems, data, or third-party services we use</li>
              <li>Scrape, copy, or redistribute our content in bulk without permission</li>
              <li>Interfere with the proper functioning of the website or any integrated services (e.g., booking tools)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">5. Intellectual Property</h2>
            <p>
              The Get Jacked Academy name, logo, protocol documents, and other materials on this site are owned by us or our licensors. You may view and use the site for personal, non-commercial use. You may not reproduce, distribute, or create derivative works without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Get Jacked Academy and Jack Mandeville shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of the Services. Our total liability for any claims related to the Services shall not exceed the amount you paid to us in the twelve (12) months preceding the claim, or one hundred dollars ($100), whichever is greater. Some jurisdictions do not allow certain limitations; in such cases, our liability is limited to the maximum permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Get Jacked Academy, Jack Mandeville, and their affiliates from any claims, damages, losses, or expenses (including reasonable attorneys’ fees) arising from your use of the Services, your violation of these Terms, or your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">8. Third-Party Services</h2>
            <p>
              Our site may link to or embed third-party services (e.g., Calendly for scheduling). Your use of those services is subject to their own terms and policies. We are not responsible for their content, privacy practices, or availability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">9. Changes to the Terms</h2>
            <p>
              We may update these Terms of Service from time to time. The “Last updated” date at the top will reflect the latest version. Your continued use of the Services after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">10. Termination</h2>
            <p>
              We may suspend or discontinue your access to the Services at any time, with or without cause. You may stop using the Services at any time. Provisions that by their nature should survive (e.g., limitation of liability, indemnification) will survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which the operator resides, without regard to conflict of law principles. Any dispute arising from these Terms or the Services shall be resolved in the courts of that state.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">12. Contact</h2>
            <p>
              For questions about these Terms of Service, contact Get Jacked Academy / Jack Mandeville via the contact method provided on the website (e.g., through the Book a Call scheduling page or any email address listed there).
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link
            href="/"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
