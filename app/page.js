'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLightBg, setIsLightBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setIsScrolled(scrollPos > 20)

      const hero = document.getElementById('home')
      const heroPos = hero ? hero.getBoundingClientRect().bottom + window.scrollY : 0
      setIsLightBg(scrollPos > heroPos - 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    const script = document.createElement('script')
    script.src = '/main.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''} ${isLightBg ? 'light-bg' : ''}`} id="navbar">
        <a href="#home" className="nav-logo">Annayyara Garage 7</a>
        <div className="nav-links">
          <a href="#service">Layanan</a>
          <a href="#armada">Armada</a>
          <a href="#testimoni">Testimoni</a>
          <a href="#booking">Cara Booking</a>
          <a href="#kontak" className="nav-cta">Hubungi Kami</a>
        </div>
        <button 
          className={`nav-hamburger ${isMobileMenuOpen ? 'open' : ''}`} 
          id="hamburger" 
          aria-label="Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''} ${isLightBg ? 'light-bg' : ''}`} id="mobileMenu">
        <a href="#service" onClick={() => setIsMobileMenuOpen(false)}>Layanan</a>
        <a href="#armada" onClick={() => setIsMobileMenuOpen(false)}>Armada</a>
        <a href="#testimoni" onClick={() => setIsMobileMenuOpen(false)}>Testimoni</a>
        <a href="#booking" onClick={() => setIsMobileMenuOpen(false)}>Cara Booking</a>
        <a href="#kontak" onClick={() => setIsMobileMenuOpen(false)}>Hubungi Kami</a>
      </div>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <Image
            src="/media/hero.jpeg"
            alt="Sewa Mobil Surabaya - Annayyara Garage 7"
            fill
            priority
            sizes="100vw"
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content fade-in">
          <div className="eyebrow">Sewa Mobil Premium Surabaya</div>
          <h1 className="hero-title">PERJALANAN <em>BERKELAS</em>,<br />DRIVER TERPERCAYA</h1>
          <p className="hero-desc">Armada premium, driver profesional, dan layanan terpercaya untuk setiap perjalanan penting Anda.</p>
          <a href="https://wa.me/6281392294199" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.118 1.532 5.845L.057 23.516a.5.5 0 0 0 .612.612l5.671-1.475A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.536-5.197-1.464l-.372-.22-3.863 1.004 1.025-3.746-.242-.384A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* TRUSTED SERVICE */}
      <section className="section s-cream" id="service">
        <div className="container">
          <div className="section-header fade-in">
            <div className="eyebrow">Trusted Car Rental Service</div>
            <h2 className="section-title">Layanan kami mencakup</h2>
            <p className="section-sub">Berbagai kebutuhan perjalanan Anda</p>
          </div>
          <div className="service-grid">
            <div className="service-card fade-in">
              <div className="service-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a6b2e" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
              </div>
              <div className="service-label">Wisata & Tur</div>
              <div className="service-desc">Museum, destinasi budaya, wisata kota Surabaya dan sekitarnya</div>
            </div>
            <div className="service-card fade-in">
              <div className="service-icon-wrap">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9a6b2e" strokeWidth="1.5"><path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z"/></svg>
              </div>
              <div className="service-label">Acara Spesial</div>
              <div className="service-desc">Pernikahan, gathering, acara korporat, dan momen penting lainnya</div>
            </div>
          </div>
        </div>
      </section>

      {/* LAYANAN / KEUNGGULAN */}
      <section className="section s-white" id="layanan">
        <div className="container">
          <div className="section-header fade-in">
            <div className="eyebrow">Keunggulan Kami</div>
            <h2 className="section-title">Layanan Kami</h2>
            <p className="section-sub">Kenapa memilih Annayyara Garage 7 Surabaya</p>
          </div>
          <div className="layanan-grid">
            <div className="layanan-card fade-in">
              <div className="layanan-num">01</div>
              <div className="layanan-title">Mobil Terbaru dan Lengkap</div>
              <div className="layanan-desc">Annayyara Garage 7 memiliki unit banyak dan baru-baru: Mobil Premium, SUV, MPV, Sedan, Sport, Mini Bus. Semua unit ada sesuai permintaan Anda.</div>
            </div>
            <div className="layanan-card fade-in">
              <div className="layanan-num">02</div>
              <div className="layanan-title">Driver Sabar dan Pengalaman</div>
              <div className="layanan-desc">Layanan kami dilengkapi dengan driver profesional yang siap menemani perjalanan Anda dengan keahlian mengemudi yang sudah teruji.</div>
            </div>
            <div className="layanan-card fade-in">
              <div className="layanan-num">03</div>
              <div className="layanan-title">Lokasi Kantor / Garasi Jelas</div>
              <div className="layanan-desc">Kunjungi kantor kami di Jl. Wisma Tirta Agung Asri V.87 Gununganyar, Surabaya. Kami memiliki lokasi kantor/garasi yang jelas, memudahkan Anda untuk melihat armada yang mau disewa, atau bayar tanda jadi dan silaturahmi dengan kami.</div>
            </div>
            <div className="layanan-card fade-in">
              <div className="layanan-num">04</div>
              <div className="layanan-title">Reservasi 24 Jam</div>
              <div className="layanan-desc">Kami buka 24 jam. Anda bisa reservasi sewa mobil dengan kami 24 jam setiap hari, baik telepon atau WhatsApp. Tidak usah sungkan-sungkan untuk menghubungi kami. Tanya-tanya informasi sewa mobil gratis.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ARMADA */}
      <section className="section s-cream" id="armada">
        <div className="container">
          <div className="section-header fade-in">
            <div className="eyebrow">Armada</div>
            <h2 className="section-title">Mobil Siap Sewa</h2>
            <p className="section-sub">Dengan driver berpengalaman, tidak lepas kunci</p>
          </div>
          <div className="mobil-grid">
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.02.57 AM (1).jpeg" alt="Sewa Alphard New Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.02.57 AM.jpeg" alt="Sewa Avanza Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.02.58 AM (1).jpeg" alt="Sewa Mobil Pengantin Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.02.58 AM.jpeg" alt="Sewa Inova Reborn Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.02.59 AM (1).jpeg" alt="Sewa Vellfire Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.02.59 AM (2).jpeg" alt="Sewa Hiace Premio Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.02.59 AM.jpeg" alt="Sewa Innova Zenix Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.03.02 AM.jpeg" alt="Sewa Land Cruiser Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.03.04 AM (1).jpeg" alt="Sewa Hiace Luxury Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.03.04 AM.jpeg" alt="Sewa Palisade Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.03.05 AM (1).jpeg" alt="Sewa Mercy Sprinter Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
            <div className="mobil-card fade-in">
              <Image src="/media/WhatsApp Image 2026-04-11 at 11.03.05 AM.jpeg" alt="Sewa Fortuner Surabaya" fill sizes="(max-width: 768px) 50vw, 25vw" className="mobil-img" />
            </div>
          </div>

          <div className="armada-list-wrap fade-in">
            <p className="armada-list-title">Daftar Lengkap Armada Kami</p>
            <div className="armada-marquee">
              <div className="armada-list">
                {[
                  'Alphard', 'Vellfire', 'Land Cruiser', 'Pajero', 'Fortuner',
                  'Mercy S450', 'Sprinter', 'Innova', 'Avanza', 'Hiace Premio',
                  'Hiace Luxury', 'Elf Long', 'Xpander', 'Xenia',
                ].map((mobil) => (
                  <span className="armada-chip" key={mobil}>{mobil}</span>
                ))}
              </div>
              <div className="armada-list" aria-hidden="true">
                {[
                  'Alphard', 'Vellfire', 'Land Cruiser', 'Pajero', 'Fortuner',
                  'Mercy S450', 'Sprinter', 'Innova', 'Avanza', 'Hiace Premio',
                  'Hiace Luxury', 'Elf Long', 'Xpander', 'Xenia',
                ].map((mobil) => (
                  <span className="armada-chip" key={mobil}>{mobil}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="section s-white" id="testimoni">
        <div className="container">
          <div className="section-header fade-in">
            <div className="eyebrow">Testimonials</div>
            <h2 className="section-title">Yang pelanggan katakan</h2>
            <p className="section-sub">Ulasan nyata dari pelanggan kami</p>
          </div>
          <div className="review-grid">
            <div className="review-card fade-in">
              <div className="stars">
                {[1,2,3,4,5].map(i => <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d4900a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p className="review-text">Berangkat di hari bahagia dengan mobil yang bersih, elegan, dan tepat waktu. Pelayanan ramah, driver profesional, perjalanan terasa nyaman dan berkelas.</p>
              <div className="review-footer">
                <div className="reviewer-name">Satriyo</div>
              </div>
            </div>
            <div className="review-card fade-in">
              <div className="stars">
                {[1,2,3,4,5].map(i => <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d4900a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p className="review-text">Interior mobilnya bersih, lega, dan sangat nyaman. Jok empuk, kabin rapi, perjalanan jadi tenang dan premium, cocok untuk tamu VIP.</p>
              <div className="review-footer">
                <div className="reviewer-name">Sukiman</div>
              </div>
            </div>
            <div className="review-card fade-in">
              <div className="stars">
                {[1,2,3,4,5].map(i => <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d4900a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p className="review-text">Mobilnya mewah, bersih, dan terlihat sangat elegan. Kondisi unit prima, tampilan rapi, dan nyaman dipakai untuk acara penting.</p>
              <div className="review-footer">
                <div className="reviewer-name">Samuel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEMBAYARAN */}
      <section className="section s-cream" id="pembayaran">
        <div className="container">
          <div className="section-header fade-in">
            <div className="eyebrow">Pembayaran</div>
            <h2 className="section-title">Rekening Resmi</h2>
          </div>
          <div className="payment-box fade-in">
            <div className="payment-left">
              <div className="payment-acct">BSI — 6749372630</div>
              <div className="payment-name">atas nama Titis W</div>
            </div>
            <div className="payment-divider"></div>
            <div className="payment-warn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9a4a1a" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p>Harap melakukan pembayaran <strong>hanya ke rekening di atas</strong>. Selain rekening atas nama Titis W dan nomor tersebut bukan tanggung jawab kami dan dipastikan penipuan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARA BOOKING */}
      <section className="section s-white" id="booking">
        <div className="container">
          <div className="section-header fade-in">
            <div className="eyebrow">Cara Booking</div>
            <h2 className="section-title">Langkah reservasi</h2>
            <p className="section-sub">Mudah dan cepat, cukup 5 langkah</p>
          </div>
          <div className="booking-steps">
            <div className="step-row fade-in">
              <div className="step-left">
                <div className="step-num-circle">1</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-title">Hubungi WhatsApp / Telepon</div>
                <div className="step-desc">WA: 0813-9229-4199 — Bisa datang langsung ke kantor/garasi untuk lihat unit</div>
              </div>
            </div>
            <div className="step-row fade-in">
              <div className="step-left">
                <div className="step-num-circle">2</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-title">Tentukan kebutuhan</div>
                <div className="step-desc">Jenis mobil, tanggal, durasi, dan tujuan perjalanan — semua sewa dengan driver</div>
              </div>
            </div>
            <div className="step-row fade-in">
              <div className="step-left">
                <div className="step-num-circle">3</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-title">Konfirmasi ketersediaan & harga</div>
                <div className="step-desc">Admin akan mengirim detail unit dan total biaya</div>
              </div>
            </div>
            <div className="step-row fade-in">
              <div className="step-left">
                <div className="step-num-circle">4</div>
                <div className="step-line"></div>
              </div>
              <div className="step-content">
                <div className="step-title">Lakukan pembayaran DP / pelunasan</div>
                <div className="step-desc">Transfer hanya ke rekening resmi a.n. Titis W — BSI 6749372630</div>
              </div>
            </div>
            <div className="step-row fade-in">
              <div className="step-left">
                <div className="step-num-circle">5</div>
              </div>
              <div className="step-content">
                <div className="step-title">Booking selesai</div>
                <div className="step-desc">Unit & driver dijadwalkan sesuai pesanan Anda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer" id="kontak">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">Annayyara Garage 7 Surabaya</div>
              <div className="footer-tagline">Armada premium, driver profesional, dan layanan terpercaya untuk setiap perjalanan penting Anda.</div>
            </div>
            <div className="footer-col">
              <div className="footer-col-label">Pembayaran</div>
              <div className="footer-info">
                Nomor Rekening BSI<br />
                <strong>6749372630</strong><br />
                a.n. Titis W
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-label">Kontak</div>
              <div className="footer-info">
                <a href="https://wa.me/6281392294199" target="_blank" rel="noopener noreferrer">081392294199</a><br /><br />
                Jl. Wisma Tirta Agung Asri<br />
                V.87 Gununganyar<br />
                Surabaya
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © 2025 Annayyara Garage 7 Surabaya — Semua hak dilindungi
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP CTA */}
      <a
        href="https://wa.me/6281392294199"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat via WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.118 1.532 5.845L.057 23.516a.5.5 0 0 0 .612.612l5.671-1.475A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.536-5.197-1.464l-.372-.22-3.863 1.004 1.025-3.746-.242-.384A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
      </a>
    </>
  )
}
