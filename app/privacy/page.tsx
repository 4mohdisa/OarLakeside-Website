import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | OAR Restaurant | West Lakes Shore",
  description: "Privacy Policy for OAR Restaurant - Coffee, Kitchen & Lakeside Vibes. Learn how we protect and handle your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-oar-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-oar-green mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At OAR Restaurant ("we," "our," or "us"), we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                restaurant, use our services, or interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-oar-black mb-2">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Reservation details and dining preferences</li>
                    <li>Payment information for transactions</li>
                    <li>Feedback and communication with our staff</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-oar-black mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device and usage patterns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Processing reservations and managing your dining experience</li>
                <li>Communicating with you about your bookings and our services</li>
                <li>Improving our restaurant operations and customer service</li>
                <li>Sending promotional materials (with your consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share information with trusted service providers who assist us in 
                operating our restaurant and website, provided they agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-6 bg-oar-beige rounded-lg">
                <p className="text-oar-black font-semibold">OAR Restaurant</p>
                <p className="text-gray-700">100 Military Road, West Lakes Shore SA 5020</p>
                <p className="text-gray-700">Phone: 0403 573 273</p>
                <p className="text-gray-700">Email: bookings@oarlakeside.com.au</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}