// script.js

// CONTACT FORM

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Enquiry Submitted Successfully!");

        form.reset();

    });

}


// NAVBAR SHADOW

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";

    }else{

        navbar.style.boxShadow = "none";

    }

});


// HERO COUNTER ANIMATION

const counters = document.querySelectorAll(".stat-box h2");

counters.forEach((counter) => {

    const target = +counter.getAttribute("data-target");

    const prefix = counter.getAttribute("data-prefix") || "";
    const suffix = counter.getAttribute("data-suffix") || "";

    let count = 0;

    const duration = 2000; // total animation duration
    const increment = target / (duration / 16);

    const updateCounter = () => {

        count += increment;

        if(count < target){

            counter.innerText =
                prefix +
                Math.floor(count) +
                suffix;

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText =
                prefix +
                target +
                suffix;

        }

    };

    updateCounter();

});

/* =========================================
   REAL 3D SERVICE CARD EFFECT
========================================= */

const cards = document.querySelectorAll(".service-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        /* ROTATION */

        const rotateY = ((x - centerX) / centerX) * 8;

        const rotateX = ((centerY - y) / centerY) * 8;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-12px)
        `;

    });

    /* RESET */

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;
    });

});


/* =========================================
   LEADERSHIP POPUP
========================================= */

let leadershipPageScrollPosition = 0;

function getLeadershipPopupScrollContainers() {

    const popup = document.getElementById("leaderPopup");

    if (!popup) {
        return [];
    }

    return [
        popup,
        popup.querySelector(".popup-box"),
        popup.querySelector(".popup-right"),
        popup.querySelector(".popup-left")
    ].filter(Boolean);
}

function resetLeadershipPopupScroll() {

    const containers = getLeadershipPopupScrollContainers();

    containers.forEach((container) => {
        container.scrollTop = 0;
        container.scrollLeft = 0;
    });

    requestAnimationFrame(() => {
        containers.forEach((container) => {
            container.scrollTop = 0;
            container.scrollLeft = 0;
        });
    });
}

function openPopup() {

    const popup = document.getElementById("leaderPopup");

    if (!popup) {
        return;
    }

    resetLeadershipPopupScroll();

    popup.classList.add("active");

    document.documentElement.classList.add("leadership-popup-open");
    document.body.classList.add("leadership-popup-open");

    requestAnimationFrame(() => {
        resetLeadershipPopupScroll();
    });
}

function closePopup() {

    const popup = document.getElementById("leaderPopup");

    if (!popup) {
        return;
    }

    popup.classList.remove("active");

    document.documentElement.classList.remove("leadership-popup-open");
    document.body.classList.remove("leadership-popup-open");

    resetLeadershipPopupScroll();
}

/* =========================================
   ESC CLOSE
========================================= */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closePopup();
    }
});




document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       SERVICE DATA
    ========================================= */

    const serviceData = {

        1: `

<h2 class="modal-title">
Attracting Private Capital
</h2>

<div class="modal-section">

    <h4>The Challenge</h4>

    <p>
    For small and mid-sized corporates, raising and securing capital for growth and monetisation remains a persistent challenge. Access is often limited, ticket sizes inadequate, and the path to institutional investors unclear.
    </p>

</div>


<div class="modal-section">

    <h4>Our Solution</h4>

    <p>
    At Navisolve, we provide access to private capital markets — Private Equity, Venture Capital, Family Offices and Private Debt — helping you secure the growth capital your business needs at the right stage.
    </p>

    <p>
    As a promoter or investor, if you are looking at monetisation and divestment, Navisolve is your trusted partner.
    </p>

</div>


<div class="modal-section">

    <h4>When to Consider Private Capital</h4>

    <ul>

        <li>
        You require growth capital to scale operations
        </li>

        <li>
        Founders or promoters seek partial or full liquidity
        </li>

        <li>
        The business is ready for institutional partnership
        </li>

        <li>
        You need capital for acquisitions or market expansion
        </li>

        <li>
        Private capital has grown systemically and often acts as market maker
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>What We Deliver</h4>

    <ul>

        <li>
        <strong>PE Readiness Assessment</strong><br>
        We evaluate your organisational, financial, and governance readiness for private equity investment.
        </li>

        <li>
        <strong>Investment Case Development</strong><br>
        We craft compelling investment narratives, financial models, and data rooms that resonate with institutional investors and family offices.
        </li>

        <li>
        <strong>Investor Access</strong><br>
        Direct introductions to PE firms and private debt providers across UK, Europe, Middle East, and Asian markets.
        </li>

        <li>
        <strong>End-to-End Transaction Support</strong><br>
        From initial conversations through due diligence, negotiations, structuring, and closing — we remain by your side.
        </li>

        <li>
        <strong>Post-Investment Integration</strong><br>
        Guidance on working with your new capital partners, reporting frameworks, synergies and value creation planning and implementation.
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Typical Engagement Timeline</h4>

    <p>
    6–12 months depending on transaction complexity.
    </p>

</div>


