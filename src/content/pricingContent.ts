export const pricingContent = {
  header: {
    label: "Pricing Plans",
    title: "Flexible Plans for Kumaon Hospitality",
    desc: "Choose the plan that fits your growth goals."
  },
  audit: {
    title: "The 2-hour mountain audit",
    badge: "Free - No commitment - During your stay",
    desc: "We stay at your property and conduct a live digital audit over tea. Walk away with immediate, actionable upgrades. No obligations.",
    note: "We come to you. We stay at your property. We work during the stay.",
    listTitle: "What you get before we check out:",
    items: [
      { id: 1, title: "Google Business audit", desc: "Live optimization of keywords, photos, and info." },
      { id: 2, title: "AI photo upgrade", desc: "1 professional-grade AI-enhanced property photo." },
      { id: 3, title: "OTA gap report", desc: "Competitor gap analysis on OTA channels." },
      { id: 4, title: "AI avatar demo", desc: "60-second virtual host video preview." },
      { id: 5, title: "Printed 10-idea sheet", desc: "Quick fixes list to keep." },
    ]
  },
  plans: [
    {
      id: "foundation",
      name: "Foundation",
      badge: "Foundation - portfolio rate",
      regularPrice: "₹20,000/mo",
      price: "₹9,999",
      period: "/mo",
      subtitle: "3-month portfolio engagement - then your choice to continue at regular rate or leave",
      features: [
        "Google Business optimisation + weekly updates",
        "8 AI-written Instagram posts/month (captions + hashtags)",
        "OTA listing cleanup: photos, description, pricing tips",
        "AI-enhanced room/view photos (4/month)",
        "Monthly report: reach, impressions, profile views",
        "1 WhatsApp check-in/week for questions"
      ],
      aiFeatures: ["AI photo enhance", "AI captions", "Review drafts"],
      guarantee: "If you don't see improvement in 45 days, month 2 is free. No questions.",
      recommended: false
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Growth - most picked - recommended",
      regularPrice: "₹55,000/mo",
      price: "₹24,999",
      period: "/mo",
      subtitle: "One Oct-March booking at ₹8K ADR covers this month's fee in 3 days",
      features: [
        "Everything in Foundation",
        "1 AI avatar video/month — your property's virtual host",
        "Meta Ads management (₹5,000 ad spend included)",
        "16 Reels/month (AI-scripted, shot-list provided)",
        "WhatsApp booking funnel setup",
        "Review intelligence — auto-drafted responses for your approval",
        "Competitor tracking dashboard (monthly)"
      ],
      aiFeatures: ["AI avatar", "AI photos", "AI ad creatives", "AI scripts"],
      roi: {
        retainer: "₹24,999",
        extraBooking: "+ ₹8,000",
        directBookings: "+ ₹2,880",
        netCost: "~₹14,119"
      },
      guarantee: "Ads don't bring 3 qualified leads in 30 days? We run month 2 at no charge.",
      recommended: true
    },
    {
      id: "partner",
      name: "Partner",
      badge: "Partner - AI full-stack",
      regularPrice: "₹95,000/mo",
      price: "₹44,999",
      period: "/mo",
      subtitle: "Or: ₹15,000/mo + 6% of incremental revenue above your last year's baseline",
      features: [
        "Everything in Growth",
        "AI booking chatbot on WhatsApp + website (24/7)",
        "Dynamic pricing model — weekly rate recommendations",
        "Live performance dashboard (occupancy, leads, channels)",
        "International SEO — programmatic English content",
        "Monthly strategy call with founder (you + us)",
        "2 video shoots/month including drone-style AI footage"
      ],
      aiFeatures: ["AI chatbot", "Pricing AI", "Intl SEO", "AI footage"],
      guarantee: "Revenue share option: you pay more only if you earn more. Zero risk.",
      recommended: false
    }
  ],
  reasons: [
    {
      title: "Portfolio pricing is real",
      desc: "We're choosing 3 Kumaon properties to build our hospitality portfolio. You get rates 50-70% below market because we need case studies. Once the portfolio is built, these rates are gone."
    },
    {
      title: "AI means 10x output, same cost",
      desc: "AI avatar videos, AI photo enhancement, AI captions, AI review responses — what would cost ₹80,000/month at a traditional agency costs us a fraction. That saving passes to you during portfolio phase."
    },
    {
      title: "We're from here",
      desc: "No agency in Delhi or Bengaluru knows what \"Oct-March season\" really means for a Corbett resort or why Kausani winters are different from Mukteshwar winters. That context is built in. It doesn't cost extra."
    }
  ]
};
