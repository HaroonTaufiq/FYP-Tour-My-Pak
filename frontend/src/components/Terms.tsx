import React, { useEffect } from 'react'

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      },[])
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
      <p className="text-gray-600 mb-6">
        Welcome to Tour My Pak! These terms and conditions outline the rules and regulations for the use of Tour My Pak's Website.
      </p>
      <p className="text-gray-600 mb-6">
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use Tour My Pak if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies</h2>
      <p className="text-gray-600 mb-6">
        We employ the use of cookies. By accessing Tour My Pak, you agreed to use cookies in agreement with the Tour My Pak's Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">License</h2>
      <p className="text-gray-600 mb-6">
        Unless otherwise stated, Tour My Pak and/or its licensors own the intellectual property rights for all material on Tour My Pak. All intellectual property rights are reserved. You may access this from Tour My Pak for your own personal use subjected to restrictions set in these terms and conditions.
      </p>

     

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hyperlinking to our Content</h2>
      <p className="text-gray-600 mb-6">
        The following organizations may link to our Website without prior written approval:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
          <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">iFrames</h2>
      <p className="text-gray-600 mb-6">
        Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Content Liability</h2>
      <p className="text-gray-600 mb-6">
        We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reservation of Rights</h2>
      <p className="text-gray-600 mb-6">
        We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Removal of links from our website</h2>
      <p className="text-gray-600 mb-6">
        If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer</h2>
      <p className="text-gray-600 mb-6">
        To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Limit or exclude our or your liability for death or personal injury;</li>
          <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
      </p>

      <p className="text-gray-600 mb-6">
        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
      </p>

      <p className="text-gray-600 mb-6">
        As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
      </p>
    </div>
  </div>
  )
}

export default Terms
