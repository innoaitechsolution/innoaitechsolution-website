import React, { useEffect } from "react";
import "./TermsOfUse.css";

const TermsOfUse = () => {
  useEffect(() => {
    document.title = "Terms of Use - InnoAl Tech Solution";
  }, []);

  return (
    <div className="terms-of-use">
      <div className="terms-of-use-container">
        <h1 className="terms-of-use-title">Terms of Use</h1>
        <p className="terms-of-use-intro">
          Welcome to InnoAl Tech Solution. By accessing or using our services, you agree to be bound by these Terms of Use.
        </p>
        <p className="terms-of-use-updated">
          Last updated: January 2, 2026
        </p>

        <div className="terms-of-use-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            These Terms of Use ("Terms") govern your access to and use of the services provided by InnoAl Tech Solution ("we," "us," or "our"). By creating an account, accessing, or using our services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you must not use our services.
          </p>
          <p>
            Your use of our services is also subject to our Privacy Policy, which describes how we collect, use, and protect your information. By using our services, you acknowledge that you have read and understood our Privacy Policy.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>2. Description of Services</h2>
          <p>
            InnoAl Tech Solution provides digital technology services, including but not limited to mobile applications, web applications, software solutions, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>3. Account Registration and Security</h2>
          <h3>Account Creation</h3>
          <p>
            To access certain features of our services, you may be required to create an account. When creating an account, you agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the security of your account credentials (username, password, etc.)</li>
            <li>Accept responsibility for all activities that occur under your account</li>
            <li>Notify us immediately of any unauthorized use of your account or any other breach of security</li>
          </ul>
          <h3>Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. InnoAl Tech Solution is not liable for any loss or damage arising from your failure to protect your account information. You agree to use strong, unique passwords and to log out of your account when using shared or public devices.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>4. Acceptable Use</h2>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to:
          </p>
          <ul>
            <li>Violate any applicable local, state, national, or international law or regulation</li>
            <li>Infringe upon the rights of others, including intellectual property rights, privacy rights, or other legal rights</li>
            <li>Transmit, upload, or distribute any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
            <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity</li>
            <li>Interfere with or disrupt the operation of our services or servers, including by introducing viruses, malware, or other harmful code</li>
            <li>Attempt to gain unauthorized access to our services, accounts, computer systems, or networks</li>
            <li>Use automated systems (bots, scrapers, etc.) to access our services without our express written permission</li>
            <li>Reverse engineer, decompile, or disassemble any part of our services</li>
            <li>Remove, alter, or obscure any proprietary notices or labels on our services</li>
            <li>Use our services to compete with us or to build similar or competing services</li>
          </ul>
        </div>

        <div className="terms-of-use-section">
          <h2>5. User Content</h2>
          <p>
            If our services allow you to post, upload, or submit content ("User Content"), you retain ownership of any intellectual property rights in that content. However, by submitting User Content, you grant InnoAl Tech Solution a limited, non-exclusive, royalty-free license to host, store, reproduce, and display such User Content solely for the purpose of operating, maintaining, and improving our services, and to comply with applicable laws and enforce these Terms.
          </p>
          <p>
            You represent and warrant that:
          </p>
          <ul>
            <li>You own or have the necessary rights to grant the license described above</li>
            <li>Your User Content does not violate any third-party rights, including intellectual property, privacy, or publicity rights</li>
            <li>Your User Content complies with these Terms and all applicable laws</li>
          </ul>
          <p>
            We reserve the right to remove, edit, or refuse to post any User Content at our sole discretion, without notice or liability.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of InnoAl Tech Solution or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <p>
            The InnoAl Tech Solution name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of InnoAl Tech Solution or its affiliates or licensors. You may not use such marks without our prior written permission.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our services without our express written permission, except as permitted by these Terms or applicable law.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>7. Termination</h2>
          <p>
            We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our services will cease immediately.
          </p>
          <p>
            You may terminate your account at any time by contacting us at{" "}
            <a
              href="mailto:innoaltechsolution@gmail.com"
              className="contact-link"
            >
              innoaltechsolution@gmail.com
            </a>
            . Upon termination, we may delete your account information and User Content, subject to our data retention policies and legal obligations.
          </p>
          <p>
            All provisions of these Terms that by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>8. Disclaimers</h2>
          <p>
            <strong>YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK.</strong> Our services are provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
          </p>
          <p>
            InnoAl Tech Solution does not warrant that:
          </p>
          <ul>
            <li>Our services will be uninterrupted, secure, or error-free</li>
            <li>Any defects or errors will be corrected</li>
            <li>Our services are free of viruses or other harmful components</li>
            <li>The results obtained from using our services will be accurate or reliable</li>
          </ul>
        </div>

        <div className="terms-of-use-section">
          <h2>9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL INNOAL TECH SOLUTION, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, OUR SERVICES.
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INNOAL TECH SOLUTION ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF OUR SERVICES; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY; AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA OUR SERVICES.
          </p>
          <p>
            IN NO EVENT SHALL INNOAL TECH SOLUTION'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID TO INNOAL TECH SOLUTION IN THE TWELVE (12) MONTHS PRIOR TO THE ACTION GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>10. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless InnoAl Tech Solution, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our services, including but not limited to your User Content, any use of our services' content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from our services.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>11. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where InnoAl Tech Solution is established, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or our services shall be resolved in the competent courts of that jurisdiction, unless applicable law requires otherwise.
          </p>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>12. App Store and Google Play</h2>
          <p>
            If you access or download our services through the Apple App Store or Google Play Store, you acknowledge that Apple Inc. and Google LLC (respectively) are not responsible for InnoAl Tech Solution's services. Your use of our services through these platforms may be subject to additional terms and conditions imposed by Apple or Google. InnoAl Tech Solution is solely responsible for our services and any claims related to them.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>13. Changes to Terms</h2>
          <p>
            InnoAl Tech Solution reserves the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using our services.
          </p>
        </div>

        <div className="terms-of-use-section">
          <h2>14. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact InnoAl Tech Solution at:
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

export default TermsOfUse;