<div class="modal-section">

    <h4>Ideal For</h4>

    <ul>

        <li>
        Companies with $10m–$200m revenue seeking growth or buyout capital
        </li>

        <li>
        Founder-led businesses preparing for succession or liquidity
        </li>

        <li>
        Management teams pursuing buyouts
        </li>

    </ul>

</div>

`,
       2: `

<h2 class="modal-title">
Board Governance & Investor Management
</h2>

<div class="modal-section">

    <h4>The Challenge</h4>

    <p>
    Every Board and CEO faces unique challenges when managing the expectations of PE owners. Misalignment can erode value, strain relationships, and derail growth plans.
    </p>

</div>


<div class="modal-section">

    <h4>Our Solution</h4>

    <p>
    Navisolve specialises in bridging the communication gap between Management Board and Institutional or Private owners.
    </p>

    <p>
    We ensure board actions align with investor expectations while preserving management autonomy and company interests.
    </p>

</div>


<div class="modal-section">

    <h4>Why This Matters</h4>

    <p>
    PE-backed ventures operate under heightened scrutiny, compressed timelines, and demanding return expectations.
    </p>

    <p>
    Without clear alignment, even successful companies can underperform relative to investor expectations.
    </p>

</div>


<div class="modal-section">

    <h4>What We Deliver</h4>

    <ul>

        <li>
        <strong>Expectation Mapping</strong><br>
        We help you understand the key priorities, short-term milestones, and long-term vision of your PE owners — often uncovering unspoken assumptions.
        </li>

        <li>
        <strong>Board Training & Development</strong><br>
        Equipping board members with the knowledge and skills to navigate PE ownership dynamics, reporting requirements, and value creation frameworks.
        </li>

        <li>
        <strong>Performance Reporting Frameworks</strong><br>
        Creating robust reporting structures aligned with PE metrics, KPIs, and board cadence expectations.
        </li>

        <li>
        <strong>Stakeholder Alignment Workshops</strong><br>
        Facilitated sessions that bring together management, board, and investor representatives to establish shared goals and resolve tensions.
        </li>

        <li>
        <strong>Conflict Mediation</strong><br>
        Neutral, experienced facilitation when disagreements arise — preventing value erosion and relationship breakdown.
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Why Choose Navisolve</h4>

    <ul>

        <li>
        Specialised focus on PE-backed board dynamics
        </li>

        <li>
        Tailored solutions based on your specific ownership structure
        </li>

        <li>
        Proven track record aligning boards with investor stakeholders
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Engagement Options</h4>

    <ul>

        <li>
        Retainer-based advisory
        </li>

        <li>
        Project-based interventions
        </li>

        <li>
        Board observer or independent director services
        </li>

    </ul>

</div>

`,

        3: `

<h2 class="modal-title">
Integration, Digital Transformation & Synergies
</h2>

<div class="modal-section">

    <h4>The Challenge</h4>

    <p>
    Digital transformation is most effective when undertaken while the organisation is still manageable — before complexity compounds and legacy systems become entrenched.
    </p>

</div>


<div class="modal-section">

    <h4>Our Solution</h4>

    <p>
    We guide mid-sized enterprises through their digital and AI journey, ensuring technology investments deliver measurable operational efficiencies and competitive advantage.
    </p>

</div>


<div class="modal-section">

    <h4>What We Deliver</h4>

    <ul>

        <li>
        <strong>Digital Readiness Assessment</strong><br>
        Evaluating your current technology landscape, identifying gaps, and prioritising initiatives by impact and feasibility.
        </li>

        <li>
        <strong>Financial Technology Implementation</strong><br>
        Supporting the adoption of modern finance systems, treasury platforms, and reporting tools.
        </li>

        <li>
        <strong>AI & Automation Strategy</strong><br>
        Identifying practical AI and automation opportunities that deliver near-term ROI without excessive complexity.
        </li>

        <li>
        <strong>Enterprise System Selection & Implementation</strong><br>
        Vendor evaluation, selection support, and implementation oversight for ERP, CRM, and other core systems.
        </li>

        <li>
        <strong>Technology Vendor Management</strong><br>
        Acting as your strategic partner in managing relationships with technology providers — ensuring accountability and value delivery.
        </li>

        <li>
        <strong>Operations Efficiency Reviews</strong><br>
        Process mapping, bottleneck identification, and redesign recommendations to streamline operations.
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Our Approach</h4>

    <p>
    We are technology-agnostic. Our role is to represent your interests, not those of software vendors.
    </p>

    <p>
    We help you ask the right questions, negotiate effectively, and hold providers accountable.
    </p>

</div>


<div class="modal-section">

    <h4>Ideal For</h4>

    <ul>

        <li>
        Companies preparing for PE investment (digital readiness)
        </li>

        <li>
        Businesses scaling rapidly and outgrowing legacy systems
        </li>

        <li>
        Organisations seeking to reduce operational costs
        </li>

    </ul>

</div>

`,

        4: `

<h2 class="modal-title">
Market Entry — UK, Europe, Asia & Middle East
</h2>

