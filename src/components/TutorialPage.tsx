import React, { useState, useEffect } from 'react';
import {
  UserPlus,
  Settings,
  Shield,
  CreditCard,
  Play,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  MapPin,
  MapPinned,
  Navigation,
  Users,
  FileText,
  CheckCircle2,
  UserCircle,
  Route,
  Activity,
} from 'lucide-react';
import { motion } from 'motion/react';


import geotrack from "../assets/geotrack.png";

import app_launch from "./assets1/app_launch.png";
import login from "./assets1/login.png";
import access from "./assets1/access.png";
import allow from "./assets1/allow.png";
import map_screen from "./assets1/map_screen.png";
import start_meeting from "./assets1/start_meeting.png"; 
import meeting_notes from "./assets1/meeting_notes.png";
import end_meeting from "./assets1/end_meeting.png";
import client_details from "./assets1/client_details.png";
import focus_marker from "./assets1/focus_marker.png";
import client_screen from "./assets1/client_screen.png";
import add_client from "./assets1/add_client.png";
import activity from "./assets1/activity.png";
import profile_screen from "./assets1/profile_screen.png";
import sign_out from "./assets1/sign_out.png";
import trip_details from "./assets1/trip_details.png";
import single_leg_1 from "./assets1/single_leg_1.png";
import single_leg_2 from "./assets1/single_leg_2.png";
import single_leg_3 from "./assets1/single_leg_3.png";
import multi_leg_trip_1 from "./assets1/multi_leg_trip_1.png";
import multi_leg_trip_2 from "./assets1/multi_leg_trip_2.png";
import multi_leg_trip_3 from "./assets1/multi_leg_trip_3.png";
import meeting_details from "./assets1/meeting_details.png";


import { TutorialVideo } from './TutorialVideo';
import { Footer} from './Footer';

