const modal = document.getElementById('case-study-modal');
const modalContent = document.getElementById('modal-content');
const closeTriggers = document.querySelectorAll('[data-close-modal]');
const projectButtons = document.querySelectorAll('[data-modal]');

const caseStudies = {
  natref: {
    title: 'Natref Refinery Minority Stake Disposal',
    body: '<p><strong>Situation.</strong> TotalEnergies was preparing to exit its shareholding in Natref, a transaction that required careful coordination across legal, financial, operational, and shareholder interests.</p><p><strong>Approach.</strong> Clive led the workstreams spanning buyer, seller, and majority-shareholder perspectives, helping keep the process aligned as commercial and governance decisions moved forward.</p><p><strong>Impact.</strong> The work supported a disciplined execution path through a complex divestment process while helping preserve value and clarity across the stakeholders involved.</p>'
  },
  totalgaz: {
    title: 'TotalGaz South Africa Acquisition',
    body: '<p><strong>Situation.</strong> The acquisition required a coordinated effort to structure and steer the transaction through a demanding commercial and execution environment.</p><p><strong>Approach.</strong> Clive led the acquisition process end to end, bringing together the workstreams and decision points necessary to keep momentum and focus.</p><p><strong>Impact.</strong> The transaction was guided with strong ownership and a clear commercial perspective from early preparation through execution.</p>'
  },
  biodiesel: {
    title: 'Biodiesel Value Chain Development',
    body: '<p><strong>Situation.</strong> The opportunity required a full-scope view of a new value chain, from raw materials through production, storage, pricing, and customer contracts.</p><p><strong>Approach.</strong> Clive helped shape the business development and operating approach across the chain, ensuring the model was grounded in practical commercial and operational realities.</p><p><strong>Impact.</strong> The work supported the development of a more complete and credible route to market for the new energy proposition.</p>'
  },
  prism: {
    title: 'Global Price Risk Governance (PRISM)',
    body: '<p><strong>Situation.</strong> Across multiple affiliates and markets, the business needed more consistent governance for price risk, inventory valuation, and hedge-accounting treatment.</p><p><strong>Approach.</strong> Clive helped redesign the underlying methodology so the process could be rolled out with greater consistency across South Africa, Kenya, Brazil, the USA, Zambia, and Nigeria.</p><p><strong>Impact.</strong> The governance framework strengthened the way risk and valuation decisions were handled across the portfolio.</p>'
  },
  sap: {
    title: 'SAP FI/CO Implementation, TotalEnergies South Africa',
    body: '<p><strong>Situation.</strong> The business needed a finance and controlling setup that could support a major systems change without compromising core reporting and control requirements.</p><p><strong>Approach.</strong> Clive owned the finance and controlling setup as well as data migration and integration testing, helping connect process design to delivery.</p><p><strong>Impact.</strong> The implementation strengthened the foundation for finance operations and improved the quality of the transition into the new environment.</p>'
  },
  planning: {
    title: 'Budgeting & Long-Term Planning Tool Implementation',
    body: '<p><strong>Situation.</strong> The group needed a more effective budgeting and long-term planning tool that could support consistent planning across the business.</p><p><strong>Approach.</strong> Clive implemented and rolled out the new system, bringing both tool adoption and process discipline into the same change effort.</p><p><strong>Impact.</strong> The rollout helped improve the way planning and reporting were managed across the organisation.</p>'
  }
};

function openModal(id) {
  const content = caseStudies[id];
  if (!content) return;
  modalContent.innerHTML = `<h3>${content.title}</h3>${content.body}`;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

projectButtons.forEach((button) => {
  button.addEventListener('click', () => openModal(button.dataset.modal));
});

closeTriggers.forEach((trigger) => {
  trigger.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const headings = document.querySelectorAll('.reveal-heading');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const heading = entry.target;
    const text = heading.querySelector('h2');
    if (!text) return;
    const words = text.innerHTML.split(/(\s+)/);
    text.innerHTML = words
      .map((word) => (word.trim() ? `<span class="word">${word}</span>` : word))
      .join('');

    const wordNodes = text.querySelectorAll('.word');
    wordNodes.forEach((word, index) => {
      requestAnimationFrame(() => {
        setTimeout(() => word.classList.add('is-visible'), index * 40);
      });
    });

    observer.unobserve(heading);
  });
}, { threshold: 0.2 });

headings.forEach((heading) => observer.observe(heading));