<div class="modal-section">

    <h4>The Challenge</h4>

    <p>
    Cross-border expansion is complex. Legal structures, regulatory requirements, talent acquisition, and local market dynamics vary dramatically across jurisdictions.
    </p>

</div>


<div class="modal-section">

    <h4>Our Solution</h4>

    <p>
    Whether you are an Asian company expanding into Europe and the Middle East, or a US/European company looking eastward, Navisolve provides end-to-end market entry support.
    </p>

</div>


<div class="modal-section">

    <h4>What We Deliver</h4>

    <ul>

        <li>
        <strong>Market Assessment & Strategy</strong><br>
        Evaluating target markets, competitive landscapes, and go-to-market options before you commit resources.
        </li>

        <li>
        <strong>Legal Structuring</strong><br>
        Advising on optimal corporate structures, holding company jurisdictions, and tax-efficient arrangements.
        </li>

        <li>
        <strong>Entity Establishment</strong><br>
        Company incorporation, registered office, and initial compliance setup.
        </li>

        <li>
        <strong>Fiduciary & Corporate Services</strong><br>
        Nominee directors, company secretarial services, and ongoing compliance management.
        </li>

        <li>
        <strong>Outsourced Provider Selection</strong><br>
        Identifying and managing relationships with local accountants, lawyers, payroll providers, and other essential partners.
        </li>

        <li>
        <strong>Director Services</strong><br>
        Navisolve principals available to serve as non-executive directors on local subsidiary boards, providing governance and local credibility.
        </li>

        <li>
        <strong>Operational Setup</strong><br>
        Banking relationships, initial hiring support, and office establishment.
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Markets We Cover</h4>

    <ul>

        <li>
        United Kingdom
        </li>

        <li>
        European Union (with focus on key markets)
        </li>

        <li>
        Middle East (UAE, Saudi Arabia, Oman)
        </li>

        <li>
        India
        </li>

        <li>
        Southeast Asia
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Ideal For</h4>

    <ul>

        <li>
        Asian corporates seeking UK/European presence
        </li>

        <li>
        US/European companies entering India or Asia
        </li>

        <li>
        PE portfolio companies with international expansion mandates
        </li>

    </ul>

</div>

`,
        5: `

<h2 class="modal-title">
Navigating India’s Financial Ecosystem
</h2>

<div class="modal-section">

    <h4>The Challenge</h4>

    <p>
    India is the world’s fifth-largest economy and is on track to become the third-largest. Its demographic dividend and consumption growth offer compelling opportunities for the next 20–30 years.
    </p>

    <p>
    Yet India’s regulatory complexity, compliance requirements, and business practices can be daunting for foreign entrants.
    </p>

</div>


<div class="modal-section">

    <h4>Our Solution</h4>

    <p>
    Navisolve is your trusted guide to India — helping you navigate regulatory frameworks, financial systems, and local business practices with confidence.
    </p>

</div>


<div class="modal-section">

    <h4>What We Deliver</h4>

    <ul>

        <li>
        <strong>Regulatory Navigation</strong><br>
        Understanding RBI regulations, SEBI requirements, FEMA compliance, sectoral restrictions, and approval requirements.
        </li>

        <li>
        <strong>Entity Structuring</strong><br>
        Advising on appropriate legal structures — wholly-owned subsidiaries, joint ventures, liaison offices, or branch offices.
        </li>

        <li>
        <strong>Financial Ecosystem Access</strong><br>
        Introductions to Indian banks, NBFCs, PE/VC firms, and family offices.
        </li>

        <li>
        <strong>Compliance Management</strong><br>
        Ongoing support for GST, income tax, company law, and sector-specific regulatory requirements.
        </li>

        <li>
        <strong>Local Partner Identification</strong><br>
        Finding and vetting potential JV partners, distributors, or acquisition targets.
        </li>

        <li>
        <strong>On-Ground Support</strong><br>
        Acting as your extended team in India — attending meetings, conducting site visits, and managing key relationships.
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Why India, Why Now</h4>

    <ul>

        <li>
        1.4 billion population with a rapidly growing middle class
        </li>

        <li>
        GDP growth consistently outpacing developed markets
        </li>

        <li>
        Government initiatives like Make in India and PLI schemes welcoming foreign investment
        </li>

        <li>
        English-speaking, professionally educated workforce
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Our India Credentials</h4>

    <p>
    India is our home market. Our principals have decades of experience operating within India’s financial and regulatory ecosystem at senior levels.
    </p>

</div>


<div class="modal-section">

    <h4>Ideal For</h4>

    <ul>

        <li>
        Foreign companies establishing their first Indian presence
        </li>

        <li>
        Existing India operations seeking to scale or restructure
        </li>

        <li>
        Investors conducting due diligence on Indian opportunities
        </li>

    </ul>

</div>

`,
6: `

<h2 class="modal-title">
Public Policy — Banking, Structured Finance & Capital Markets, Alternative Assets
</h2>

<div class="modal-section">

    <h4>The Challenge</h4>

    <p>
    Regulators, government agencies, and industry bodies require specialised expertise when designing policy frameworks for banking and capital markets, structured finance, and alternative assets.
    </p>

    <p>
    Policy must balance innovation with stability, and access with prudence.
    </p>

