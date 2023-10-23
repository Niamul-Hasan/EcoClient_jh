import { BiCookie } from "react-icons/bi";
const Cookies = () => {
    const cookiesInfo = [
        {
            title: "What are Cookies",
            details: "Cookies are small text files that are placed on your device (computer, tablet, smartphone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website's owners."
        },
        {
            title: "How We Use Cookies",
            details: <>
                <h1>We use cookies and similar tracking technologies for various purposes, including:</h1>
                <ul className="list-disc list-inside">
                    <li><span>Essential Cookies: </span>These cookies are necessary for the functioning of our Website. They enable you to navigate our site and use its features, such as accessing secure areas.</li>
                    <li><span>Performance Cookies: </span>These cookies help us understand how visitors interact with our Website by collecting information such as the pages visited, the time spent on each page, and any error messages encountered. This data helps us improve our Website&#39;s performance.</li>
                    <li><span>Functionality Cookies: </span>These cookies allow our Website to remember choices you make (such as your language preference) and provide enhanced features.</li>
                    <li><span>Analytics Cookies: </span>We use third-party analytics services to collect and analyze information about how visitors use our Website. These cookies help us understand trends and patterns in user behavior, but they do not identify you personally.</li>
                    <li><span>Marketing and Advertising Cookies: </span>These cookies are used to deliver relevant advertisements to you based on your interests. They also help measure the effectiveness of advertising campaigns.</li>
                </ul>
            </>
        },
        {
            title: "Third-Party Cookies",
            details: "We may allow third-party service providers to place cookies on your device to enhance your experience and provide additional services. These providers may have their own privacy policies governing the use of cookies."
        },
        {
            title: "Your Choices",
            details: "You can manage your cookie preferences through your browser settings. You can choose to accept or decline cookies. Please note that if you choose to disable cookies, some features of our Website may not function properly."
        },
        {
            title: " Consent",
            details: "By using our Website, you consent to the use of cookies as described in this Cookie Policy. You can withdraw your consent at any time by adjusting your browser settings."
        },
        {
            title: " Changes to this Cookie Policy",
            details: "We may update this Cookie Policy from time to time. Any changes will be posted on this page, and the (Last Updated) date at the bottom will reflect the latest revision. We encourage you to review this policy periodically."
        },

    ]
    return (
        <div className="w-4/5 mx-auto my-4 font-serif">
            <div>
                <h1 className="text-3xl font-bold">Cookie Policy</h1>
                <p className="text-lg font-serif">Welcome to EcoCraftz.com. This Cookie Policy explains how we use cookies and similar tracking technologies on our Website. By using our Website, you consent to the use of cookies as described in this policy.</p>
            </div>
            {
                cookiesInfo.map((cookies, index) => <div key={index}>
                    <h1 className="text-2xl font-semibold flex flex-row justify-start items-center my-2">
                        <span><BiCookie /></span>
                        {cookies.title}</h1>
                    <p>{cookies.details}</p>
                </div>)
            }
            <div className="mt-2 text-lg">
                <i> Thank you for visiting our Website and understanding how we use cookies to enhance your experience.</i>
            </div>
            <div className="mt-4 flex flex-row justify-end">
                <i className="text-sm">Last Updated: 30 August,2023</i>
            </div>
        </div>
    );
};

export default Cookies;