"use client";

import React from "react";

const sections = [
  { id: "intro", title: "Terms of Use of GNHL.AFRICA" },
  { id: "what-you-should-know", title: "What you should know at a glance" },
  { id: "general-terms", title: "Terms of Use" },
  { id: "content", title: "Content on the Website" },
  { id: "external-resources", title: "Access to External Resources" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "liability", title: "Liability and Indemnification" },
  { id: "common", title: "Common Provisions" },
  { id: "governing-law", title: "Governing Law" },
];

const TermsOfUsePage = () => {
  return (
    <div className="max-w-6xl px-4 py-16 mx-auto space-y-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-[#034401]">
        Terms of Use
      </h1>

      {/* Table of Contents */}
      <div className="bg-[#f9f9f9] border rounded-md p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-2 text-[#034401]">
          Table of Contents
        </h2>
        <ul className="pl-5 space-y-1 text-gray-800 list-disc">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Sections */}
      <div className="space-y-10 leading-7 text-gray-700">
        <section id="intro">
          <h2 className="text-2xl font-bold text-[#034401]">
            Terms of Use of GNHL.AFRICA
          </h2>
          <p>This document governs:</p>
          <ul className="pl-5 list-disc">
            <li>The use of our website</li>
            <li>Any other related agreement or legal relationship with us</li>
          </ul>
          <p className="mt-2">You must read this document carefully.</p>
          <p className="mt-1">
            Contact email: <strong>admin@globalnewherballife.com</strong>
          </p>
        </section>

        <section id="what-you-should-know">
          <h2 className="text-2xl font-bold text-[#034401]">
            What You Should Know at a Glance
          </h2>
          <p>
            Some provisions apply only to specific user categories (like
            consumers). If there’s no such note, clauses apply to all users.
          </p>
        </section>

        <section id="general-terms">
          <h2 className="text-2xl font-bold text-[#034401]">Terms of Use</h2>
          <p>
            These terms generally apply when using our website, unless otherwise
            stated.
          </p>
          <p>
            By using our website, you confirm that you are over 18 years old.
          </p>
        </section>

        <section id="content">
          <h2 className="text-2xl font-bold text-[#034401]">
            Content on the Website
          </h2>
          <p>
            All content is owned by us or our licensors. You may not reuse it
            beyond permitted usage. Violations could lead to enforcement or
            legal actions.
          </p>
          <p>
            You may share or download content only where explicitly stated for
            personal, non-commercial use.
          </p>
        </section>

        <section id="external-resources">
          <h2 className="text-2xl font-bold text-[#034401]">
            Access to External Resources
          </h2>
          <p>
            We are not responsible for content on third-party resources accessed
            through our site. Their terms govern such usage.
          </p>
        </section>

        <section id="acceptable-use">
          <h2 className="text-2xl font-bold text-[#034401]">Acceptable Use</h2>
          <p>
            You are responsible for legal and appropriate use. We may deny
            access if you:
          </p>
          <ul className="pl-5 list-disc">
            <li>Violate laws or these terms</li>
            <li>Infringe on third-party rights</li>
            <li>Impair our interests or offend others</li>
          </ul>
        </section>

        <section id="liability">
          <h2 className="text-2xl font-bold text-[#034401]">
            Liability and Indemnification
          </h2>
          <p>
            Our liability is limited as permitted by law. We are not responsible
            for damages unless they involve health, life, or intentional harm.
          </p>
          <p>
            You agree to indemnify us against third-party claims resulting from
            your violations of these terms.
          </p>
        </section>

        <section id="common">
          <h2 className="text-2xl font-bold text-[#034401]">
            Common Provisions
          </h2>
          <ul className="pl-5 list-disc">
            <li>We may update, suspend, or discontinue the service.</li>
            <li>All intellectual property is owned by us or our licensors.</li>
            <li>You may not resell or duplicate our services or content.</li>
          </ul>
        </section>

        <section id="governing-law">
          <h2 className="text-2xl font-bold text-[#034401]">
            Governing Law & Jurisdiction
          </h2>
          <p>
            These terms are governed by the law of the Federal Republic of
            Nigeria. Consumer protection laws in your jurisdiction may still
            apply.
          </p>
          <p>
            Any disputes will be resolved in courts of the Federal Republic of
            Nigeria.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