</div>


<div class="modal-section">

    <h4>Our Solution</h4>

    <p>
    Navisolve principals bring extensive experience shaping and designing public policy for regulators, government ministries, and industry associations.
    </p>

    <p>
    We offer this expertise to institutions seeking progressive and implementable policy solutions.
    </p>

</div>


<div class="modal-section">

    <h4>What We Deliver</h4>

    <ul>

        <li>
        <strong>Policy Research & Analysis</strong><br>
        Deep-dive analysis of policy options, international precedents, and implementation considerations.
        </li>

        <li>
        <strong>Regulatory Framework Design</strong><br>
        Drafting regulations, guidelines, and circulars for banking, NBFC, capital markets, and structured finance sectors.
        </li>

        <li>
        <strong>Stakeholder Consultation</strong><br>
        Facilitating dialogue between regulators and industry participants to build consensus and improve policy outcomes.
        </li>

        <li>
        <strong>Central Bank Advisory</strong><br>
        Supporting central banks on monetary policy transmission, financial inclusion, payment systems, and supervisory frameworks.
        </li>

        <li>
        <strong>Industry Body Support</strong><br>
        Assisting banking associations, capital market participants, and fintech bodies in developing self-regulatory frameworks and industry standards.
        </li>

        <li>
        <strong>Government Advisory</strong><br>
        Supporting finance ministries and related agencies on financial sector development, public finance, and sovereign debt management.
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Sectors of Expertise</h4>

    <ul>

        <li>
        Banking regulation and supervision
        </li>

        <li>
        Capital markets (equity, debt, derivatives)
        </li>

        <li>
        Structured finance and securitisation
        </li>

        <li>
        Alternative assets & democratisation of finance
        </li>

        <li>
        Payment systems and fintech regulation
        </li>

        <li>
        Financial inclusion policy
        </li>

        <li>
        Sovereign debt and public finance
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Our Credentials</h4>

    <p>
    Our principals have held senior positions with regulatory bodies and have been instrumental in designing policy frameworks across multiple jurisdictions.
    </p>

</div>


<div class="modal-section">

    <h4>Ideal For</h4>

    <ul>

        <li>
        Central banks and financial regulators
        </li>

        <li>
        Finance ministries and government agencies
        </li>

        <li>
        Industry associations and self-regulatory bodies
        </li>

        <li>
        Multilateral institutions (World Bank, IFC, ADB)
        </li>

    </ul>

</div>


<div class="modal-section">

    <h4>Why Navisolve</h4>

    <ul>

        <li>
        <strong>Experience That Matters</strong><br>
        25 years of hands-on experience across Western and Eastern markets — practical wisdom earned through execution.
        </li>

        <li>
        <strong>Access You Might Lack</strong><br>
        Direct relationships with PE firms, debt providers, regulators, and strategic partners that would otherwise be inaccessible to mid-sized enterprises.
        </li>

        <li>
        <strong>Alignment With Your Interests</strong><br>
        We work for you, not for transaction fees or vendor commissions. Our success is measured by your outcomes.
        </li>

        <li>
        <strong>Global Perspective, Local Execution</strong><br>
        We understand that strategy without execution is merely aspiration. We work alongside you to deliver results.
        </li>

        <li>
        <strong>Right-Sized Advisory</strong><br>
        The sophistication of a global firm with the attention and accessibility of a boutique practice.
        </li>

    </ul>

</div>

