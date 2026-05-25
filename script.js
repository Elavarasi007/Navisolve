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
   OPEN POPUP
========================================= */

function openPopup(){

    document
        .getElementById("leaderPopup")
        .classList
        .add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE POPUP
========================================= */

function closePopup(){

    document
        .getElementById("leaderPopup")
        .classList
        .remove("active");

    document.body.style.overflow = "auto";
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

        });

        /* CLOSE MENU AFTER CLICK */

        const navItems = document.querySelectorAll(".nav-links a");

        navItems.forEach((item) => {

            item.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });

    }

});

let scrollPosition = 0;

function openServicePopup(){

    scrollPosition = window.pageYOffset;

    document.body.style.top = `-${scrollPosition}px`;

    document.body.classList.add("service-popup-open");

    document.documentElement.classList.add("service-popup-open");

    document.getElementById("capitalPopup").classList.add("active");
}

function closeServicePopup(){

    document.body.classList.remove("service-popup-open");

    document.documentElement.classList.remove("service-popup-open");

    document.getElementById("capitalPopup").classList.remove("active");

    document.body.style.top = "";

    window.scrollTo(0, scrollPosition);
}

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