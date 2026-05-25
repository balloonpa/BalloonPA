export const GA_ID = 'G-S1T8XPPRHD';

function gtag(...args) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag(...args);
}

export function trackPageView(url) {
  gtag('config', GA_ID, { page_path: url });
}

export function trackOutboundClick(url, label, extra = {}) {
  gtag('event', 'outbound_click', { link_url: url, link_text: label, ...extra });
}

export function trackPhoneClick(source) {
  gtag('event', 'phone_click', { source });
}