`
    };


    /* =========================================
       ELEMENTS
    ========================================= */

    const buttons = document.querySelectorAll(".service-btn");
    const modal = document.getElementById("serviceModal");
    const modalContent = document.getElementById("modalContent");
    const closeBtn = document.getElementById("closeModal");


    /* =========================================
       OPEN MODAL
    ========================================= */

    buttons.forEach(button => {

        button.addEventListener("click", function (e) {

            e.preventDefault();

            const serviceId = this.getAttribute("data-service");

            modalContent.innerHTML = serviceData[serviceId];

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    /* =========================================
       CLOSE MODAL
    ========================================= */

    closeBtn.addEventListener("click", closeModal);

    document.querySelector(".service-overlay")
        .addEventListener("click", closeModal);


    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "auto";

    }

});



/* =========================================
   OPEN POPUP
========================================= */

function openServicePopup(id){

    document
        .getElementById(id)
        .classList
        .add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE POPUP
========================================= */

function closeServicePopup(id){

    document
        .getElementById(id)
        .classList
        .remove("active");

    document.body.style.overflow = "auto";
}


/* =========================================
   ESC CLOSE
========================================= */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        document
            .querySelectorAll(".service-popup")
            .forEach(function(popup){

                popup.classList.remove("active");
            });

        document.body.style.overflow = "auto";
    }

});


/* =========================================
   MOBILE MENU TOGGLE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");

    const navLinks = document.querySelector(".nav-links");

    if(menuToggle && navLinks){

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("nsvx-mobile-toggle-active");

        });

        /* CLOSE MENU AFTER CLICK */

        const navItems = document.querySelectorAll(".nav-links a");

        navItems.forEach((item) => {

            item.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuToggle.classList.remove("nsvx-mobile-toggle-active");

            });

        });

    }

});



/* =========================================
   OPEN SERVICE POPUP
========================================= */

function openServicePopup(popupId){

    // CLOSE ALL POPUPS FIRST

    document
        .querySelectorAll(".service-popup")
        .forEach((popup)=>{

            popup.classList.remove("active");

        });


    // OPEN TARGET POPUP

    const popup = document.getElementById(popupId);

    if(popup){

        popup.classList.add("active");
    }


    // STOP BODY SCROLL

    document.body.classList.add("popup-open");

    document.documentElement.classList.add("popup-open");
}



/* =========================================
   CLOSE SERVICE POPUP
========================================= */

function closeServicePopup(popupId){

    const popup = document.getElementById(popupId);

    if(popup){

        popup.classList.remove("active");
    }


    // ENABLE BODY SCROLL

    document.body.classList.remove("popup-open");

    document.documentElement.classList.remove("popup-open");
}



/* =========================================
   ESC CLOSE
========================================= */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        document
            .querySelectorAll(".service-popup")
            .forEach((popup)=>{

                popup.classList.remove("active");

            });

        document.body.classList.remove("popup-open");

        document.documentElement.classList.remove("popup-open");
    }
});







const swiper = new Swiper(".heroSwiper", {

    effect: "coverflow",

    centeredSlides: true,

    slidesPerView: "auto",

    initialSlide: 2,

    loop: true,

    speed: 900,

    grabCursor: true,

    autoplay:{

        delay:3000,

        disableOnInteraction:false,

    },

    coverflowEffect:{

        rotate:0,

        stretch:-70,

        depth:320,

        modifier:1.6,

        scale:0.85,

        slideShadows:false

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev"

    },

    breakpoints:{

        320:{
            slidesPerView:1.3
        },

        768:{
            slidesPerView:3
        },

        1200:{
            slidesPerView:"auto"
        }

    }

});
/* =========================================================
   NSV HERO — PLAY ANIMATION ONLY ONCE
========================================================= */

(function () {

    const animatedEls = document.querySelectorAll(
        "#nsv-hero-section [data-nsv-animate]"
    );

    if (!animatedEls.length) return;

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const el = entry.target;
            const delay = el.dataset.nsvDelay || 0;

            el.style.transitionDelay = delay + "ms";
            el.classList.add("nsv-in-view");

            // Stop observing after first animation
            observer.unobserve(el);

        });

    }, {
        threshold: 0.2
    });

    animatedEls.forEach((el) => observer.observe(el));

})();


/* =========================================================
   NSVX — PREMIUM HERO TEXT CAROUSEL (vanilla JS)
   Fully isolated, no dependencies, no jQuery, no GSAP.
   Safe to load as its own <script src="hero-carousel.js">
   after your existing script.js — does not touch any
   existing variables, functions, or DOM outside .nsvx-*.
========================================================= */

(function () {

    const root = document.querySelector("[data-nsvx-carousel]");
    if (!root) return;

    const track      = root.querySelector("[data-nsvx-track]");
    const slides      = Array.from(root.querySelectorAll("[data-nsvx-slide]"));
    const prevBtn     = root.querySelector("[data-nsvx-prev]");
    const nextBtn     = root.querySelector("[data-nsvx-next]");
    const paginationEl = root.querySelector("[data-nsvx-pagination]");

    const total = slides.length;
    if (!total) return;

    let activeIndex   = 0;
    let autoplayTimer = null;
    const AUTOPLAY_DELAY = 2000;

    /* ---------- BUILD DOTS ---------- */

    const dots = slides.map((_, i) => {
        const dot = document.createElement("button");
        dot.className = "nsvx-dot";
        dot.type = "button";
        dot.setAttribute("aria-label", "Go to slide " + (i + 1));
        dot.addEventListener("click", () => {
            goTo(i);
            restartAutoplay();
        });
        paginationEl.appendChild(dot);
        return dot;
    });

    /* ---------- RESPONSIVE OFFSETS ----------
       How far (in px) neighboring slides sit from center,
       and how many "visible" side slides to show. */

    function getConfig() {
        const w = window.innerWidth;
        if (w <= 640) {
            return { offset: 0,   sideVisible: 0, gap: 0 };
        }
        if (w <= 1023) {
            return { offset: 200, sideVisible: 1, gap: 200 };
        }
        return { offset: 260, sideVisible: 1, gap: 260 };
    }

    /* ---------- CIRCULAR DISTANCE ---------- */

    function circularOffset(i, active, n) {
        let diff = i - active;
        if (diff > n / 2) diff -= n;
        if (diff < -n / 2) diff += n;
        return diff;
    }

    /* ---------- RENDER ---------- */

    function render() {
        const { offset, sideVisible, gap } = getConfig();

        slides.forEach((slide, i) => {
            const diff = circularOffset(i, activeIndex, total);
            const abs = Math.abs(diff);

            slide.classList.toggle("nsvx-active", diff === 0);

            let translateX = diff * gap;
            let scale = 1;
            let opacity = 1;
            let blur = 0;
            let z = 10;

            if (diff === 0) {
                scale = 1;
                opacity = 1;
                blur = 0;
                z = 30;
            } else if (abs <= sideVisible) {
                scale = 0.85;
                opacity = 0.45;
                blur = 2;
                z = 20 - abs;
            } else {
                // hidden slides parked further out, invisible
                translateX = diff * (gap + 220);
                scale = 0.75;
                opacity = 0;
                blur = 4;
                z = 1;
            }

            slide.style.transform =
                `translate(-50%,-50%) translateX(${translateX}px) scale(${scale})`;
            slide.style.opacity = opacity;
            slide.style.filter = blur ? `blur(${blur}px)` : "none";
            slide.style.zIndex = z;
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("nsvx-dot-active", i === activeIndex);
        });
    }

    function goTo(index) {
        activeIndex = ((index % total) + total) % total;
        render();
    }

    function next() {
        goTo(activeIndex + 1);
    }

    function prev() {
        goTo(activeIndex - 1);
    }

    /* ---------- AUTOPLAY ---------- */

    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(next, AUTOPLAY_DELAY);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    /* ---------- HOVER PAUSE / RESUME ---------- */

    root.addEventListener("mouseenter", stopAutoplay);
    root.addEventListener("mouseleave", startAutoplay);

    /* ---------- ARROW CONTROLS ---------- */

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            prev();
            restartAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            next();
            restartAutoplay();
        });
    }

    /* ---------- KEYBOARD SUPPORT ---------- */

    root.setAttribute("tabindex", "0");

    root.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
            prev();
            restartAutoplay();
        } else if (e.key === "ArrowRight") {
            next();
            restartAutoplay();
        }
    });

    /* ---------- TOUCH SWIPE ---------- */

    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 40;

    root.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    }, { passive: true });

    root.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const delta = touchEndX - touchStartX;

        if (Math.abs(delta) > SWIPE_THRESHOLD) {
            if (delta < 0) {
                next();
            } else {
                prev();
            }
        }

        startAutoplay();
    }, { passive: true });

    /* ---------- RESIZE ---------- */

    let resizeTimer = null;

    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(render, 120);
    });

    /* ---------- ENTRANCE ANIMATION ----------
       Reuses the same reveal-on-scroll pattern as the rest
       of the hero, but scoped only to this carousel so it
       does not interfere with the existing nsv- observer. */

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("nsvx-in-view");
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    revealObserver.observe(root);

    /* ---------- INIT ---------- */

    render();
    startAutoplay();

})();


function openServicePopup(popupId){

    // Close all popups
    document.querySelectorAll(".service-popup").forEach((popup)=>{
        popup.classList.remove("active");
    });

    // Open selected popup
    const popup = document.getElementById(popupId);

    if(popup){

        popup.classList.add("active");

        // Reset popup scroll to top
        const box = popup.querySelector(".service-details-box");

        if(box){
            box.scrollTop = 0;
        }
    }

    document.body.classList.add("popup-open");
    document.documentElement.classList.add("popup-open");
}
function closeServicePopup(popupId){

    const popup = document.getElementById(popupId);

    if(popup){
        popup.classList.remove("active");
    }

    // Enable body scroll
    document.body.classList.remove("popup-open");
    document.documentElement.classList.remove("popup-open");

    // Stay in Services section
    const services = document.getElementById("services");

    if(services){
        services.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================
   LEADERSHIP CAROUSEL
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* LEADERSHIP MEMBER DATA */

    const leadershipMembers = [

        {
            name: "Navita Yadav",
            role: "Founder & Principal",
            status: "Global Finance & Investment Leader",
            image: "images/team1.webp",
            imageAlt: "Navita Yadav",

            shortBiography: `
                Global finance and investment leader with over <strong>25 years of experience</strong> across banking, capital markets,and private capital. Navita Yadav has built and scaled international financial institutions, led major M&A initiatives, and advised businesses, regulators, and investment firms across Europe, Asia, and the Middle East.
                <br><br>
                Formerly CEO of European institutions, she oversaw more than <strong>US$2 trillion in assets</strong> across global private markets. She has also held global leadership positions in financial services and capital markets, driving strategic expansion, operational transformation, and institutional growth.
                <br><br>
                Beyond business leadership, she actively contributes to public policy, financial sector innovation, and social impact initiatives focused on healthcare, development, and community empowerment.
            `,

            popupOverlaySubtitle: "Founder & Principal · Navisolve Ltd",
            popupRole: "Founder & Principal",

            popupIntroduction: "Navita Yadav is a Global business leader and value creator with over 25 years of Senior management and Board experience in Business Services, Banking and Consulting.",
            popupSecondParagraph: "Her extensive leadership background includes CEO, Executive Committee member, and global head positions within major financial services and capital markets institutions.",

            popupQuote: "“Recognised as an international expert across European and Asian financial markets, Navita has Successfully built, operated and monetised businesses spanning continents.”",

            awards: [
                "British Asians Role Model of the Year — 2026",
                "UK Professional Impact of the Year — 2024",
                "India’s Top 100 Women in Finance — 2019",
                "Power Profile in Financial Services — 2016",
                "Business Leadership Award for Innovation — 2015",
                "Women’s Leadership Achievement Award — 2014"
            ],

            careerHighlights: [
                { title: "Partners Group Platform Leadership", description: "Leads a Global Investment platform in Financial Services Asset servicing with Partners Group." },
                { title: "Apex Group — Regional CEO", description: "Administered US$2 trillion in Private Equity, Private Debt and Open-ended Funds assets." },
                { title: "Vistra — Global Head", description: "Built one of the first truly global and independent capital markets businesses with $300Bn assets." },
                { title: "M&A & Transformation", description: "Led 12 major mergers and acquisitions in financial services and digital assets globally." }
            ],

            expertise: "Financial Services · Banking · Consulting · Capital Markets · Private Equity · Asset Servicing · Business Transformation · Mergers & Acquisitions · Digital Assets · Investment Platforms · Public Policy · International Market Expansion.",

            impact: "Beyond business leadership, Navita actively supports healthcare initiatives for vulnerable communities in Africa and nutrition programmes for children in India and the UK. As a Board Member of Amref Health Africa UK, she contributes to strategic governance and capital initiatives at the intersection of health, finance and development."
        },

        {
            name: "Arjun Mehta",
            role: "Senior Strategic Advisor",
            status: "Global Strategy & Capital Markets Leader",
            image: "images/team.webp",
            imageAlt: "Arjun Mehta",

            shortBiography: `
                Global strategy and capital markets leader with over <strong>20 years of experience</strong> across corporate finance, institutional investment, business transformation, and international expansion. Arjun Mehta has advised growing enterprises, boards, and investors across Europe, Asia, India, and the Middle East.
                <br><br>
                Formerly holding senior leadership positions across investment and advisory organisations, he has supported <strong>complex transactions</strong> and strategic partnerships, operational improvements, and cross-border growth initiatives.
                <br><br>
                Beyond corporate advisory, he contributes to entrepreneurship, leadership development, financial innovation, and sustainable business growth.
            `,

            popupOverlaySubtitle: "Senior Strategic Advisor · Navisolve Ltd",
            popupRole: "Senior Strategic Advisor",

            popupIntroduction: "Arjun Mehta is a Global strategy and capital markets leader with over 20 years of Senior management and advisory experience in Corporate Finance, Institutional Investment and Business Transformation.",
            popupSecondParagraph: "His leadership background spans senior advisory and executive positions within investment and financial services organisations, supporting boards, institutional investors, and high-growth enterprises.",

            popupQuote: "“Recognised for his cross-border expertise across Europe, Asia, India, and the Middle East, Arjun has guided enterprises through complex transactions, strategic partnerships, and sustainable international expansion.”",

            awards: [
                "Global Strategy Leadership Award — 2025",
                "Capital Markets Advisor of the Year — 2022",
                "Emerging Markets Impact Award — 2018",
                "International Business Transformation Award — 2015"
            ],

            careerHighlights: [
                { title: "Strategic Advisory Leadership", description: "Advises boards, institutional investors, and growing enterprises on corporate finance and capital strategy across global markets." },
                { title: "Cross-Border Capital Markets", description: "Supported complex transactions and strategic partnerships across Europe, Asia, India, and the Middle East." },
                { title: "Business Transformation", description: "Guided operational improvements and international expansion initiatives for high-growth organisations." },
                { title: "Institutional Investment Strategy", description: "Held senior leadership positions across investment and advisory organisations driving long-term growth." }
            ],

            expertise: "Corporate Finance · Institutional Investment · Capital Markets · Business Transformation · Strategic Partnerships · International Expansion · Investment Advisory · Cross-Border Transactions · Leadership Development · Financial Innovation.",

            impact: "Beyond corporate advisory, Arjun contributes to entrepreneurship and leadership development programmes, supporting financial innovation and sustainable business growth initiatives across emerging markets."
        }

    ];

    let currentLeadershipIndex = 0;
    let leadershipAnimating = false;

    const leadershipCardA = document.getElementById("leadershipCardA");
    const leadershipCardB = document.getElementById("leadershipCardB");
    const leadershipBioEl = document.getElementById("leadershipActiveBio");
    const previousButton = document.querySelector(".leadership-nav-prev");
    const nextButton = document.querySelector(".leadership-nav-next");

    /* SAFETY CHECK — bail out quietly if the section isn't on this page */

    if (!leadershipCardA || !leadershipCardB) {
        return;
    }

    /* RENDER A SINGLE CARD (front or rear) WITH A MEMBER'S DATA */

    function leadershipRenderCard(cardEl, memberIndex){

        const member = leadershipMembers[memberIndex];

        const img = cardEl.querySelector(".leadership-stack-img");
        if(img){
            img.src = member.image;
            img.alt = member.imageAlt;
        }

        const nameEl = cardEl.querySelector(".leadership-stack-name");
        if(nameEl) nameEl.textContent = member.name;

        const roleEl = cardEl.querySelector(".leadership-stack-role");
        if(roleEl) roleEl.textContent = member.role;

        const statusEl = cardEl.querySelector(".leadership-stack-status");
        if(statusEl) statusEl.textContent = member.status;
    }

    /* UPDATE ACTIVE LEADER — right-side biography */

    function leadershipRenderBio(memberIndex){

        const member = leadershipMembers[memberIndex];

        if(leadershipBioEl){
            leadershipBioEl.innerHTML = member.shortBiography;
        }
    }

    /* UPDATE LEADERSHIP POPUP */

   function leadershipRenderPopup(memberIndex){

        const member = leadershipMembers[memberIndex];

        const img = document.getElementById("leadershipPopupImage");
        if(img){
            img.src = member.image;
            img.alt = member.imageAlt;
        }

        const overlayName = document.getElementById("leadershipPopupOverlayName");
        if(overlayName) overlayName.textContent = member.name;

        const overlaySubtitle = document.getElementById("leadershipPopupOverlaySubtitle");
        if(overlaySubtitle) overlaySubtitle.textContent = member.popupOverlaySubtitle;

        const popupName = document.getElementById("leadershipPopupName");
        if(popupName) popupName.textContent = member.name;

        const popupRole = document.getElementById("leadershipPopupRole");
        if(popupRole) popupRole.textContent = member.popupRole;

        const introP1 = document.getElementById("leadershipPopupIntroP1");
        if(introP1) introP1.textContent = member.popupIntroduction;

        const introP2 = document.getElementById("leadershipPopupIntroP2");
        if(introP2) introP2.textContent = member.popupSecondParagraph;

        const quote = document.getElementById("leadershipPopupQuote");
        if(quote) quote.textContent = member.popupQuote;

        const awardsEl = document.getElementById("leadershipPopupAwards");
        if(awardsEl){
            awardsEl.innerHTML = member.awards
                .map(function(award){ return "<li>" + award + "</li>"; })
                .join("");
        }

        const highlightsEl = document.getElementById("leadershipPopupHighlights");
        if(highlightsEl){
            highlightsEl.innerHTML = member.careerHighlights
                .map(function(item){
                    return (
                        '<div class="highlight-card">' +
                            "<h4>" + item.title + "</h4>" +
                            "<p>" + item.description + "</p>" +
                        "</div>"
                    );
                })
                .join("");
        }

        const expertiseEl = document.getElementById("leadershipPopupExpertise");
        if(expertiseEl) expertiseEl.textContent = member.expertise;

        const impactEl = document.getElementById("leadershipPopupImpact");
        if(impactEl) impactEl.textContent = member.impact;

        /* RESET SCROLL AFTER ALL CONTENT HAS BEEN UPDATED */
        resetLeadershipPopupScroll();
    }
    /* UPDATE LEADERSHIP CAROUSEL — swaps front/rear cards + syncs content */

    function updateLeadershipCarousel(){

        if(leadershipAnimating) return;
        leadershipAnimating = true;

        const frontCard = document.querySelector(".leadership-stack-front");
        const rearCard = document.querySelector(".leadership-stack-rear");

        if(!frontCard || !rearCard){
            leadershipAnimating = false;
            return;
        }

        /* ANIMATE: FRONT MOVES BACK, REAR MOVES FRONT */

        frontCard.classList.remove("leadership-stack-front");
        frontCard.classList.add("leadership-stack-rear");

        rearCard.classList.remove("leadership-stack-rear");
        rearCard.classList.add("leadership-stack-front");

        const nextRearIndex =
            (currentLeadershipIndex + 1) % leadershipMembers.length;

        /* rearCard element just became the new front */
        leadershipRenderCard(rearCard, currentLeadershipIndex);

        /* frontCard element just became the new rear */
        leadershipRenderCard(frontCard, nextRearIndex);

        leadershipRenderBio(currentLeadershipIndex);
        leadershipRenderPopup(currentLeadershipIndex);

        if (window.lucide) {
            lucide.createIcons();
        }

        setTimeout(function(){
            leadershipAnimating = false;
        }, 650);
    }

    /* INITIAL RENDER */

    leadershipRenderCard(leadershipCardA, 0);
    leadershipRenderCard(leadershipCardB, 1);
    leadershipRenderBio(0);
    leadershipRenderPopup(0);

    if (window.lucide) {
        lucide.createIcons();
    }

    /* NAV BUTTON EVENTS */

    if (previousButton && nextButton) {

        previousButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            currentLeadershipIndex =
                (currentLeadershipIndex - 1 + leadershipMembers.length)
                % leadershipMembers.length;

            updateLeadershipCarousel();
        });

        nextButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            currentLeadershipIndex =
                (currentLeadershipIndex + 1)
                % leadershipMembers.length;

            updateLeadershipCarousel();
        });
    }

});