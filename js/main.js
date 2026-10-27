/**
 * Sinisudah.Kusikat — Website Profil & Katalog Informasi (Balikpapan)
 * Konfigurasi Terpusat Kontak & Tautan Eksternal
 * 
 * CATATAN PENTING KEJUJURAN DATA:
 * Seluruh tautan resmi (nomor WhatsApp, link Google Maps, link Instagram)
 * menunggu konfirmasi data asli dari pemilik bisnis (DEP-03, DEP-04, DEP-05).
 * Nilai dibiarkan kosong ('') sampai data resmi diberikan.
 * Tombol tidak akan mengarah ke URL palsu atau placeholder yang menyesatkan.
 */

const SITE_CONFIG = {
  // Nomor WhatsApp resmi owner/admin (DEP-03)
  whatsappNumber: '6285348085177',

  // Tautan resmi Google Maps workshop Sinisudah.Kusikat (DEP-04) - Koordinat: 1°12'01.1"S 116°51'01.4"E
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=-1.200306,116.850389',

  // Tautan resmi Instagram Sinisudah.Kusikat (DEP-05)
  instagramUrl: 'https://www.instagram.com/sinisudah.kusikat',

  // Template Pesan Otomatis WhatsApp berdasarkan 5 konteks tombol
  messages: {
    general: 'Halo Sinisudah.Kusikat, saya ingin berkonsultasi mengenai layanan cuci sepatu.',
    fastClean: 'Halo Sinisudah.Kusikat, saya tertarik dengan layanan Fast Clean (Rp35.000). Boleh info lebih lanjut?',
    deepClean: 'Halo Sinisudah.Kusikat, saya tertarik dengan layanan Deep Clean (Rp45.000–Rp60.000) dan ingin konsultasi kondisi sepatu saya.',
    unyellowingRepaint: 'Halo Sinisudah.Kusikat, saya tertarik dengan layanan Unyellowing & Repaint (Rp125.000). Boleh info lebih lanjut?',
    pickupDelivery: 'Halo Sinisudah.Kusikat, saya ingin menanyakan layanan pick-up & delivery untuk lokasi saya.'
  }
};

/**
 * Membentuk URL wa.me yang valid dengan nomor yang telah disanitasi dan pesan terenkode
 * @param {string} rawNumber - Nomor WhatsApp mentah
 * @param {string} message - Pesan yang akan dikirim
 * @returns {string} URL wa.me lengkap
 */
function buildWhatsAppUrl(rawNumber, message) {
  if (!rawNumber) return '#';
  // Hapus karakter non-numerik (seperti +, spasi, tanda strip)
  const sanitized = String(rawNumber).replace(/[^0-9]/g, '');
  if (!sanitized) return '#';
  const encodedText = encodeURIComponent(message || '');
  return `https://wa.me/${sanitized}?text=${encodedText}`;
}

/**
 * Menginisialisasi tautan kontak dan eksternal pada dokumen
 * @param {Object} config - Objek konfigurasi kontak
 */
function initSiteLinks(config = SITE_CONFIG) {
  // 1. Inisialisasi Tombol WhatsApp berdasarkan konteks
  const waButtons = document.querySelectorAll('[data-wa-context]');
  waButtons.forEach((btn) => {
    const context = btn.getAttribute('data-wa-context');
    const message = config.messages[context] || config.messages.general;

    if (config.whatsappNumber && config.whatsappNumber.trim() !== '') {
      btn.href = buildWhatsAppUrl(config.whatsappNumber, message);
      btn.target = '_blank';
      btn.rel = 'noopener noreferrer';
      btn.removeAttribute('aria-disabled');
      btn.title = 'Kirim pesan via WhatsApp';
    } else {
      btn.href = '#';
      btn.setAttribute('aria-disabled', 'true');
      btn.title = 'Menunggu konfirmasi nomor resmi WhatsApp dari owner (DEP-03)';
      btn.addEventListener('click', (e) => {
        // Cegah lompatan layar atau aksi default jika tautan belum aktif
        e.preventDefault();
      });
    }
  });

  // 2. Inisialisasi Tautan Eksternal (Google Maps & Instagram)
  const externalLinks = document.querySelectorAll('[data-external-link]');
  externalLinks.forEach((link) => {
    const linkType = link.getAttribute('data-external-link');

    if (linkType === 'maps') {
      if (config.googleMapsUrl && config.googleMapsUrl.trim() !== '') {
        link.href = config.googleMapsUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.removeAttribute('aria-disabled');
        link.title = 'Buka petunjuk arah di Google Maps';
      } else {
        link.href = '#';
        link.setAttribute('aria-disabled', 'true');
        link.title = 'Menunggu konfirmasi tautan resmi Google Maps dari owner (DEP-04)';
        link.addEventListener('click', (e) => e.preventDefault());
      }
    } else if (linkType === 'instagram') {
      if (config.instagramUrl && config.instagramUrl.trim() !== '') {
        link.href = config.instagramUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.removeAttribute('aria-disabled');
        link.title = 'Kunjungi profil Instagram resmi Sinisudah.Kusikat';
      } else {
        link.href = '#';
        link.setAttribute('aria-disabled', 'true');
        link.title = 'Menunggu konfirmasi tautan profil Instagram dari owner (DEP-05)';
        link.addEventListener('click', (e) => e.preventDefault());
      }
    }
  });

  // 3. Smooth scrolling internal navigation dengan penanganan sticky header
  const internalAnchorLinks = document.querySelectorAll('a[href^="#"]:not([data-wa-context]):not([data-external-link])');
  internalAnchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash tanpa reload
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      }
    });
  });
}

/**
 * Inisialisasi layer animasi gerak (motion layer) berbasis scroll reveal
 * Mendukung prefers-reduced-motion untuk aksesibilitas penuh
 */
function initMotion() {
  if (typeof window === 'undefined') return;

  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -30px 0px',
    threshold: 0.1
  });

  reveals.forEach((el) => {
    observer.observe(el);
  });

  // Animasi halus untuk elemen hero di layar pertama
  const heroReveals = document.querySelectorAll('.hero-section .reveal');
  heroReveals.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add('is-visible');
    }, 60 + idx * 60);
  });
}

/**
 * Inisialisasi Mobile Navigation Hamburger Menu & Drawer
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navDrawer = document.getElementById('mobile-nav-drawer');
  if (!menuToggle || !navDrawer) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = navDrawer.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.innerHTML = isOpen
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>';
  });

  // Otomatis tutup saat tautan menu diklik
  navDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navDrawer.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>';
    });
  });
}

// Inisialisasi saat dokumen siap (di lingkungan browser)
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initSiteLinks(SITE_CONFIG);
    initMotion();
    initMobileMenu();
  });
}

// Export untuk keperluan unit testing otomatis (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SITE_CONFIG,
    buildWhatsAppUrl,
    initSiteLinks,
    initMotion,
    initMobileMenu
  };
}

