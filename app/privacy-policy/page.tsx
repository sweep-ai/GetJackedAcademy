import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Get Jacked Academy",
  description: "Privacy policy for Get Jacked Academy — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">1. Who We Are</h2>
            <p>
              Get Jacked Academy (“we,” “our,” or “us”) is operated by Jack Mandeville. This privacy policy explains how we collect, use, and protect your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li><strong className="text-gray-300">Quiz and lead capture:</strong> When you complete the protocol quiz, we collect your name, email address, phone number (including country code), and your quiz responses (e.g., area of interest, peptide experience, willingness, and investment level).</li>
              <li><strong className="text-gray-300">Lead magnet and protocol delivery:</strong> When you are redirected to a protocol or lead-magnet page, your name, email, phone, and qualification summary may be passed in the page URL so we can personalize your experience and deliver the right content.</li>
              <li><strong className="text-gray-300">Booking a call:</strong> When you schedule a strategy call through our site, booking is handled by Calendly. Calendly collects the information you enter (e.g., name, email, and any details you provide). Their privacy practices apply to that data; we may also receive booking details from Calendly to conduct the call.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400 mt-2">
              <li>Deliver your personalized protocol and lead-magnet content</li>
              <li>Contact you about strategy calls, follow-ups, and relevant offers</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">4. Where Your Data Is Stored</h2>
            <p>
              Quiz and lead data (name, email, phone, country code, and quiz answers) are sent to and stored in a Google Sheet that we control, so we can manage leads and follow up. Data you submit when booking a call is processed by Calendly under their own systems and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">5. Third-Party Services</h2>
            <p className="mb-2">We use the following third-party services that may receive or process your data:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li><strong className="text-gray-300">Google (Sheets):</strong> To store and manage lead and quiz data.</li>
              <li><strong className="text-gray-300">Calendly:</strong> To power the “Book a Call” scheduling widget. When you use it, Calendly’s privacy policy applies to the data you enter there.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">6. Cookies and Tracking</h2>
            <p>
              Our site does not use cookies or similar tracking technologies for advertising or analytics. Calendly’s embed may set cookies when you interact with the booking widget; see Calendly’s privacy policy for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">7. Your Rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400 mt-2">
              <li>Ask us what personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data, subject to legal or operational requirements</li>
              <li>Opt out of marketing communications by replying “unsubscribe” or contacting us</li>
            </ul>
            <p className="mt-3">
              To exercise these rights or ask questions about this policy, contact us using the details in the “Contact” section below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">8. Data Security</h2>
            <p>
              We take reasonable steps to protect your data (e.g., using HTTPS and limiting access to lead data). No method of transmission or storage is 100% secure; we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-200 mb-3">10. Contact</h2>
            <p>
              For privacy-related questions or requests, contact Get Jacked Academy / Jack Mandeville via the contact method provided on the website (e.g., through the Book a Call scheduling page or any email address listed there).
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
