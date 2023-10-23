import { ImAttachment } from "react-icons/im";
const Terms = () => {
    const webTerms = [
        {
            title: "Acceptance of Terms",
            details: " By accessing or using Ecocraftz.com, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, please do not use the website."
        },
        {
            title: "User Conduct",
            details: " You agree to use Ecocraftz.com solely for lawful purposes and in a manner that does not infringe upon the rights of others or inhibit their use and enjoyment of the website. You shall not engage in any behavior that could be considered harmful, disruptive, offensive, or otherwise objectionable."
        },
        {
            title: "Account Registration",
            details: "In order to access certain features of the website, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to provide accurate and complete information when registering and to promptly update your account details as needed."
        },
        {
            title: "Content and Intellectual Property",
            details: "The content available on Ecocraftz.com, including text, images, graphics, videos, and other materials, is protected by intellectual property rights and other applicable laws. You may not modify, reproduce, distribute, or create derivative works based on this content without our explicit permission."
        },
        {
            title: "User-Generated Content",
            details: "If you submit content to Ecocraftz.com, such as reviews, comments, or other contributions, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, reproduce, modify, and distribute that content for the purpose of operating and improving the website."
        },
        {
            title: "Privacy",
            details: "We are committed to protecting your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using Ecocraftz.com, you consent to the collection and use of your data as described in our Privacy Policy."
        },
        {
            title: "Third-Party Links",
            details: "Ecocraftz.com may contain links to third-party websites or services that are not controlled by us. We are not responsible for the content or practices of these third-party websites. Your interactions with such third parties are solely between you and them."
        },
        {
            title: "Termination",
            details: "We reserve the right to terminate or suspend your access to Ecocraftz.com at any time, without notice, for any reason, including violation of these Terms."
        },
        {
            title: "Changes to Terms",
            details: "  We may modify these Terms at any time. Your continued use of the website after any such changes indicates your acceptance of the modified Terms."
        },
        {
            title: "Contact Us",
            details: "If you have any questions or concerns about these Terms or the website, please contact us at ecocraftzbd@gmail.com. By using Ecocraftz.com, you agree to abide by these and any future revisions. Thank you for visiting our website and being part of our community"
        },

    ]
    return (
        <div className="w-4/5 mx-auto my-4">
            <h1 className="text-3xl font-bold font-serif">Ecocraftz.com User Terms and Conditions</h1>
            <div className="text-lg">
                Welcome to Ecocraftz.com. These User Terms and Conditions govern your use of our website and any services provided through it. By accessing or using Ecocraftz.com, you agree to comply with these Terms. Please read them carefully before using our website.
            </div>

            {
                webTerms.map((term, index) => <div key={index} className="my-4 w-full lg:w-3/4 mx-auto flex-wrap ">
                    <h1 className="text-2xl font-semibold flex flex-row justify-start items-center my-2"><span className="text-lg"><ImAttachment></ImAttachment></span>{term.title}</h1>
                    <p>{term.details}</p>
                </div>)
            }

            <div className="flex flex-row justify-end">
                <span className="text-sm">Last updated: 28 Augest,2023</span>
            </div>

        </div>
    );
};

export default Terms;