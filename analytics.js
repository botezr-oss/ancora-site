const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

function sendAnalyticsEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    console.log('[Analytics]', eventName, params);
  }
}

function trackSectionView(sectionId) {
  sendAnalyticsEvent('section_view', {
    section_id: sectionId,
  });
}

function trackAction(actionName) {
  sendAnalyticsEvent(actionName, {
    page_location: window.location.href,
  });
}

function initSectionObserver() {
  const sections = document.querySelectorAll('section[id]');
  const seen = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !seen.has(sectionId)) {
          seen.add(sectionId);
          trackSectionView(sectionId);
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initCtaTracking() {
  const bookButton = document.querySelector('.btn-primary');
  const messageButton = document.querySelector('.btn-secondary');

  if (bookButton) {
    bookButton.addEventListener('click', () => {
      trackAction('book_clarity_session_click');
    });
  }

  if (messageButton) {
    messageButton.addEventListener('click', () => {
      trackAction('message_linkedin_click');
    });
  }
}

function initAnalytics() {
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  }
  trackAction('page_view');
  initSectionObserver();
  initCtaTracking();
}

window.addEventListener('DOMContentLoaded', initAnalytics);
