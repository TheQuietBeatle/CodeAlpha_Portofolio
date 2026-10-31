import { useState } from 'react';
import './Component3.css';

const certificates = [
  {
    src: './certificates/anthropic-claude-code-101.png',
    alt: 'Claude Code 101 — Anthropic',
  },
  {
    src: './certificates/anthropic-claude-101.png',
    alt: 'Claude 101 — Anthropic',
  },
  {
    src: './certificates/anthropic-ai-fluency.png',
    alt: 'AI Fluency: Framework & Foundations — Anthropic',
  },
  {
    src: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MYYL7STF7ZH3/CERTIFICATE_LANDING_PAGE~MYYL7STF7ZH3.jpeg',
    alt: 'React Basics — Meta',
  },
  {
    src: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~0ZO5G7MKT6YP/CERTIFICATE_LANDING_PAGE~0ZO5G7MKT6YP.jpeg',
    alt: 'Learn Tailwind CSS — Scrimba',
  },
  {
    src: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YC970N7WAQ54/CERTIFICATE_LANDING_PAGE~YC970N7WAQ54.jpeg',
    alt: 'Introduction to Front-End Development — Meta',
  },
  {
    src: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~82EYWA7899M2/CERTIFICATE_LANDING_PAGE~82EYWA7899M2.jpeg',
    alt: 'Learn TypeScript — Scrimba',
  },
  {
    src: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~OZ2GMJUOMUR0/CERTIFICATE_LANDING_PAGE~OZ2GMJUOMUR0.jpeg',
    alt: 'Learn Express.js — Scrimba',
  },
];

const otherCertificates = 'Also holds: Microsoft Azure Fundamentals (AZ-900) · Meta Front-End Developer Professional Certificate';

function Certificate() {
  const [index, setIndex] = useState(0);

  const goTo = (i) => setIndex((i + certificates.length) % certificates.length);

  return (
    <>
      <section className="projects experience-section">
        <h2 className="projects-title">My Certificates</h2>
        <div className="project-grid">
          <div className="project-card">
            <div className="certificate-slider">
              <button
                className="slider-arrow slider-arrow--prev"
                onClick={() => goTo(index - 1)}
                aria-label="Previous certificate"
              >
                ‹
              </button>

              <div className="slider-viewport">
                <div
                  className="slider-track"
                  style={{
                    width: `${certificates.length * 100}%`,
                    transform: `translateX(-${index * (100 / certificates.length)}%)`,
                  }}
                >
                  {certificates.map((cert) => (
                    <div
                      className="slider-slide"
                      key={cert.src}
                      style={{ width: `${100 / certificates.length}%` }}
                    >
                      <img src={cert.src} alt={cert.alt} className="slider-image" />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="slider-arrow slider-arrow--next"
                onClick={() => goTo(index + 1)}
                aria-label="Next certificate"
              >
                ›
              </button>
            </div>

            <h4 className="slider-caption">{certificates[index].alt}</h4>

            <div className="slider-dots">
              {certificates.map((cert, i) => (
                <button
                  key={cert.src}
                  className={`slider-dot ${i === index ? 'slider-dot--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${cert.alt}`}
                />
              ))}
            </div>

            <p className="slider-note">{otherCertificates}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificate;