const tutorialSections = [
  {
    sectionId: 1,
    sectionTitle: '🎯 Sign-In & Account Creation',
    sectionDescription: 'Get started by creating your account and setting up your profile',
    steps: [
      {
        number: 1,
        title: 'Launch the Application',
        description: 'Open the GeoTrack app on your mobile device.',
        icon: UserPlus,
        iconColor: 'rgb(59, 130, 246)',
        image: app_launch,
      },
      {
        number: 2,
        title: 'Sign In / Sign Up',
        description: 'Enter the domain email ID provided by the admin (Example: username@companydomain.com) and password. Tap Sign In.',
        details: [
          'Enter admin-provided domain email',
          'Enter password',
          'For new users, select Create Account',
          'Sign-up allowed only with admin-approved domain email',
        ],
        warning: {
          title: 'Email & Domain Validation Rules',
          points: [
            'Generic email services (Gmail, Yahoo, Outlook) are detected as Trial Accounts',
            'Trial users can only view the app - core features disabled',
            'Admin-approved domain email is mandatory',
            'Full app access enabled only after domain validation',
          ],
        },
        icon: Shield,
        iconColor: 'rgb(29, 78, 216)',
        image: login,
        
      },
      {
        number: 3,
        title: 'Background Location Access',
        description: 'After successful sign-in, the app will request background location permission.',
        details: [
          'Show nearby clients',
          'Track visit history',
          'Verify your working area automatically',
        ],
        icon: MapPin,
        iconColor: 'rgb(6, 182, 212)',
        image: access,
      },
    ],
  },
  {
    sectionId: 2,
    sectionTitle: '🔑 Permission Setup',
    sectionDescription: 'Allow necessary permissions for seamless app functionality',
    steps: [
      {
        number: 5,
        title: 'Allow Required Services',
        description: 'To ensure smooth functioning, allow the following permissions:',
        details: [
          'Location (Always Allow)',
          'Camera (for document & card scanning)',
          'Gallery (file attachments)',
          'Notifications (meeting & trip alerts)',
          'Storage (receipts & notes)',
        ],
        warning: {
          title: 'Important',
          points: ['Without these permissions, some features may not work correctly.'],
        },
        icon: Settings,
        iconColor: 'rgb(34, 197, 94)',
        image: allow,
      },
    ],
  },
  {
    sectionId: 3,
    sectionTitle: '🗺️ Map Screen & Client Tracking',
    sectionDescription: 'View your location and track nearby clients on the map',
    steps: [
      {
        number: 6,
        title: 'View Your Location & Nearby Clients',
        description: 'The map displays your current location. Nearby clients are shown using colored markers.',
        details: [
          'Red – Client not visited',
          'Green – Client visited',
        ],
        icon: MapPinned,
        iconColor: 'rgb(249, 115, 22)',
        image: map_screen,
      },
      {
        number: 7,
        title: 'Click on Client Marker',
        description: 'On tapping a client marker, you can view client details and start a meeting with the client.',
        icon: Navigation,
        iconColor: 'rgb(239, 68, 68)',
        image: start_meeting,
      },
    ],
  },
  {
    sectionId: 4,
    sectionTitle: '💼 Meeting Management',
    sectionDescription: 'Start, manage, and complete client meetings efficiently',
    steps: [
      {
        number: 8,
        title: 'Start Meeting',
        description: 'When Start Meeting is selected, view client location, phone number, meeting start time & duration.',
        details: [
          'Active – Client discussion in progress',
          'Completed – Client interested / deal done',
          'Inactive – Client not interested',
        ],
        icon: Users,
        iconColor: 'rgb(168, 85, 247)',
        image: meeting_details,
      },
      {
        number: 9,
        title: 'During the Meeting',
        description: 'Add meeting notes, attach documents, images, or files, and update meeting outcomes in real time.',
        icon: FileText,
        iconColor: 'rgb(79, 70, 229)',
        image: meeting_notes,
      },
      {
        number: 10,
        title: 'End Meeting',
        description: 'Tap End Meeting. Client status automatically updates from Active → Inactive/Completed. Notes and attachments are securely saved.',
        icon: CheckCircle2,
        iconColor: 'rgb(34, 197, 94)',
        image: end_meeting,
      },
    ],
  },
  {
    sectionId: 5,
    sectionTitle: '👤 Client Detail View',
    sectionDescription: 'Access complete client information and history',
    steps: [
      {
        number: 11,
        title: 'View Client Details',
        description: 'From the client screen or map, view client status, last visited date & history, contact information (Email, Address, Coordinates), meeting notes & attachments, and client location highlighted on the map.',
        icon: UserCircle,
        iconColor: 'rgb(59, 130, 246)',
        image: client_details,
      },
    ],
  },
  {
    sectionId: 6,
    sectionTitle: '🚗 Trip & Expense Management',
    sectionDescription: 'Track your trips and manage expenses efficiently',
    steps: [
      {
        number: 12,
        title: 'Choose Trip Type',
        description: 'Select between Single Trip (one-way journey, single transport mode) or Multi-Leg Trip (multiple journeys, different transport modes in one trip).',
        icon: Route,
        iconColor: 'rgb(34, 197, 94)',
        image: trip_details
      },
     {
        number: 13,
        title: 'Single Trip Entry',
        description: 'Fill in start location, end location, date & time, distance, transport mode (Bus/Train/Bike/Rickshaw), expense details, and upload receipts.',
        details: [
          'Start & end location',
          'Date & time',
          'Distance',
          'Transport mode',
          'Amount spent',
          'Upload receipts',
        ],
        icon: MapPin,
        iconColor: 'rgb(13, 148, 136)',
        multiImages: true,
        images: [single_leg_1, single_leg_2, single_leg_3],
      },
      {
        number: 14,
        title: 'Multi-Leg Trip Entry',
        description: 'Enter trip name, multiple journey legs with start/end location, distance, transport mode, amount spent, notes, and attach receipts. View total legs, distance, and expense amount.',
        icon: CreditCard,
        iconColor: 'rgb(249, 115, 22)',
        multiImages: true,
        images: [multi_leg_trip_1, multi_leg_trip_2, multi_leg_trip_3],
      },
    ],
  },
  {
    sectionId: 7, 
    sectionTitle: '📍 Client Marker Status on Map',
    sectionDescription: 'Client markers on map indicate visit status and priority.',
    steps: [
      {
        number: 15,
        title: 'Client Marker Status on Map',
        description: 'Client markers on map indicate visit status and priority.',
        details: [
          'Red – Never visited (shows client count)',
          'Green – Recently visited (shows visit count)',
          'Yellow – Follow-up required soon',
          'Orange – Overdue visit',
        ],
        icon: MapPin,
        iconColor: 'rgb(239, 68, 68)',
        image: focus_marker,
      },
    ],
  },
  {
    sectionId: 8,
    sectionTitle: '👥 Client Screen',
    sectionDescription: 'Manage and organize all your clients in one place',
    steps: [
      {
        number: 16,
        title: 'View All Clients',
        description: 'Clients are categorized as All, Active, Inactive, and Completed. Search by name, sort by distance, and filter by status.',
        details: [
          'Search by client name',
          'Sort by nearest distance',
          'Filter by client status',
          'View client name, email, phone, distance',
        ],
        icon: Users,
        iconColor: 'rgb(168, 85, 247)',
        image: client_screen,
      },
      {
        number: 17,
        title: 'Add New Client',
        description: 'Tap Add Client and choose Quick Fill (scan business card to auto-populate) or Manual Entry (client name, phone, email, address, pincode, notes).',
        icon: UserPlus,
        iconColor: 'rgb(79, 70, 229)',
        image: add_client,
      },
    ],
  },
  {
    sectionId: 9,
    sectionTitle: '📈 Activity Screen',
    sectionDescription: 'Track all your activities and movements',
    steps: [
      {
        number: 18,
        title: 'View Activity Logs',
        description: 'Displays total number of activities, date & time, latitude & longitude, location coordinates, and distance traveled.',
        icon: Activity,
        iconColor: 'rgb(59, 130, 246)',
        image: activity,
      },
    ],
  },
  {
    sectionId: 10,
    sectionTitle: '⚙️ Profile & Settings',
    sectionDescription: 'Manage your account preferences and information',
    steps: [
      {
        number: 19,
        title: 'Profile Information',
        description: 'View & edit profile name, User/Employee ID, and view total expenses incurred.',
        icon: UserCircle,
        iconColor: 'rgb(34, 197, 94)',
        image: profile_screen,
      },
      {
        number: 20,
        title: 'Account Settings',
        description: 'Enable/disable background location tracking, view registered email and member since date. Tap Sign Out to exit the app securely.',
        icon: Settings,
        iconColor: 'rgb(13, 148, 136)',
        image: sign_out,
      },
    ],
  },
];
export default function TutorialPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => {
        const updated = { ...prev };
        tutorialSections.forEach((section) => {
          section.steps.forEach((step) => {
            if (step.multiImages && step.images) {
              const currentIndex = updated[step.number] ?? 0;
              updated[step.number] = (currentIndex + 1) % step.images.length;
            }
          });
        });
        return updated;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'white', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, white, rgb(236, 254, 255), white)', opacity: 0.8 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section with Left-Right Layout */}
        <section style={{ padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1.2fr 1fr', 
              gap: '6rem', 
              alignItems: 'center' 
            }}>
              {/* LEFT: Text Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <img src={geotrack} alt="GeoTrack Logo" style={{ width: '7.5rem', height: '7.5rem', objectFit: 'contain' }} />
                </div>
                
                <h1 style={{ fontSize: '3.25rem', fontWeight: 800,marginBottom: '1.5rem',lineHeight: '1.1',letterSpacing: '-0.02em' }}>
                  <span style={{ color: 'rgb(6, 182, 212)',fontWeight: 900 }}>Explore GeoTrack</span>{' '}
                  <span style={{ color: 'rgb(30, 41, 59)' }}>with Detailed Step-by-Step Tutorials</span>
                </h1>
                
                <p style={{ fontSize: '1.25rem',color: 'rgb(75, 85, 99)',marginBottom: '2rem',lineHeight: '1.7',maxWidth: '42rem' }}>
                  Learn how to streamline operations, boost productivity, and scale faster with comprehensive tutorials covering setup, configuration, and advanced features.
                </p>

                {/* Feature List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Quick start guides for instant setup',
                    'Advanced feature walkthroughs',
                    'How it works steps for smooth onboarding',
                  ].map((feature) => (
                    <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: 'rgb(6, 182, 212)', flexShrink: 0 }} />
                      <span style={{ fontSize: '1.1rem', color: 'rgb(55, 65, 81)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Video Card */}
