import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldAlert, Upload, X, Camera, Sparkles } from 'lucide-react';

/**
 * Join The Agency Component (/join)
 * 5-Step Talent Application experience with ethical representation disclosures & pre-submission review screen.
 */
export default function JoinPage({ onNavigate }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    city: '',
    phone: '',
    email: '',
    instagram: '',
    height: '',
    talentCategory: 'FASHION',
    gender: 'FEMALE',
    experienceLevel: 'NEW TALENT',
    background: '',
    skills: ['CAMERA CONFIDENCE', 'EDITORIAL'],
    portfolioUrl: '',
    photoFiles: [],
    whyNovante: '',
    additionalNotes: '',
    consentAgreed: false
  });

  const [errors, setErrors] = useState({});

  const availableSkills = [
    'ACTING', 'DANCE', 'RUNWAY', 'CAMERA CONFIDENCE',
    'EDITORIAL STYLING', 'HOSTING', 'SPORTS / ATHLETIC', 'CONTENT CREATION'
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const toggleSkill = (skill) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill);
      const updated = exists ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill];
      return { ...prev, skills: updated };
    });
  };

  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const previews = files.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file)
      }));
      setFormData((prev) => ({
        ...prev,
        photoFiles: [...prev.photoFiles, ...previews].slice(0, 8)
      }));
      if (errors.photos) setErrors((prev) => ({ ...prev, photos: null }));
    }
  };

  const addDemoPhotos = () => {
    setFormData((prev) => ({
      ...prev,
      photoFiles: [
        { previewUrl: '/talent-01.png', name: 'demo-headshot-01.png' },
        { previewUrl: '/hero-editorial.png', name: 'demo-full-length.png' }
      ]
    }));
    if (errors.photos) setErrors((prev) => ({ ...prev, photos: null }));
  };

  const removePhoto = (index) => {
    setFormData((prev) => ({
      ...prev,
      photoFiles: prev.photoFiles.filter((_, i) => i !== index)
    }));
  };

  // Step Validation
  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'PLEASE ENTER YOUR FULL NAME.';
      if (!formData.age.trim()) newErrors.age = 'PLEASE ENTER YOUR AGE.';
      if (!formData.city.trim()) newErrors.city = 'PLEASE ENTER YOUR CITY.';
      if (!formData.phone.trim()) newErrors.phone = 'PLEASE ENTER YOUR PHONE NUMBER.';
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'PLEASE ENTER A VALID EMAIL ADDRESS.';
    } else if (step === 4) {
      if (formData.photoFiles.length === 0) newErrors.photos = 'PLEASE UPLOAD AT LEAST 1 CLEAR RECENT PHOTOGRAPH OR USE DEMO PHOTOS.';
    } else if (step === 5) {
      if (!formData.whyNovante.trim()) newErrors.whyNovante = 'PLEASE TELL US WHY YOU WANT TO JOIN NOVANTE.';
      if (!formData.consentAgreed) newErrors.consent = 'YOU MUST AGREE TO THE REPRESENTATION TERMS.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 5) {
        setIsReviewing(true);
      } else {
        setCurrentStep((prev) => Math.min(5, prev + 1));
      }
    }
  };

  const handlePrevStep = () => {
    if (isReviewing) {
      setIsReviewing(false);
    } else {
      setCurrentStep((prev) => Math.max(1, prev - 1));
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `NT-APP-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setIsReviewing(false);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: '#0B0B0C', color: '#FAF8F5', minHeight: '100vh', paddingTop: '7rem' }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          padding: '2rem clamp(1.5rem, 5vw, 5rem) 3.5rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 600 }}>
            01 / JOIN NOVANTE
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
            alignItems: 'end'
          }}
        >
          <div style={{ gridColumn: 'span 8' }} className="join-hero-title">
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 300,
                fontSize: 'clamp(2.75rem, 6vw, 6rem)',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: '#FAF8F5',
                margin: 0,
                textTransform: 'uppercase'
              }}
            >
              YOUR NEXT<br />
              CHAPTER <span style={{ fontStyle: 'italic', color: '#FFFFFF' }}>STARTS HERE.</span>
            </h1>
          </div>

          <div style={{ gridColumn: 'span 4' }} className="join-hero-copy">
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 300,
                fontSize: '1rem',
                color: '#C7C9CC',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              We represent people with potential, ambition and the discipline to build a career. If you believe you have something worth developing, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* PROMINENT TRANSPARENCY DISCLAIMER CARD */}
      <section
        style={{
          maxWidth: '1440px',
          margin: '0 auto 3rem auto',
          padding: '0 clamp(1.5rem, 5vw, 5rem)'
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(250, 248, 245, 0.03)',
            border: '1px solid rgba(199, 201, 204, 0.2)',
            borderLeft: '4px solid #274FFF',
            borderRadius: '2px',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.25rem'
          }}
        >
          <ShieldAlert size={22} style={{ color: '#274FFF', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span style={{ fontSize: '11px', letterSpacing: '0.22em', color: '#FAF8F5', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
              REPRESENTATION IS NOT A GUARANTEE OF WORK.
            </span>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#C7C9CC', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
              Submitting an application does not guarantee representation, jobs, castings or bookings. We focus on development, representation and genuine professional opportunities. There are no registration fees.
            </p>
          </div>
        </div>
      </section>

      {/* CONFIRMATION STATE */}
      {isSubmitted ? (
        <section
          style={{
            padding: '5rem clamp(1.5rem, 5vw, 5rem)',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              backgroundColor: '#141416',
              border: '1px solid rgba(39, 79, 255, 0.4)',
              borderRadius: '2px',
              padding: 'clamp(3rem, 6vw, 5rem)'
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(39, 79, 255, 0.15)',
                color: '#274FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem auto'
              }}
            >
              <CheckCircle2 size={28} />
            </div>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1,
                color: '#FAF8F5',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              APPLICATION RECEIVED.
            </h2>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '1.05rem',
                color: '#C7C9CC',
                lineHeight: 1.7,
                maxWidth: '560px',
                margin: '0 auto 2rem auto',
                fontWeight: 300
              }}
            >
              Thank you for trusting us with your application. Our team will review the information you've provided. If your profile aligns with an upcoming opportunity or representation requirement, we will contact you.
            </p>

            <div
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'rgba(250, 248, 245, 0.04)',
                border: '1px solid rgba(199, 201, 204, 0.2)',
                borderRadius: '2px',
                marginBottom: '1.5rem'
              }}
            >
              <span style={{ fontSize: '10px', letterSpacing: '0.22em', color: '#A0A4AB', display: 'block', marginBottom: '2px' }}>
                APPLICATION REFERENCE
              </span>
              <span style={{ fontSize: '14px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700 }}>
                {referenceId}
              </span>
            </div>

            <p style={{ fontSize: '11px', color: '#A0A4AB', letterSpacing: '0.1em', marginBottom: '2.5rem' }}>
              ✦ Your application has been recorded locally for this demo session.
            </p>

            <button
              onClick={() => onNavigate('/')}
              style={{
                padding: '1rem 2.2rem',
                backgroundColor: '#FAF8F5',
                color: '#0B0B0C',
                border: 'none',
                borderRadius: '2px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.2em',
                cursor: 'pointer'
              }}
            >
              RETURN HOME →
            </button>
          </div>
        </section>
      ) : (
        /* APPLICATION FORM OR REVIEW SCREEN */
        <section
          style={{
            backgroundColor: '#FAF8F5',
            color: '#0B0B0C',
            padding: '5rem clamp(1.5rem, 5vw, 5rem)',
            borderTop: '1px solid rgba(11, 11, 12, 0.08)'
          }}
        >
          <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: 'clamp(2rem, 5vw, 5rem)',
                alignItems: 'start'
              }}
              className="join-form-grid"
            >
              
              {/* LEFT COLUMN: TITLE & STEP INDICATOR (4 COLUMNS) */}
              <div style={{ gridColumn: 'span 4' }} className="join-form-left">
                <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
                  02 / APPLICATION
                </span>

                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.02, margin: '0 0 1.5rem 0', color: '#0B0B0C' }}>
                  BUILD YOUR<br />
                  CAREER WITH<br />
                  <span style={{ fontStyle: 'italic' }}>NOVANTE.</span>
                </h2>

                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#4A4D52', lineHeight: 1.65, fontWeight: 300, marginBottom: '2rem' }}>
                  Provide clear and honest information. Unretouched, clear recent photographs are strongly preferred.
                </p>

                {/* Progress bar */}
                <div style={{ borderTop: '1px solid rgba(11, 11, 12, 0.12)', paddingTop: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700 }}>
                      {isReviewing ? 'REVIEW APPLICATION' : `STEP ${currentStep} OF 5`}
                    </span>
                    <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#4A4D52' }}>
                      {isReviewing ? 'VERIFY DETAILS' : currentStep === 1 ? 'ABOUT YOU' : currentStep === 2 ? 'PROFILE' : currentStep === 3 ? 'EXPERIENCE' : currentStep === 4 ? 'PORTFOLIO' : 'WHY NOVANTE'}
                    </span>
                  </div>
                  <div style={{ height: '2px', backgroundColor: 'rgba(11, 11, 12, 0.1)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: isReviewing ? '100%' : `${(currentStep / 5) * 100}%`, backgroundColor: '#274FFF', transition: 'width 0.35s ease' }} />
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: APPLICATION FORM OR REVIEW DISPLAY (8 COLUMNS) */}
              <div style={{ gridColumn: 'span 8' }} className="join-form-right">
                
                <div style={{ backgroundColor: '#FFFFFF', padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: '2px', border: '1px solid rgba(11, 11, 12, 0.08)' }}>
                  
                  {isReviewing ? (
                    /* PRE-SUBMISSION REVIEW DISPLAY */
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                        REVIEW YOUR APPLICATION
                      </h3>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem', borderBottom: '1px solid rgba(11,11,12,0.1)', paddingBottom: '2rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                          <div>
                            <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block' }}>APPLICANT NAME</span>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#0B0B0C' }}>{formData.fullName} ({formData.age} yrs)</span>
                          </div>
                          <div>
                            <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block' }}>CITY & LOCATION</span>
                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#0B0B0C' }}>{formData.city}</span>
                          </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                          <div>
                            <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block' }}>EMAIL & PHONE</span>
                            <span style={{ fontSize: '13px', color: '#4A4D52' }}>{formData.email} | {formData.phone}</span>
                          </div>
                          <div>
                            <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block' }}>CATEGORY & HEIGHT</span>
                            <span style={{ fontSize: '13px', color: '#4A4D52' }}>{formData.talentCategory} • {formData.height || 'N/A'}</span>
                          </div>
                        </div>

                        <div>
                          <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block' }}>PHOTOS ATTACHED</span>
                          <span style={{ fontSize: '13px', color: '#4A4D52' }}>{formData.photoFiles.length} photo(s) attached</span>
                        </div>

                        <div>
                          <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700, display: 'block' }}>WHY NOVANTE STATEMENT</span>
                          <p style={{ fontSize: '13px', color: '#4A4D52', fontStyle: 'italic', margin: 0 }}>"{formData.whyNovante}"</p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button
                          type="button"
                          onClick={() => setIsReviewing(false)}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '10px 18px',
                            backgroundColor: 'transparent',
                            color: '#0B0B0C',
                            border: '1px solid rgba(11,11,12,0.25)',
                            borderRadius: '2px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '11px',
                            letterSpacing: '0.18em',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          <ArrowLeft size={14} />
                          <span>EDIT DETAILS</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '12px 26px',
                            backgroundColor: '#274FFF',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '2px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '11px',
                            letterSpacing: '0.2em',
                            fontWeight: 600,
                            cursor: isSubmitting ? 'wait' : 'pointer',
                            boxShadow: '0 8px 24px rgba(39, 79, 255, 0.25)'
                          }}
                        >
                          <span>{isSubmitting ? 'SUBMITTING APPLICATION...' : 'SUBMIT APPLICATION'}</span>
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* FORM STEPS 1 TO 5 */
                    <div>
                      {/* STEP 01 / ABOUT YOU */}
                      {currentStep === 1 && (
                        <div>
                          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                            01 / ABOUT YOU
                          </h3>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-two-col">
                            <div>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>FULL NAME *</label>
                              <input
                                type="text"
                                placeholder="Your full name"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: errors.fullName ? '1px solid #E53E3E' : '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              />
                              {errors.fullName && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.fullName}</span>}
                            </div>

                            <div>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>AGE *</label>
                              <input
                                type="text"
                                placeholder="e.g. 22"
                                value={formData.age}
                                onChange={(e) => handleInputChange('age', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: errors.age ? '1px solid #E53E3E' : '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              />
                              {errors.age && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.age}</span>}
                            </div>

                            <div>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>CITY & COUNTRY *</label>
                              <input
                                type="text"
                                placeholder="e.g. Bengaluru, India"
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: errors.city ? '1px solid #E53E3E' : '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              />
                              {errors.city && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.city}</span>}
                            </div>

                            <div>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>PHONE NUMBER *</label>
                              <input
                                type="tel"
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: errors.phone ? '1px solid #E53E3E' : '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              />
                              {errors.phone && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.phone}</span>}
                            </div>

                            <div>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>EMAIL ADDRESS *</label>
                              <input
                                type="email"
                                placeholder="yourname@gmail.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: errors.email ? '1px solid #E53E3E' : '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              />
                              {errors.email && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                            </div>

                            <div>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>INSTAGRAM HANDLE (OPTIONAL)</label>
                              <input
                                type="text"
                                placeholder="@yourhandle"
                                value={formData.instagram}
                                onChange={(e) => handleInputChange('instagram', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 02 / PROFILE & CATEGORY */}
                      {currentStep === 2 && (
                        <div>
                          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                            02 / PROFILE & CATEGORY
                          </h3>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-two-col">
                            <div>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>HEIGHT (CM / FEET)</label>
                              <input
                                type="text"
                                placeholder="e.g. 5'10 / 178 cm"
                                value={formData.height}
                                onChange={(e) => handleInputChange('height', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              />
                            </div>

                            <div>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>TALENT CATEGORY *</label>
                              <select
                                value={formData.talentCategory}
                                onChange={(e) => handleInputChange('talentCategory', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              >
                                {['FASHION', 'COMMERCIAL', 'ACTING', 'DIGITAL CREATOR', 'MODEL', 'MUSIC', 'DANCE', 'OTHER'].map((cat) => (
                                  <option key={cat} value={cat}>{cat}</option>
                                ))}
                              </select>
                            </div>

                            <div style={{ gridColumn: 'span 2' }}>
                              <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>GENDER PRESENTATION</label>
                              <select
                                value={formData.gender}
                                onChange={(e) => handleInputChange('gender', e.target.value)}
                                style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                              >
                                <option value="FEMALE">FEMALE</option>
                                <option value="MALE">MALE</option>
                                <option value="NON-BINARY">NON-BINARY / OTHER</option>
                                <option value="PREFER NOT TO SAY">PREFER NOT TO SAY</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* STEP 03 / EXPERIENCE & SKILLS */}
                      {currentStep === 3 && (
                        <div>
                          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                            03 / EXPERIENCE & SKILLS
                          </h3>

                          <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>EXPERIENCE LEVEL</label>
                            <select
                              value={formData.experienceLevel}
                              onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                              style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                            >
                              <option value="NEW TALENT">NEW TALENT (NO PRIOR EXPERIENCE)</option>
                              <option value="SOME EXPERIENCE">SOME EXPERIENCE (TEST SHOOTS / LOCAL WORK)</option>
                              <option value="PROFESSIONAL">PROFESSIONAL (CAMPAIGNS / RUNWAY / SCREEN)</option>
                              <option value="EXPERIENCED">EXPERIENCED (MULTI-YEAR INDUSTRY CAREER)</option>
                            </select>
                          </div>

                          <div style={{ marginBottom: '1.75rem' }}>
                            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '8px' }}>SKILLS & STRENGTHS</label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                              {availableSkills.map((sk) => {
                                const isSel = formData.skills.includes(sk);
                                return (
                                  <button
                                    type="button"
                                    key={sk}
                                    onClick={() => toggleSkill(sk)}
                                    style={{
                                      padding: '8px 14px',
                                      fontSize: '10px',
                                      letterSpacing: '0.18em',
                                      fontWeight: 600,
                                      border: isSel ? '1px solid #274FFF' : '1px solid rgba(11,11,12,0.18)',
                                      backgroundColor: isSel ? '#274FFF' : '#FAF8F5',
                                      color: isSel ? '#FFFFFF' : '#0B0B0C',
                                      borderRadius: '2px',
                                      cursor: 'pointer',
                                      transition: 'all 0.25s ease'
                                    }}
                                  >
                                    {sk}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>BACKGROUND & DETAILS (OPTIONAL)</label>
                            <textarea
                              rows={3}
                              placeholder="Tell us briefly about any previous training, shoots, acting background, or interests."
                              value={formData.background}
                              onChange={(e) => handleInputChange('background', e.target.value)}
                              style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none', resize: 'vertical' }}
                            />
                          </div>
                        </div>
                      )}

                      {/* STEP 04 / PORTFOLIO & PHOTOS */}
                      {currentStep === 4 && (
                        <div>
                          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                            04 / PORTFOLIO & PHOTOGRAPHS
                          </h3>

                          <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>PORTFOLIO WEBSITE / DRIVE LINK (OPTIONAL)</label>
                            <input
                              type="text"
                              placeholder="https://yourportfolio.com or drive link"
                              value={formData.portfolioUrl}
                              onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                              style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none' }}
                            />
                          </div>

                          <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                              <label style={{ fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C' }}>
                                UPLOAD RECENT PHOTOGRAPHS * (3-8 PHOTOS)
                              </label>
                              
                              {/* DEMO PHOTOS TOGGLE */}
                              <button
                                type="button"
                                onClick={addDemoPhotos}
                                style={{
                                  fontSize: '10px',
                                  letterSpacing: '0.15em',
                                  color: '#274FFF',
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  fontWeight: 600,
                                  cursor: 'pointer',
                                  textDecoration: 'underline'
                                }}
                              >
                                ✦ USE DEMO PHOTOS FOR PREVIEW
                              </button>
                            </div>

                            <span style={{ fontSize: '11px', color: '#4A4D52', display: 'block', marginBottom: '12px' }}>
                              Clear, unretouched natural photos (headshot, side profile, full length) are strongly preferred over heavy professional edits.
                            </span>

                            {/* Thumbnail Grid */}
                            {formData.photoFiles.length > 0 && (
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '1rem' }}>
                                {formData.photoFiles.map((pf, idx) => (
                                  <div key={idx} style={{ position: 'relative', height: '100px', borderRadius: '2px', overflow: 'hidden', border: '1px solid rgba(11,11,12,0.15)' }}>
                                    <img src={pf.previewUrl} alt={`Upload ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <button
                                      type="button"
                                      onClick={() => removePhoto(idx)}
                                      style={{ position: 'absolute', top: '4px', right: '4px', backgroundColor: 'rgba(11,11,12,0.8)', color: '#FFFFFF', border: 'none', borderRadius: '50%', width: '22px', height: '22px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                      <X size={12} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}

                            <label
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1.75rem',
                                backgroundColor: '#FAF8F5',
                                border: errors.photos ? '1px dashed #E53E3E' : '1px dashed rgba(11, 11, 12, 0.2)',
                                borderRadius: '2px',
                                cursor: 'pointer'
                              }}
                            >
                              <Camera size={22} style={{ color: '#274FFF', marginBottom: '8px' }} />
                              <span style={{ fontSize: '11px', letterSpacing: '0.15em', fontWeight: 600, color: '#0B0B0C' }}>
                                SELECT OR DROP PHOTOS HERE
                              </span>
                              <span style={{ fontSize: '9px', color: '#A0A4AB', marginTop: '4px' }}>PNG, JPG, WEBP (MAX 8 FILES)</span>
                              <input type="file" multiple onChange={handlePhotosChange} accept="image/*" style={{ display: 'none' }} />
                            </label>
                            {errors.photos && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.photos}</span>}
                          </div>
                        </div>
                      )}

                      {/* STEP 05 / WHY NOVANTE & CONSENT */}
                      {currentStep === 5 && (
                        <div>
                          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                            05 / WHY NOVANTE & CONSENT
                          </h3>

                          <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>WHY DO YOU WANT TO BE REPRESENTED BY NOVANTE? *</label>
                            <textarea
                              rows={4}
                              placeholder="Tell us about your goals, ambitions, and what career you hope to build with Novante Talent."
                              value={formData.whyNovante}
                              onChange={(e) => handleInputChange('whyNovante', e.target.value)}
                              style={{ width: '100%', padding: '12px 14px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '13px', backgroundColor: '#FAF8F5', border: errors.whyNovante ? '1px solid #E53E3E' : '1px solid rgba(11,11,12,0.18)', borderRadius: '2px', outline: 'none', resize: 'vertical' }}
                            />
                            {errors.whyNovante && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.whyNovante}</span>}
                          </div>

                          {/* Consent Checkbox */}
                          <div style={{ padding: '1rem', backgroundColor: '#FAF8F5', border: errors.consent ? '1px solid #E53E3E' : '1px solid rgba(11,11,12,0.12)', borderRadius: '2px' }}>
                            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                              <input
                                type="checkbox"
                                checked={formData.consentAgreed}
                                onChange={(e) => handleInputChange('consentAgreed', e.target.checked)}
                                style={{ marginTop: '3px', accentColor: '#274FFF' }}
                              />
                              <span style={{ fontSize: '11px', color: '#0B0B0C', lineHeight: 1.5 }}>
                                I confirm that the information and photographs provided are accurate and I agree to Novante Talent using this information to review my application for representation.
                              </span>
                            </label>
                            {errors.consent && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '6px', display: 'block' }}>{errors.consent}</span>}
                          </div>
                        </div>
                      )}

                      {/* STEP NAVIGATION BUTTONS */}
                      <div
                        style={{
                          borderTop: '1px solid rgba(11, 11, 12, 0.1)',
                          paddingTop: '1.75rem',
                          marginTop: '2rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        {currentStep > 1 ? (
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '10px 18px',
                              backgroundColor: 'transparent',
                              color: '#0B0B0C',
                              border: '1px solid rgba(11, 11, 12, 0.25)',
                              borderRadius: '2px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '11px',
                              letterSpacing: '0.18em',
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}
                          >
                            <ArrowLeft size={14} />
                            <span>BACK</span>
                          </button>
                        ) : <div />}

                        <button
                          type="button"
                          onClick={handleNextStep}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 24px',
                            backgroundColor: currentStep === 5 ? '#274FFF' : '#0B0B0C',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '2px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '11px',
                            letterSpacing: '0.18em',
                            fontWeight: 600,
                            cursor: 'pointer',
                            boxShadow: currentStep === 5 ? '0 8px 24px rgba(39, 79, 255, 0.25)' : 'none'
                          }}
                        >
                          <span>{currentStep === 5 ? 'REVIEW APPLICATION' : 'CONTINUE'}</span>
                          <ArrowRight size={14} style={{ color: currentStep === 5 ? '#FFFFFF' : '#274FFF' }} />
                        </button>
                      </div>

                    </div>
                  )}

                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .join-hero-title { grid-column: span 12 !important; }
          .join-hero-copy { grid-column: span 12 !important; }
          .join-form-grid { grid-template-columns: 1fr !important; }
          .join-form-left { grid-column: span 12 !important; }
          .join-form-right { grid-column: span 12 !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
