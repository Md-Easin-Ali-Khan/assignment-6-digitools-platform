import { Check } from "lucide-react";
import { headingStyle } from "./ToolsSection";
import { contentStyle } from "./ToolsSection";


const pricingData = [
  {
    id: 1,
    price: "$0",
    period: "/Month",
    heading: "Starter",
    content: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    btnText: "Get Started Free",
  },
  {
    id: 2,
    badge: "Most Popular",
    price: "$29",
    period: "/Month",
    heading: "Pro",
    content: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    btnText: "Start Pro Trial",
  },
  {
    id: 3,
    price: "$99",
    period: "/Month",
    heading: "Enterprise",
    content: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    btnText: "Contact Sales",
  },
];



const PricingSection = () => {
  return (
    <div className="mb-28">
      <div className="mb-10 space-y-4">
        <h1 className={headingStyle}>Simple, Transparent Pricing</h1>
        <p className={contentStyle}>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:justify-between">
        {pricingData.map((plan) => (

          // cards
          <div
            key={plan.id}
            className="flex flex-col items-center group bg-[#F2F2F2] hover:[background:linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] transition-all duration-100 rounded-xl p-6 space-y-6 relative"
          >
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              {plan.badge && (
                <span className="bg-purple-100 text-purple-600 group-hover:bg-white group-hover:text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
            </div>

            <div>
              <h2 className="font-bold text-2xl text-center text-gray-900 group-hover:text-white transition-colors duration-100">
                {plan.heading}
              </h2>
              <p className="text-gray-500 group-hover:text-white transition-colors duration-100">
                {plan.content}
              </p>
            </div>

            <h3 className="font-bold text-4xl text-gray-900 group-hover:text-white transition-colors duration-100">
              {plan.price}<span className="text-xl text-gray-500 group-hover:text-white transition-colors duration-100">{plan.period}</span>
            </h3>

            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-500 group-hover:text-white flex items-center gap-2 transition-colors duration-100">
                  <Check className="w-4 h-4 text-[#30B868] group-hover:text-white transition-colors duration-100" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="btn mb-0 w-full bg-[linear-gradient(135deg,#4F39F6_0%,#9514FA_100%)] rounded-full text-white">
              {plan.btnText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;