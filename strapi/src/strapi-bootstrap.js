// bootstrap.js
'use strict';

module.exports = async ({ strapi }) => {
  // Check if data already exists to avoid duplicates
  const existingContent = await strapi.db.query('api::hero.hero').findMany();
  if (existingContent.length > 0) {
    console.log('Content already exists. Skipping bootstrap.');
    return;
  }

  try {
    // Create Hero Section
    await strapi.entityService.create('api::hero.hero', {
      data: {
        title: 'Membantu Bisnis Anda Fokus Bertumbuh',
        description: 'Kami hadir untuk membantu event organizer, hotel dan penyedia layanan klinik & wellness tumbuh dengan efisien melalui sistem manajemen pemesanan dan tiket yang terpadu.',
        chip_text: 'Fitur Baru',
        cta_demo_text: 'Demo',
        cta_register_text: 'Registrasi Sekarang',
        cta_register_link: 'https://agendakota.id/register-user',
        publishedAt: new Date(),
      },
    });

    // Create Partner Companies
    const partners = [
      { name: 'Company 1', order: 1 },
      { name: 'Company 2', order: 2 },
      { name: 'Company 3', order: 3 },
      { name: 'Company 4', order: 4 },
      { name: 'Company 5', order: 5 },
    ];

    for (const partner of partners) {
      await strapi.entityService.create('api::partner.partner', {
        data: {
          ...partner,
          publishedAt: new Date(),
        },
      });
    }

    // Create Business Benefits
    await strapi.entityService.create('api::benefit.benefit', {
      data: {
        title: 'Teknologi Agendakota',
        description: 'Kami percaya bahwa setiap bisnis berhak mendapatkan kemudahan dalam mengelola layanan. Dengan sistem booking, ticketing dan tools marketing kami dapat mendukung bisnis Anda.',
        publishedAt: new Date(),
      },
    });

    // Create Business Solutions
    const solutions = [
      {
        title: 'Untuk Klinik & Wellnes Provider',
        description: 'Berguna untuk manajemen reservasi layanan klinik, special promotions, kegiatan wellness seperti Yoga, Reflexology, dsb.',
        link: '/solutions/clinic',
      },
      {
        title: 'Untuk Event Organizer',
        description: 'Cocok untuk event creator mempromosikan event dan mengelola pemesanan tiket event Anda. Mulai dari event kecil hingga besar.',
        link: '/solutions/event',
      },
      {
        title: 'Untuk Hotel',
        description: 'Mudah menjual side services selain kamar. Cocok untuk layanan Restaurant, Spa, Gym, Swimming Pool dan Special Promo lainnya.',
        link: '/solutions/hotel',
      },
    ];

    for (const solution of solutions) {
      await strapi.entityService.create('api::solution.solution', {
        data: {
          ...solution,
          publishedAt: new Date(),
        },
      });
    }

    // Create Features
    const features = [
      {
        title: 'Ticketing Management',
        description: 'Kelola penjualan tiket event dengan kemudahan bukti QR code, refund, re-scheduling, sistem pembayaran beragam hingga voucher.',
      },
      {
        title: 'Reservation Management',
        description: 'Kelola reservasi dan tingkatkan optimalkan kepuasan pelanggan Anda dengan sistem pembayaran beragam.',
      },
      {
        title: 'Marketing Analytics',
        description: 'Sistem analisis data yang lengkap untuk tracking ROI bisnis atau event, sehingga mudah menentukan strategi bisnis.',
      },
      {
        title: 'AI Marketing Generator',
        description: 'Buat strategi marketing dan konten marketing untuk meningkatkan penjualan tiket event atau layanan bisnis Anda.',
      },
      {
        title: 'Virtual Events Management',
        description: 'Sistem virtual event terintegrasi dengan marketplace untuk memberikan pengalaman event virtual terbaik.',
      },
      {
        title: 'Marketing Tools',
        description: 'Fitur marketing untuk meningkatkan promosi event maupun bisnis Anda, seperti email marketing, WA marketing, media coverage dsb.',
      },
    ];

    for (const feature of features) {
      await strapi.entityService.create('api::feature.feature', {
        data: {
          ...feature,
          publishedAt: new Date(),
        },
      });
    }

    // Create Testimonials
    await strapi.entityService.create('api::testimonial.testimonial', {
      data: {
        company_name: 'Sisyphus',
        testimonial_text: "We've been using Untitled to kick start every new project and can't imagine working without it.",
        person_name: 'Candice Wu',
        person_position: 'Product Manager, Sisyphus',
        publishedAt: new Date(),
      },
    });

    // Create CTA Section
    await strapi.entityService.create('api::cta.cta', {
      data: {
        title: 'Scale Up Bisnismu Sekarang',
        description: 'Join dengan 150+ Bisnis yang Telah Bertumbuh',
        feature_button_text: 'Fitur Agendakota',
        register_button_text: 'Registrasi Sekarang',
        register_button_link: 'https://agendakota.id/register-user',
        publishedAt: new Date(),
      },
    });

    console.log('Bootstrap completed successfully!');
  } catch (error) {
    console.error('Bootstrap error:', error);
  }
};