<motion.div
  style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }}
  animate={{ y: [0, -14, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <div
    style={{
      background: 'white',
      borderRadius: '1.75rem',
      boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
      border: '1px solid rgb(243, 244, 246)',
      width: '100%',
      maxWidth: '640px', // 🔥 INCREASED SIZE
    }}
  >
    {/* VIDEO PREVIEW */}
    <div
      style={{
        position: 'relative',
        height: '300px', // 🔥 TALLER VIDEO AREA
        background:
          'linear-gradient(to bottom right, rgb(219, 234, 254), rgb(207, 250, 254))',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              width: '5.5rem',
              height: '5.5rem',
              background: 'rgb(6, 182, 212)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              border: 'none',
              cursor: 'pointer',
              margin: '0 auto 1.75rem',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgb(8, 145, 178)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgb(6, 182, 212)')
            }
          >
            <Play
              style={{
                width: '2.75rem',
                height: '2.75rem',
                color: 'white',
                marginLeft: '0.25rem',
              }}
              fill="white"
            />
          </button>

          <p
            style={{
              marginTop: '1.25rem',
              color: 'rgb(55, 65, 81)',
              fontWeight: 600,
              fontSize: '1.15rem',
            }}
          >
            Getting Started with Geotrack
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'rgb(107, 114, 128)',
              marginTop: '0.25rem',
            }}
          >
            Duration: 5:32
          </p>
        </div>
      </div>
    </div>

    {/* VIDEO INFO */}
    <div style={{ padding: '2.25rem' }}>
      <h3
        style={{
          fontSize: '1.5rem',
          color: 'rgb(30, 41, 59)',
          marginBottom: '0.75rem',
          fontWeight: 700,
        }}
      >
        Welcome to GeoTrack Tutorial
      </h3>

      <p
        style={{
          color: 'rgb(75, 85, 99)',
          marginBottom: '1.75rem',
          lineHeight: '1.65',
        }}
      >
        Learn how to set up your account, configure tracking parameters, and
        start monitoring your assets in just a few minutes.
      </p>

      <button
        style={{
          width: '100%',
          padding: '0.85rem 1rem',
          background: 'rgb(30, 41, 59)',
          color: 'white',
          borderRadius: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          boxShadow: '0 12px 18px -6px rgba(0, 0, 0, 0.15)',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 600,
          transition: 'all 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgb(15, 23, 42)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgb(30, 41, 59)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Watch Full Tutorial Series
        <ExternalLink style={{ width: '1.25rem', height: '1.25rem' }} />
      </button>
    </div>
  </div>
</motion.div>
 </div>
          </div>
        </section>
        {/* Tutorial Section Header */}
<section
  style={{
    padding: '3rem 1rem 2.5rem',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), #f8fafc)',
  }}
>
  <div
    style={{
      maxWidth: '1100px',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
    <h2
      style={{
        fontSize: '2.4rem',
        fontWeight: 800,
        color: '#0f172a',
        marginBottom: '0.75rem',
      }}
    >
      Complete Step-by-Step Tutorial
    </h2>

    <p
      style={{
        fontSize: '1rem',
        color: '#475569',
        maxWidth: '720px',
        margin: '0 auto',
        lineHeight: 1.6,
      }}
    >
      Master GeoTrack with our comprehensive guide covering every feature
      from sign-up to advanced functionality
    </p>
  </div>
</section>
<section style={{ padding: '3rem 1rem' }}>
  <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
    {tutorialSections.map((section) => (
      <div key={section.sectionId} style={{ marginBottom: '4rem' }}>
        <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#1e293b' }}>
          {section.sectionTitle}
        </h3>
        <p style={{ color: '#475569', marginBottom: '2.5rem' }}>
          {section.sectionDescription}
        </p>

        <div
  style={{
    display: 'flex',
    columnGap: '28rem',
    rowGap: '4rem',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingTop: '2rem',
  }}
>
  {section.steps.map((step) => {
    const Icon = step.icon;
    const isHovered = hoveredCard === step.number;

    const images = step.multiImages ? step.images : [step.image];
    const isSingleImage = !step.multiImages;

    return (
      <div
        key={step.number}
        onMouseEnter={() => setHoveredCard(step.number)}
        onMouseLeave={() => setHoveredCard(null)}
        style={{
          position: 'relative',
          width: '320px',
          perspective: '1200px',
          margin: '0 auto',
        }}
      >
        {/* 📱 3D MOBILE MOCKUP */}
        <motion.div
          animate={{
            rotateY: isHovered ? -8 : 0,
            rotateX: isHovered ? 4 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 12 }}
          style={{
            borderRadius: '3rem',
            overflow: 'hidden',
            boxShadow: isHovered
              ? '0 40px 80px rgba(0,0,0,0.55)'
              : '0 25px 50px rgba(0,0,0,0.35)',
            background: '#000',
            border: '8px solid #000',
          }}
        >
          <motion.img
            key={activeImageIndex[step.number] ?? 0}
            src={images[activeImageIndex[step.number] ?? 0]}
            alt={step.title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              width: '100%',
              height: '520px',
              objectFit: 'cover',
              background: 'transparent',
              display: 'block',
            }}
          />
        {/* Carousel Navigation Dots */}
          {step.multiImages && images.length > 1 && (
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '0.5rem',
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '0.5rem 0.75rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(4px)',
              }}
            >
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex({ ...activeImageIndex, [step.number]: idx });
                  }}
                  style={{
                    width: (activeImageIndex[step.number] ?? 0) === idx ? '2rem' : '0.5rem',
                    height: '0.5rem',
                    borderRadius: '0.25rem',
                    background: (activeImageIndex[step.number] ?? 0) === idx ? 'rgb(6, 182, 212)' : 'rgba(255, 255, 255, 0.5)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    if ((activeImageIndex[step.number] ?? 0) !== idx) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if ((activeImageIndex[step.number] ?? 0) !== idx) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
                    }
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>


        {/* 🟨 POPUP DESCRIPTION */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: 'calc(100% + 1.5rem)',
              transform: 'translateY(-50%)',
              width: '280px',
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(12px)',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
              color: 'white',
              zIndex: 20,
              pointerEvents: 'none',
              whiteSpace: 'normal',
              wordWrap: 'break-word',
            }}
          >
            <div
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                background: step.iconColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
              }}
            >
              <Icon color="white" size={22} />
            </div>

            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}
            >
              {step.title}
            </h4>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.6,
              }}
            >
              {step.description}
            </p>

            {step.details && (
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem' }}>
                {step.details.map((d, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.75)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </div>
    );
  })}
</div>




                
                
      </div>    ))}
  </div>
</section>
           
{/* CTA SECTION */}
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.25rem',
    marginBottom: '2.5rem',
  }}
>
  <button
    onClick={() =>
      (window.location.href =
        'https://geo-track-em3s.onrender.com/dashboard')
    }
    style={{
      padding: '1.25rem 3.5rem',   
      background: 'rgb(30, 41, 59)',
      color: 'white',
      borderRadius: '1rem',        
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.3,             
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
      transition: 'all 0.3s',
      whiteSpace: 'nowrap',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgb(15, 23, 42)';
      e.currentTarget.style.transform = 'scale(1.04)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgb(30, 41, 59)';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  >
    Go to Dashboard
    <ArrowRight style={{ width: '1.6rem', height: '1.6rem' }} />
  </button>
</div>
<Footer/>
</div>


      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}