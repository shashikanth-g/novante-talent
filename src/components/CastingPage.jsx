import React, { useState, useEffect } from 'react';
import { talentData } from '../data/talentData';
import { ArrowRight, ArrowLeft, Upload, CheckCircle2, X, AlertCircle } from 'lucide-react';

/**
 * Casting Desk Component (/casting)
 * Multi-step casting brief submission for brands, production houses, & agencies.
 */
export default function CastingPage({ initialTalentId = null, onNavigate }) {
  const [selectedTalentId, setSelectedTalentId] = useState(initialTalentId);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: '',
    projectName: '',
    projectType: 'FASHION',
    projectDesc: '',
    talentCategory: 'FASHION',
    talentCount: '1',
    shootDate: '',
    location: '',
    budget: 'NOT YET DECIDED',
    usage: '',
    notes: '',
    attachedFile: null
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialTalentId) {
      setSelectedTalentId(initialTalentId);
    }
  }, [initialTalentId]);

  const preselectedTalent = talentData.find((t) => t.id === selectedTalentId);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: 'File size exceeds 15MB limit.' }));
        return;
      }
      setFormData((prev) => ({ ...prev, attachedFile: file }));
      setErrors((prev) => ({ ...prev, file: null }));
    }
  };

  // Step Validation
  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'PLEASE ENTER YOUR NAME.';
      if (!formData.company.trim()) newErrors.company = 'PLEASE ENTER YOUR COMPANY NAME.';
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'PLEASE ENTER A VALID EMAIL ADDRESS.';
    } else if (step === 2) {
      if (!formData.projectName.trim()) newErrors.projectName = 'PLEASE ENTER PROJECT NAME.';
      if (!formData.projectDesc.trim()) newErrors.projectDesc = 'PLEASE DESCRIBE YOUR PROJECT BRIEF.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(4, prev + 1));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 4) {
      handleNextStep();
      return;
    }
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const ref = `NT-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div style={{ backgroundColor: '#0B0B0C', color: '#FAF8F5', minHeight: '100vh', paddingTop: '7rem' }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          padding: '2rem clamp(1.5rem, 5vw, 5rem) 4rem clamp(1.5rem, 5vw, 5rem)',
          maxWidth: '1440px',
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
          <span style={{ width: '6px', height: '6px', backgroundColor: '#274FFF', borderRadius: '50%' }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 600 }}>
            01 / PRIVATE CASTING DESK
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
          <div style={{ gridColumn: 'span 8' }} className="casting-hero-title">
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
              THE RIGHT TALENT<br />
              <span style={{ fontStyle: 'italic', color: '#FFFFFF' }}>CHANGES THE CAMPAIGN.</span>
            </h1>
          </div>

          <div style={{ gridColumn: 'span 4' }} className="casting-hero-copy">
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
              Tell us what you're creating. From fashion and advertising to film and digital media, share the brief and we'll help identify the right talent.
            </p>
          </div>
        </div>
      </section>

      {/* CONFIRMATION STATE */}
      {isSubmitted ? (
        <section
          style={{
            padding: '6rem clamp(1.5rem, 5vw, 5rem)',
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
              BRIEF RECEIVED.
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
              Thank you for sharing your project. Our team will review the brief and get back to you if there is a relevant opportunity to discuss.
            </p>

            {/* Reference Badge */}
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
                CASTING ENQUIRY REFERENCE
              </span>
              <span style={{ fontSize: '14px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700 }}>
                {referenceId}
              </span>
            </div>

            {/* Transparency Note */}
            <p style={{ fontSize: '11px', color: '#A0A4AB', letterSpacing: '0.1em', marginBottom: '2.5rem' }}>
              ✦ Your enquiry has been recorded locally for this demo session.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('/')}
                style={{
                  padding: '1rem 2rem',
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

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    name: '', company: '', email: '', phone: '', role: '',
                    projectName: '', projectType: 'FASHION', projectDesc: '',
                    talentCategory: 'FASHION', talentCount: '1', shootDate: '', location: '', budget: 'NOT YET DECIDED', usage: '', notes: '', attachedFile: null
                  });
                }}
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'transparent',
                  color: '#FAF8F5',
                  border: '1px solid rgba(199, 201, 204, 0.3)',
                  borderRadius: '2px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  cursor: 'pointer'
                }}
              >
                SUBMIT ANOTHER BRIEF
              </button>
            </div>

          </div>
        </section>
      ) : (
        /* FORM SECTION */
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
              className="casting-form-grid"
            >
              
              {/* LEFT COLUMN: TITLE & PRESELECTED TALENT BADGE (4 COLUMNS) */}
              <div style={{ gridColumn: 'span 4' }} className="casting-form-left">
                <span style={{ fontSize: '11px', letterSpacing: '0.28em', color: '#274FFF', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>
                  02 / PROJECT BRIEF
                </span>

                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 300, lineHeight: 1.02, margin: '0 0 1.5rem 0', color: '#0B0B0C' }}>
                  TELL US<br />
                  WHAT YOU'RE<br />
                  <span style={{ fontStyle: 'italic' }}>BUILDING.</span>
                </h2>

                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#4A4D52', lineHeight: 1.65, fontWeight: 300, marginBottom: '2rem' }}>
                  Complete the brief details below. Our casting desk will review your requirements and respond promptly.
                </p>

                {/* Pre-selected Talent Badge */}
                {preselectedTalent && (
                  <div
                    style={{
                      padding: '1.25rem',
                      backgroundColor: '#0B0B0C',
                      color: '#FAF8F5',
                      borderRadius: '2px',
                      borderLeft: '3px solid #274FFF',
                      marginBottom: '2rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <span style={{ fontSize: '9px', letterSpacing: '0.24em', color: '#274FFF', fontWeight: 700 }}>
                        TALENT OF INTEREST
                      </span>
                      <button
                        onClick={() => setSelectedTalentId(null)}
                        aria-label="Remove talent preselection"
                        style={{ background: 'none', border: 'none', color: '#A0A4AB', cursor: 'pointer', padding: 0 }}
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 400, display: 'block' }}>
                      {preselectedTalent.name}
                    </span>
                    <span style={{ fontSize: '10px', color: '#C7C9CC', letterSpacing: '0.15em' }}>
                      {preselectedTalent.primaryCategory} • {preselectedTalent.location}
                    </span>
                  </div>
                )}

                {/* Step Progress Line */}
                <div style={{ borderTop: '1px solid rgba(11, 11, 12, 0.12)', paddingTop: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#274FFF', fontWeight: 700 }}>
                      STEP {currentStep} OF 4
                    </span>
                    <span style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#4A4D52' }}>
                      {currentStep === 1 ? 'ABOUT YOU' : currentStep === 2 ? 'THE PROJECT' : currentStep === 3 ? 'REQUIREMENTS' : 'FINAL DETAILS'}
                    </span>
                  </div>
                  <div style={{ height: '2px', backgroundColor: 'rgba(11, 11, 12, 0.1)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: `${(currentStep / 4) * 100}%`, backgroundColor: '#274FFF', transition: 'width 0.35s ease' }} />
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: MULTI-STEP FORM (8 COLUMNS) */}
              <div style={{ gridColumn: 'span 8' }} className="casting-form-right">
                
                <form onSubmit={handleSubmit} style={{ backgroundColor: '#FFFFFF', padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: '2px', border: '1px solid rgba(11, 11, 12, 0.08)' }}>
                  
                  {/* STEP 01 / ABOUT YOU */}
                  {currentStep === 1 && (
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                        01 / ABOUT YOU
                      </h3>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-two-col">
                        <div>
                          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                            FULL NAME *
                          </label>
                          <input
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '13px',
                              backgroundColor: '#FAF8F5',
                              border: errors.name ? '1px solid #E53E3E' : '1px solid rgba(11, 11, 12, 0.18)',
                              borderRadius: '2px',
                              outline: 'none'
                            }}
                          />
                          {errors.name && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                            COMPANY / AGENCY *
                          </label>
                          <input
                            type="text"
                            placeholder="Company or agency name"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '13px',
                              backgroundColor: '#FAF8F5',
                              border: errors.company ? '1px solid #E53E3E' : '1px solid rgba(11, 11, 12, 0.18)',
                              borderRadius: '2px',
                              outline: 'none'
                            }}
                          />
                          {errors.company && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.company}</span>}
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                            WORK EMAIL *
                          </label>
                          <input
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '13px',
                              backgroundColor: '#FAF8F5',
                              border: errors.email ? '1px solid #E53E3E' : '1px solid rgba(11, 11, 12, 0.18)',
                              borderRadius: '2px',
                              outline: 'none'
                            }}
                          />
                          {errors.email && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                            PHONE NUMBER
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '13px',
                              backgroundColor: '#FAF8F5',
                              border: '1px solid rgba(11, 11, 12, 0.18)',
                              borderRadius: '2px',
                              outline: 'none'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 02 / THE PROJECT */}
                  {currentStep === 2 && (
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                        02 / THE PROJECT
                      </h3>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                          PROJECT / CAMPAIGN NAME *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Autumn / Winter Fashion Campaign"
                          value={formData.projectName}
                          onChange={(e) => handleInputChange('projectName', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '13px',
                            backgroundColor: '#FAF8F5',
                            border: errors.projectName ? '1px solid #E53E3E' : '1px solid rgba(11, 11, 12, 0.18)',
                            borderRadius: '2px',
                            outline: 'none'
                          }}
                        />
                        {errors.projectName && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.projectName}</span>}
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                          PROJECT TYPE *
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => handleInputChange('projectType', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '13px',
                            backgroundColor: '#FAF8F5',
                            border: '1px solid rgba(11, 11, 12, 0.18)',
                            borderRadius: '2px',
                            outline: 'none'
                          }}
                        >
                          {['FASHION', 'ADVERTISING', 'COMMERCIAL', 'EDITORIAL', 'FILM', 'OTT', 'DIGITAL', 'OTHER'].map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                          PROJECT DESCRIPTION & CREATIVE DIRECTION *
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us briefly about the project, creative direction, mood, and what talent profile you are looking for."
                          value={formData.projectDesc}
                          onChange={(e) => handleInputChange('projectDesc', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '13px',
                            backgroundColor: '#FAF8F5',
                            border: errors.projectDesc ? '1px solid #E53E3E' : '1px solid rgba(11, 11, 12, 0.18)',
                            borderRadius: '2px',
                            outline: 'none',
                            resize: 'vertical'
                          }}
                        />
                        {errors.projectDesc && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.projectDesc}</span>}
                      </div>
                    </div>
                  )}

                  {/* STEP 03 / TALENT REQUIREMENTS */}
                  {currentStep === 3 && (
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                        03 / TALENT REQUIREMENTS
                      </h3>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-two-col">
                        <div>
                          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                            TALENT CATEGORY
                          </label>
                          <select
                            value={formData.talentCategory}
                            onChange={(e) => handleInputChange('talentCategory', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '13px',
                              backgroundColor: '#FAF8F5',
                              border: '1px solid rgba(11, 11, 12, 0.18)',
                              borderRadius: '2px',
                              outline: 'none'
                            }}
                          >
                            {['FEMALE', 'MALE', 'COMMERCIAL', 'FASHION', 'ACTORS', 'DIGITAL CREATORS', 'OTHER'].map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                            ESTIMATED SHOOT DATE
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. October 2026"
                            value={formData.shootDate}
                            onChange={(e) => handleInputChange('shootDate', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '13px',
                              backgroundColor: '#FAF8F5',
                              border: '1px solid rgba(11, 11, 12, 0.18)',
                              borderRadius: '2px',
                              outline: 'none'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                            SHOOT LOCATION
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Mumbai Studio"
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '13px',
                              backgroundColor: '#FAF8F5',
                              border: '1px solid rgba(11, 11, 12, 0.18)',
                              borderRadius: '2px',
                              outline: 'none'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                            BUDGET RANGE
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => handleInputChange('budget', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '12px 14px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontSize: '13px',
                              backgroundColor: '#FAF8F5',
                              border: '1px solid rgba(11, 11, 12, 0.18)',
                              borderRadius: '2px',
                              outline: 'none'
                            }}
                          >
                            {['NOT YET DECIDED', 'UNDER ₹50K', '₹50K–₹1L', '₹1L–₹3L', '₹3L+', 'PREFER TO DISCUSS'].map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 04 / FINAL DETAILS & FILE ATTACHMENT */}
                  {currentStep === 4 && (
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.85rem', fontWeight: 300, marginBottom: '1.5rem', color: '#0B0B0C' }}>
                        04 / FINAL DETAILS & ATTACHMENTS
                      </h3>

                      <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                          USAGE & DISTRIBUTION RIGHTS
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Where and how will the content be used? (e.g. Digital, Social, Print, 1 Year India)"
                          value={formData.usage}
                          onChange={(e) => handleInputChange('usage', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: '13px',
                            backgroundColor: '#FAF8F5',
                            border: '1px solid rgba(11, 11, 12, 0.18)',
                            borderRadius: '2px',
                            outline: 'none',
                            resize: 'vertical'
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '1.75rem' }}>
                        <label style={{ display: 'block', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 700, color: '#0B0B0C', marginBottom: '6px' }}>
                          UPLOAD BRIEF / MOODBOARD (OPTIONAL)
                        </label>

                        {formData.attachedFile ? (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', backgroundColor: '#FAF8F5', border: '1px solid #274FFF', borderRadius: '2px' }}>
                            <span style={{ fontSize: '12px', color: '#0B0B0C', fontWeight: 600 }}>{formData.attachedFile.name}</span>
                            <button
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, attachedFile: null }))}
                              style={{ background: 'none', border: 'none', color: '#E53E3E', cursor: 'pointer' }}
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <label
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '1.75rem',
                              backgroundColor: '#FAF8F5',
                              border: '1px dashed rgba(11, 11, 12, 0.2)',
                              borderRadius: '2px',
                              cursor: 'pointer'
                            }}
                          >
                            <Upload size={20} style={{ color: '#274FFF', marginBottom: '8px' }} />
                            <span style={{ fontSize: '11px', letterSpacing: '0.15em', fontWeight: 600, color: '#0B0B0C' }}>
                              CLICK TO UPLOAD BRIEF (PDF, DOC, PPT, IMAGES)
                            </span>
                            <span style={{ fontSize: '9px', color: '#A0A4AB', marginTop: '4px' }}>MAX FILE SIZE: 15MB</span>
                            <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx,.ppt,.pptx,image/*" style={{ display: 'none' }} />
                          </label>
                        )}
                        {errors.file && <span style={{ fontSize: '10px', color: '#E53E3E', marginTop: '4px', display: 'block' }}>{errors.file}</span>}
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

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 22px',
                          backgroundColor: '#0B0B0C',
                          color: '#FAF8F5',
                          border: 'none',
                          borderRadius: '2px',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: '11px',
                          letterSpacing: '0.18em',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        <span>CONTINUE</span>
                        <ArrowRight size={14} style={{ color: '#274FFF' }} />
                      </button>
                    ) : (
                      <button
                        type="submit"
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
                        <span>{isSubmitting ? 'SUBMITTING BRIEF...' : 'SUBMIT ENQUIRY'}</span>
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>

                </form>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* BOTTOM SUPPORTING STRIP */}
      <section
        style={{
          borderTop: '1px solid rgba(199, 201, 204, 0.15)',
          padding: '4rem clamp(1.5rem, 5vw, 5rem)',
          backgroundColor: '#141416'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#FAF8F5', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
              LOOKING FOR SOMETHING SPECIFIC?
            </h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.95rem', color: '#C7C9CC', margin: 0, fontWeight: 300 }}>
              Browse our curated roster of talent across fashion, runway, commercial, and acting representation.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/talent')}
            style={{
              padding: '1rem 2rem',
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
            EXPLORE TALENT DIRECTORY →
          </button>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .casting-hero-title { grid-column: span 12 !important; }
          .casting-hero-copy { grid-column: span 12 !important; }
          .casting-form-grid { grid-template-columns: 1fr !important; }
          .casting-form-left { grid-column: span 12 !important; }
          .casting-form-right { grid-column: span 12 !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
