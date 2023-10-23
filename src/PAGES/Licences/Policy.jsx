import { MdPrivacyTip } from "react-icons/md";
const Policy = () => {
    const policyInfo = [
        {
            title: "Information We Collect",
            details: <>
                <h1>We may collect various types of information to provide and improve our services. The types of information we may collect include:</h1>
                <ul className="ms-2 list-decimal list-inside">
                    <li><span className="text-lg font-semibold">Personal Information:</span> This includes your name, email address, postal address, phone number, and other similar contact data. We collect this information when you provide it voluntarily, such as when signing up for an account, making a purchase, or contacting us.</li>
                    <li><span className="text-lg font-semibold">Usage Data:</span> We collect information about how you interact with our website, including the pages you visit, the features you use, and your browsing patterns. This data helps us improve our website&#39;s functionality and user experience.</li>
                    <li><span className="text-lg font-semibold">Cookies and Tracking Technologies:</span> We use cookies, web beacons, and other tracking technologies to collect information about your interactions with our website. These technologies help us analyze trends, administer the site, track users&#39; movements, and gather demographic information.</li>
                </ul>
            </>
        },
        {
            title: "How We Use Your Information",
            details: <>
                <h1>We may use the information we collect for various purposes, including:</h1>
                <ul className="ms-10 list-disc">
                    <li><span></span>Providing, maintaining, and improving our services.</li>
                    <li><span></span>Processing your orders and transactions.</li>
                    <li><span></span>Responding to your inquiries and providing customer support.</li>
                    <li><span></span>Sending you important updates and promotional materials (you can opt out at any time).</li>
                    <li><span></span>Analyzing usage patterns to enhance our website&#39;s functionality and user experience.</li>
                    <li><span></span>Preventing fraud and ensuring the security of our users and our services.</li>
                </ul>
            </>
        },
        {
            title: "How We Share Your Information",
            details: <>
                <h1>We do not sell, rent, or trade your personal information to third parties. However, we may share your information in the following circumstances:</h1>
                <ul>
                    <li><span></span>With trusted service providers who assist us in operating our website and delivering our services.</li>
                    <li><span></span>With law enforcement or regulatory authorities if required by law or to protect our rights and the rights of others.</li>
                    <li><span></span>In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the new owner.</li>
                    <li><span></span></li>
                </ul>
            </>
        },
        {
            title: "Security",
            details: "We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is entirely secure, so we cannot guarantee absolute security."
        },
        {
            title: "Changes to this Privacy Policy",
            details: "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website."
        },

    ]
    return (
        <div className="w-4/5 mx-auto my-4">
            <div>
                <h1 className="text-3xl font-bold">Privacy Policy of EcoCraftz.com</h1>
                <p>At EcoCraftz.com, we are committed to maintaining the privacy and protection of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website or services. By visiting EcoCraftz.com, you consent to the practices described in this policy.</p>
            </div>
            {
                policyInfo.map((policy, index) => <div key={index}>
                    <h1 className="text-2xl font-semibold flex flex-row justify-start items-center my-2">
                        <span><MdPrivacyTip /></span>
                        {policy.title}</h1>
                    <p>{policy.details}</p>
                </div>)
            }
            <div className="mt-4 text-lg">
                <i> By using EcoCraftz.com, you signify your acceptance of this Privacy Policy. If you do not agree with the terms of this policy, please do not use our website or services.</i>
            </div>
        </div>
    );
};

export default Policy;