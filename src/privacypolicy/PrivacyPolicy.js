import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - InnoAl Tech Solution";
  }, []);

  return (
    <div className="privacy-policy">
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <p className="privacy-policy-intro">
          At InnoAl Tech Solution, we respect your privacy and are committed to
          protecting it through our compliance with this policy.
        </p>
        <p className="privacy-policy-updated">
          Last updated: January 2, 2026
        </p>

        <div className="privacy-policy-section">
          <h2>1. Information We Collect</h2>
          <p>
            InnoAl Tech Solution collects the following types of information to provide and improve our services:
          </p>
          <h3>Account and Authentication Data</h3>
          <p>
            When you create an account or use our services, we collect:
          </p>
          <ul>
            <li>Email address (required for account creation and authentication)</li>
            <li>Username (if provided)</li>
            <li>Password (processed securely via our authentication providers; we do not store passwords in plain text and passwords are protected using secure hashing and industry-standard safeguards)</li>
            <li>Profile information (optional, such as display name, profile picture, or other details you choose to provide)</li>
          </ul>
          <h3>Device and Technical Information</h3>
          <p>
            We may automatically collect certain device and technical information to ensure proper functionality and improve our services:
          </p>
          <ul>
            <li>Device type, model, and operating system</li>
            <li>Device identifiers (where necessary for security, diagnostics, or service functionality)</li>
            <li>Advertising identifiers (only if advertising is enabled in a specific app)</li>
            <li>IP address and network information</li>
            <li>App version and usage statistics</li>
            <li>Crash reports and diagnostic data to help identify and fix technical issues</li>
          </ul>
          <h3>Support and Communication Data</h3>
          <p>
            When you contact us for support or communicate with us, we collect:
          </p>
          <ul>
            <li>Your contact information and messages</li>
            <li>Support ticket history and related communications</li>
            <li>Feedback and survey responses (if provided)</li>
          </ul>
        </div>

        <div className="privacy-policy-section">
          <h2>2. How We Use Your Information</h2>
          <p>
            InnoAl Tech Solution uses the information we collect for the following purposes:
          </p>
          <ul>
            <li>To create, maintain, and secure your account</li>
            <li>To authenticate your identity and provide access to our services</li>
            <li>To provide customer support and respond to your inquiries</li>
            <li>To improve our services, fix bugs, and enhance user experience</li>
            <li>To analyze usage patterns and diagnose technical issues</li>
            <li>To communicate with you about important updates, security notices, or changes to our services</li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>
        </div>

        <div className="privacy-policy-section">
          <h2>3. Third-Party Service Providers</h2>
          <p>
            InnoAl Tech Solution uses third-party service providers to operate and improve our services. These providers may process your information on our behalf:
          </p>
          <h3>Authentication and Backend Services</h3>
          <ul>
            <li><strong>Firebase (Google)</strong>: We use Firebase Authentication and related services for user authentication, account management, and backend infrastructure. Firebase is operated by Google LLC. Your authentication data is processed according to Google's privacy policy and our service agreement.</li>
            <li><strong>Supabase</strong>: We use Supabase for additional backend services, database management, and authentication features. Supabase processes your data according to their privacy policy and our service agreement.</li>
          </ul>
          <p>
            <strong>Note:</strong> Our service providers may change over time as we evaluate and adopt new technologies to improve our services. We will update this privacy policy to reflect significant changes in our service providers, but we reserve the right to use alternative or additional providers as needed to deliver and improve our services.
          </p>
          <p>
            These third-party providers are contractually obligated to protect your information and use it only for the purposes we specify. They may have their own privacy policies that govern how they handle your data.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>4. Advertising and Analytics</h2>
          <p>
            Some of our applications may not currently use advertising or analytics services. However, if advertising or analytics features are enabled in a specific application in the future, we may use third-party software development kits (SDKs) and services to deliver advertisements or analyze usage patterns. In such cases, these third-party providers may collect certain information about your device and usage to provide these services.
          </p>
          <p>
            If we enable advertising or analytics in any of our applications, we will update this Privacy Policy to reflect the specific providers and data collection practices. You will be notified of any material changes to our advertising or analytics practices.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>5. Data Security</h2>
          <p>
            InnoAl Tech Solution implements industry-standard security measures to protect your information:
          </p>
          <ul>
            <li>Passwords are protected using secure hashing and are not stored in plain text</li>
            <li>Data transmission is encrypted using SSL/TLS protocols</li>
            <li>Access to your data is restricted to authorized personnel and systems</li>
            <li>We regularly review and update our security practices</li>
          </ul>
          <p>
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>6. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal or legitimate business purposes.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>7. International Data Transfers</h2>
          <p>
            Your information may be processed and stored in countries other than your country of residence, including countries where our third-party service providers (such as Firebase/Google and Supabase) operate. These countries may have data protection laws that differ from those in your country. Where required by applicable law, we implement appropriate safeguards to protect your information in accordance with this Privacy Policy, including through contractual agreements with our service providers and compliance with applicable data transfer mechanisms.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>8. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> You can update or correct your account information through your account settings or by contacting us</li>
            <li><strong>Deletion:</strong> You can request deletion of your account and associated data. You can also submit an account deletion request here: <a href="https://innoaitechsolution.com/account-deletion" className="contact-link" target="_blank" rel="noopener noreferrer">https://innoaitechsolution.com/account-deletion</a></li>
            <li><strong>Data Portability:</strong> You can request a copy of your data in a portable format</li>
            <li><strong>Restriction:</strong> You can request that we restrict processing of your information in certain circumstances</li>
            <li><strong>Withdrawal of Consent:</strong> Where processing is based on consent, you can withdraw consent at any time</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a
              href="mailto:innoaltechsolution@gmail.com"
              className="contact-link"
            >
              innoaltechsolution@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>9. GDPR Compliance (European Users)</h2>
          <p>
            If you are a resident of the European Economic Area (EEA) or United Kingdom, you have additional rights under the General Data Protection Regulation (GDPR) and UK GDPR:
          </p>
          <ul>
            <li>Right to be informed about how your data is processed</li>
            <li>Right of access to your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Rights related to automated decision-making and profiling</li>
          </ul>
          <p>
            Our legal basis for processing your data includes: (1) your consent, (2) performance of a contract with you, (3) compliance with legal obligations, and (4) our legitimate interests in providing and improving our services.
          </p>
          <p>
            If you have concerns about how we process your data, you have the right to lodge a complaint with your local data protection authority.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>10. Children's Privacy</h2>
          <p>
            Our services are not intended for children under the age of 13 (or the minimum age required in your jurisdiction). InnoAl Tech Solution does not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information promptly.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            InnoAl Tech Solution may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </div>

        <div className="privacy-policy-section">
          <h2>12. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact InnoAl Tech Solution at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:innoaltechsolution@gmail.com"
              className="contact-link"
            >
              innoaltechsolution@gmail.com
            </a>
          </p>
          <p>
            <strong>Company:</strong> InnoAl Tech Solution
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
