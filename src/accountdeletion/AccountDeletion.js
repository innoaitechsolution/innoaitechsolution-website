import React, { useEffect } from "react";
import "./AccountDeletion.css";

const AccountDeletion = () => {
  useEffect(() => {
    document.title = "Account Deletion Request - InnoAl Tech Solution";
  }, []);

  return (
    <div className="account-deletion">
      <div className="account-deletion-container">
        <h1 className="account-deletion-title">Account Deletion Request</h1>
        <p className="account-deletion-intro">
          You can request deletion of your account and associated personal data for any InnoAl Tech Solution application.
        </p>
        <p className="account-deletion-updated">
          Last updated: January 2, 2026
        </p>

        <div className="account-deletion-section">
          <h2>How to Request Deletion</h2>
          
          <h3>In-App Deletion (If Available)</h3>
          <p>
            Some of our applications may offer in-app account deletion. To delete your account through the app:
          </p>
          <ol>
            <li>Open the application</li>
            <li>Navigate to Settings</li>
            <li>Go to Account settings</li>
            <li>Select "Delete Account" (the exact wording may vary by application)</li>
          </ol>
          <p>
            <strong>Note:</strong> Not all applications may have this feature. If in-app deletion is not available, please use the email method below.
          </p>

          <h3>Email Request (Available for All Apps)</h3>
          <p>
            You can request account deletion by sending an email to InnoAl Tech Solution. Please include the following information in your request:
          </p>
          <ul>
            <li><strong>Subject line:</strong> "Account Deletion Request"</li>
            <li>Your account email address and/or username</li>
            <li>The name of the application for which you want to delete your account</li>
            <li>Any additional details that may help us locate your account (optional)</li>
          </ul>
          <p>
            Send your deletion request to:{" "}
            <a
              href="mailto:innoaltechsolution@gmail.com?subject=Account%20Deletion%20Request"
              className="contact-link"
            >
              innoaltechsolution@gmail.com
            </a>
          </p>
          <p>
            <strong>Important:</strong> We may request identity verification to prevent unauthorized account deletion. This helps protect your account and personal information.
          </p>
        </div>

        <div className="account-deletion-section">
          <h2>What Happens After Deletion</h2>
          <p>
            Once we receive and verify your account deletion request, we will proceed to delete or anonymize your account data and associated personal information. However, please note the following:
          </p>
          <ul>
            <li>We will delete or anonymize your account data unless we are required to retain it by law or for legitimate business purposes, such as security, fraud prevention, or compliance with legal obligations.</li>
            <li>Some technical and security logs may be retained for a limited period for troubleshooting, security analysis, and compliance purposes. These logs are typically anonymized and do not contain personally identifiable information.</li>
            <li>If your account is associated with any ongoing transactions, disputes, or legal matters, we may be required to retain certain information until those matters are resolved.</li>
          </ul>
          <p>
            The deletion process typically begins within 30 days of receiving your verified request, though the exact timeline may vary depending on the complexity of your account and applicable legal requirements.
          </p>
        </div>

        <div className="account-deletion-section">
          <h2>Questions or Concerns</h2>
          <p>
            If you have any questions about the account deletion process or need assistance, please contact InnoAl Tech Solution at{" "}
            <a
              href="mailto:innoaltechsolution@gmail.com"
              className="contact-link"
            >
              innoaltechsolution@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletion;

