import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Legal Notice | OAR Restaurant | West Lakes Shore",
  description: "Legal Notice and Terms of Service for OAR Restaurant - Coffee, Kitchen & Lakeside Vibes. Important legal information and terms.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-oar-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-oar-green mb-4">
            Legal Notice
          </h1>
          <div className="w-24 h-1 bg-oar-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Last updated: January 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Business Information</h2>
              <div className="p-6 bg-oar-beige rounded-lg">
                <p className="text-oar-black font-semibold text-lg mb-2">OAR Restaurant</p>
                <p className="text-gray-700">Coffee House • Bar • Kitchen</p>
                <p className="text-gray-700">100 Military Road, West Lakes Shore SA 5020</p>
                <p className="text-gray-700">In the Rowing SA complex</p>
                <p className="text-gray-700 mt-2">Phone: 0403 573 273</p>
                <p className="text-gray-700">Email: bookings@oarlakeside.com.au</p>
                <p className="text-gray-700">Instagram: @oarlakeside</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Terms of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using our services, making a reservation, or visiting our restaurant, you agree to comply with and be bound by the following terms and conditions:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-oar-black mb-2">Reservations</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Reservations are subject to availability and confirmation</li>
                    <li>We reserve the right to cancel or modify reservations if necessary</li>
                    <li>No-show fees may apply for large group bookings</li>
                    <li>Special dietary requirements should be communicated in advance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-oar-black mb-2">Restaurant Policies</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>We operate Monday to Sunday, 7am-3pm (Kitchen closes at 2:30pm)</li>
                    <li>Responsible service of alcohol applies</li>
                    <li>We reserve the right to refuse service</li>
                    <li>Children must be supervised at all times</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-oar-black mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Payment is due at the time of service</li>
                    <li>We accept cash, credit cards, and EFTPOS</li>
                    <li>Prices are subject to change without notice</li>
                    <li>All prices include GST where applicable</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Liability and Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide excellent service and quality food, please note:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We are not liable for personal belongings left on the premises</li>
                <li>Customers with allergies should inform staff before ordering</li>
                <li>We cannot guarantee complete allergen-free preparation</li>
                <li>Our liability is limited to the extent permitted by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on our website, including text, images, logos, and designs, is the property of OAR Restaurant 
                and is protected by copyright and other intellectual property laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Functions and Events</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For private functions and events:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Separate terms and conditions apply</li>
                <li>Deposits may be required for large bookings</li>
                <li>Cancellation policies vary based on event size and timing</li>
                <li>Custom menus and packages are available upon request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Website Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website is provided for informational purposes. We make every effort to ensure accuracy but:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Information may change without notice</li>
                <li>We are not responsible for external website links</li>
                <li>Use of this website constitutes acceptance of these terms</li>
                <li>We reserve the right to modify these terms at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by the laws of South Australia, Australia. Any disputes will be subject to the 
                jurisdiction of the South Australian courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-oar-green mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For any questions regarding these terms or legal matters, please contact us using the information provided above.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}