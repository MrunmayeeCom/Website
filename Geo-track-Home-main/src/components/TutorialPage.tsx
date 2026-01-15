import React from 'react';
import {
  UserPlus,
  Settings,
  MapPin,
  Shield,
  Users,
  Route,
  Activity,
  UserCircle,
  AlertCircle,
  CheckCircle2,
  FileText,
  CreditCard,
  MapPinned,
  Navigation,
  Play,
  ExternalLink,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

import logo from '../assets/images/Geotracklogo.png';

// Single Screenshots
import app_launch from "../assets/images/tutorial/app_launch.jpg";
import domain_name from "../assets/images/tutorial/domain_name.jpg";
import access from "../assets/images/tutorial/access.jpg";
import allow from "../assets/images/tutorial/allow.jpg";
import map_screen from "../assets/images/tutorial/map_screen.jpg";
import marker_tap_1 from "../assets/images/tutorial/marker_tap_1.jpg" 
import meeting_details from "../assets/images/tutorial/meeting_details.jpg";
import start_tap_1 from "../assets/images/tutorial/start_tap_1.jpg";
import end_meeting from "../assets/images/tutorial/end_meeting.png";
import client_tap_1 from "../assets/images/tutorial/client_tap_1.jpg";
import focus_markers from "../assets/images/tutorial/focus_markers.jpg";
import client_screen from "../assets/images/tutorial/client_screen.jpg";
import create_new_client from "../assets/images/tutorial/create_new_client.jpg";
import activities_log from "../assets/images/tutorial/activities_log.jpg";
import profile_screen from "../assets/images/tutorial/profile_screen.jpg";
import profile_screen_1 from "../assets/images/tutorial/profile_screen_1.jpg";
import trip_details from "../assets/images/tutorial/trip_details.jpg";
import single_trip_1 from "../assets/images/tutorial/single_trip_1.jpg";
import single_trip_2 from "../assets/images/tutorial/single_trip_2.jpg";
import single_trip_3 from "../assets/images/tutorial/single_trip_3.jpg";
import multi_leg_3 from "../assets/images/tutorial/multi_leg_3.jpg";
import multi_leg_4 from "../assets/images/tutorial/multi_leg_4.jpg";
import multi_leg_5 from "../assets/images/tutorial/multi_leg_5.jpg";

// Tutorial Data
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
        image: domain_name,
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
        image: marker_tap_1,
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
        image: start_tap_1,
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
        image: client_tap_1,
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
        images: [single_trip_1, single_trip_2, single_trip_3],
      },
      {
        number: 14,
        title: 'Multi-Leg Trip Entry',
        description: 'Enter trip name, multiple journey legs with start/end location, distance, transport mode, amount spent, notes, and attach receipts. View total legs, distance, and expense amount.',
        icon: CreditCard,
        iconColor: 'rgb(249, 115, 22)',
        multiImages: true,
        images: [multi_leg_3, multi_leg_4, multi_leg_5],
      },
    ],
  },
  {
    sectionId: 7,
    sectionTitle: '📊 Client Focus & Visit Status',
    sectionDescription: 'Monitor client engagement with color-coded status indicators',
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
        image: focus_markers,
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
        image: create_new_client,
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
        image: activities_log,
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
        image: profile_screen_1,
      },
    ],
  },
];

interface Step {
  number: number;
  title: string;
  description: string;
  icon: any;
  iconColor: string;
  details?: string[];
  warning?: {
    title: string;
    points: string[];
  };
  multiImages?: boolean;
  image?: any;
  images?: any[];
}

export default function TutorialPage() {
  return (
    <>
      <style>{`
        .tutorial-page {
          min-height: 100vh;
          background: white;
          width: 100%;
          overflow-x: hidden;
          position: relative;
        }

        .tutorial-page-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .tutorial-page-bg-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, white, rgb(236, 254, 255), white);
          opacity: 0.8;
        }

        .tutorial-page-bg-blur-1 {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent);
          border-radius: 50%;
          filter: blur(80px);
        }

        .tutorial-page-bg-blur-2 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent);
          border-radius: 50%;
          filter: blur(80px);
        }

        .tutorial-page-content {
          position: relative;
          z-index: 10;
        }

        .tutorial-hero {
          position: relative;
          overflow: hidden;
          background: transparent;
          padding-top: 3rem;
          padding-bottom: 3rem;
        }

        .tutorial-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .tutorial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .tutorial-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
          .tutorial-hero {
            padding-top: 5rem;
            padding-bottom: 6rem;
          }
        }

        .tutorial-logo {
          width: 4rem;
          height: 4rem;
          object-fit: contain;
        }

        @media (min-width: 640px) {
          .tutorial-logo {
            width: 5rem;
            height: 5rem;
          }
        }

        @media (min-width: 1024px) {
          .tutorial-logo {
            width: 6rem;
            height: 6rem;
          }
        }

        .tutorial-page h1 {
          font-size: 1.875rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .tutorial-page h1 {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 768px) {
          .tutorial-page h1 {
            font-size: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .tutorial-page h1 {
            font-size: 3.75rem;
          }
        }

        @media (min-width: 1280px) {
          .tutorial-page h1 {
            font-size: 4rem;
          }
        }

        .tutorial-title-accent {
          color: rgb(6, 182, 212);
        }

        .tutorial-title-dark {
          color: rgb(30, 41, 59);
        }

        .tutorial-description {
          font-size: 1rem;
          color: rgb(75, 85, 99);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 640px) {
          .tutorial-description {
            font-size: 1.125rem;
          }
        }

        @media (min-width: 768px) {
          .tutorial-description {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 1024px) {
          .tutorial-description {
            font-size: 1.5rem;
          }
        }

        .tutorial-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tutorial-feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .tutorial-feature-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: rgb(6, 182, 212);
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .tutorial-feature-icon {
            width: 1.5rem;
            height: 1.5rem;
          }
        }

        .tutorial-feature-text {
          font-size: 1rem;
          color: rgb(55, 65, 81);
        }

        @media (min-width: 640px) {
          .tutorial-feature-text {
            font-size: 1.125rem;
          }
        }

        .tutorial-video-card {
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          border: 1px solid rgb(243, 244, 246);
        }

        .tutorial-video-placeholder {
          position: relative;
          aspect-ratio: 16/9;
          background: linear-gradient(to bottom right, rgb(241, 245, 249), rgb(219, 234, 254), rgb(204, 251, 241));
        }

        .tutorial-video-play {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tutorial-play-btn {
          width: 5rem;
          height: 5rem;
          background: rgb(6, 182, 212);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          transition: background 0.3s;
          border: none;
          cursor: pointer;
        }

        .tutorial-play-btn:hover {
          background: rgb(8, 145, 178);
        }

        .tutorial-video-info {
          padding: 2rem;
        }

        .tutorial-video-title {
          font-size: 1.25rem;
          color: rgb(30, 41, 59);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        @media (min-width: 768px) {
          .tutorial-video-title {
            font-size: 1.5rem;
          }
        }

        .tutorial-video-desc {
          color: rgb(75, 85, 99);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .tutorial-video-btn {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgb(30, 41, 59);
          color: white;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          text-decoration: none;
          font-weight: 600;
        }

        .tutorial-video-btn:hover {
          background: rgb(15, 23, 42);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .tutorial-section {
          max-width: 80rem;
          margin: 0 auto;
          padding: 3rem 1rem;
        }

        @media (min-width: 640px) {
          .tutorial-section {
            padding: 4rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .tutorial-section {
            padding: 5rem 2rem;
          }
        }

        .tutorial-section-header {
          text-align: center;
          max-width: 56rem;
          margin: 0 auto 3rem;
        }

        .tutorial-page h2 {
          font-size: 1.875rem;
          color: rgb(30, 41, 59);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        @media (min-width: 640px) {
          .tutorial-page h2 {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 1024px) {
          .tutorial-page h2 {
            font-size: 3rem;
          }
        }

        .tutorial-section-desc {
          color: rgb(75, 85, 99);
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (min-width: 640px) {
          .tutorial-section-desc {
            font-size: 1.125rem;
          }
        }

        @media (min-width: 1024px) {
          .tutorial-section-desc {
            font-size: 1.25rem;
          }
        }

        .tutorial-sections-wrapper {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        @media (min-width: 768px) {
          .tutorial-sections-wrapper {
            gap: 6rem;
          }
        }

        .tutorial-section-item {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .tutorial-section-title-wrapper {
          border-left: 4px solid rgb(6, 182, 212);
          padding-left: 1.5rem;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          background: linear-gradient(to right, rgb(236, 254, 255), transparent);
        }

        .tutorial-page h3 {
          font-size: 1.5rem;
          color: rgb(30, 41, 59);
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        @media (min-width: 640px) {
          .tutorial-page h3 {
            font-size: 1.875rem;
          }
        }

        @media (min-width: 1024px) {
          .tutorial-page h3 {
            font-size: 2.25rem;
          }
        }

        .tutorial-section-subtitle {
          color: rgb(75, 85, 81);
          font-size: 1rem;
        }

        @media (min-width: 640px) {
          .tutorial-section-subtitle {
            font-size: 1.125rem;
          }
        }

        .tutorial-steps {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .tutorial-step {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        @media (min-width: 1024px) {
          .tutorial-step {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        .tutorial-step-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tutorial-step-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .tutorial-step-icon {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tutorial-step-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
        }

        .tutorial-page h4 {
          font-size: 1.25rem;
          font-weight: 700;
          color: rgb(30, 41, 59);
          line-height: 1.3;
        }

        @media (min-width: 640px) {
          .tutorial-page h4 {
            font-size: 1.5rem;
          }
        }

        .tutorial-step-desc {
          color: rgb(55, 65, 81);
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (min-width: 640px) {
          .tutorial-step-desc {
            font-size: 1.125rem;
          }
        }

        .tutorial-step-details {
          padding-left: 1rem;
          border-left: 2px solid rgb(103, 232, 249);
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .tutorial-detail-item {
          display: flex;
          align-items: start;
          gap: 0.75rem;
          color: rgb(55, 65, 81);
        }

        .tutorial-detail-bullet {
          color: rgb(6, 182, 212);
          font-weight: 700;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        .tutorial-detail-text {
          font-size: 0.875rem;
          line-height: 1.6;
        }

        @media (min-width: 640px) {
          .tutorial-detail-text {
            font-size: 1rem;
          }
        }

        .tutorial-warning {
          background: rgb(254, 252, 232);
          border-left: 4px solid rgb(245, 158, 11);
          border-radius: 0 0.75rem 0.75rem 0;
          padding: 1.25rem;
        }

        .tutorial-warning-content {
          display: flex;
          align-items: start;
          gap: 0.75rem;
        }

        .tutorial-warning-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: rgb(217, 119, 6);
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .tutorial-warning-title {
          font-weight: 700;
          color: rgb(120, 53, 15);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        @media (min-width: 640px) {
          .tutorial-warning-title {
            font-size: 1.125rem;
          }
        }

        .tutorial-warning-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tutorial-warning-item {
          font-size: 0.875rem;
          color: rgb(146, 64, 14);
          line-height: 1.6;
          padding-left: 1rem;
        }

        .tutorial-screenshot-wrapper {
          position: relative;
          margin: 0 auto;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .tutorial-screenshot-wrapper {
            position: sticky;
            top: 2rem;
          }
        }

        .tutorial-multi-screenshots {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 42rem;
          margin: 0 auto;
        }

        .tutorial-phone-frame {
          position: relative;
          background: rgb(17, 24, 39);
          border-radius: 1.5rem;
          padding: 0.625rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .tutorial-phone-screen {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          aspect-ratio: 9/19.5;
        }

        .tutorial-phone-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: rgb(249, 250, 251);
          border: 2px dashed rgb(209, 213, 219);
        }

        .tutorial-phone-notch {
          position: absolute;
          top: 0.625rem;
          left: 50%;
          transform: translateX(-50%);
          width: 3.5rem;
          height: 0.75rem;
          background: rgb(17, 24, 39);
          border-radius: 0 0 0.5rem 0.5rem;
          z-index: 10;
        }


        .tutorial-single-screenshot {
          max-width: 20rem;
          margin: 0 auto;
        }

        .tutorial-single-placeholder {
      background: linear-gradient(to bottom right, rgb(249, 250, 251), rgb(243, 244, 246));
      border-radius: 1rem;
      aspect-ratio: 9/19.5;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px dashed rgb(209, 213, 219);
    }

    .tutorial-placeholder-content {
      text-align: center;
      padding: 1.5rem;
    }

    .tutorial-placeholder-icon {
      width: 4rem;
      height: 4rem;
      margin: 0 auto 0.75rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tutorial-placeholder-text {
      color: rgb(107, 114, 128);
      font-size: 0.75rem;
    }

    .tutorial-dashboard-btn-wrapper {
      display: flex;
      justify-content: center;
      padding-top: 2rem;
    }

    .tutorial-dashboard-btn {
      width: 100%;
      padding: 1.25rem 2.5rem;
      background: rgb(30, 41, 59);
      color: white;
      border-radius: 0.75rem;
      transition: all 0.3s;
      transform: scale(1);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1.125rem;
      font-weight: 700;
      border: none;
      cursor: pointer;
      text-decoration: none;
    }

    @media (min-width: 640px) {
      .tutorial-dashboard-btn {
        width: auto;
        padding: 1.5rem 3.5rem;
        font-size: 1.25rem;
      }
    }

    .tutorial-dashboard-btn:hover {
      background: rgb(15, 23, 42);
      transform: scale(1.05);
    }

    .tutorial-dashboard-icon {
      width: 1.5rem;
      height: 1.5rem;
      transition: transform 0.3s;
    }

    @media (min-width: 640px) {
      .tutorial-dashboard-icon {
        width: 1.75rem;
        height: 1.75rem;
      }
    }

    .tutorial-dashboard-btn:hover .tutorial-dashboard-icon {
      transform: translateX(0.25rem);
    }

    .tutorial-footer {
      background: rgb(30, 41, 59);
      color: white;
      padding: 2rem 0;
      margin-top: 3rem;
    }

    @media (min-width: 640px) {
      .tutorial-footer {
        margin-top: 4rem;
      }
    }

    @media (min-width: 1024px) {
      .tutorial-footer {
        margin-top: 5rem;
      }
    }

    .tutorial-footer-container {
      max-width: 80rem;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .tutorial-footer-content {
      text-align: center;
    }

    .tutorial-footer-copy {
      font-size: 0.875rem;
      color: rgb(209, 213, 219);
      margin-bottom: 1rem;
    }

    .tutorial-footer-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      font-size: 0.875rem;
      color: rgb(209, 213, 219);
    }

    @media (min-width: 640px) {
      .tutorial-footer-links {
        gap: 1.5rem;
      }
    }

    .tutorial-footer-link {
      color: rgb(209, 213, 219);
      transition: color 0.3s;
      text-decoration: none;
    }

    .tutorial-footer-link:hover {
      color: white;
    }
  `}</style>

  <div className="tutorial-page">
    {/* Background Pattern */}
    <div className="tutorial-page-bg">
      <div className="tutorial-page-bg-gradient" />
      <div className="tutorial-page-bg-blur-1" />
      <div className="tutorial-page-bg-blur-2" />
    </div>

    <div className="tutorial-page-content">
      {/* Hero Section */}
      <section className="tutorial-hero">
        <div className="tutorial-container">
          <div className="tutorial-grid">
            
            {/* LEFT CONTENT */}
            <div>
              {/* Logo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <img src={logo} alt="GeoTrack Logo" className="tutorial-logo" />
              </div>

              {/* Heading */}
              <h1>
                <span className="tutorial-title-accent">Explore GeoTrack</span>{' '}
                <span className="tutorial-title-dark">with Detailed Step-by-Step Tutorials</span>
              </h1>

              {/* Description */}
              <p className="tutorial-description">
                Learn how to streamline operations, boost productivity, and scale faster with comprehensive tutorials covering setup, configuration, and advanced features.
              </p>

              {/* Features List */}
              <div className="tutorial-features">
                {[
                  'Quick start guides for instant setup',
                  'Advanced feature walkthroughs',
                  'How it works steps for smooth onboarding',
                ].map((feature) => (
                  <div key={feature} className="tutorial-feature-item">
                    <CheckCircle className="tutorial-feature-icon" />
                    <span className="tutorial-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE – VIDEO */}
            <div>
              <div className="tutorial-video-card">
                <div className="tutorial-video-placeholder">
                  <div className="tutorial-video-play">
                    <div style={{ textAlign: 'center' }}>
                      <button className="tutorial-play-btn">
                        <Play style={{ width: '2.5rem', height: '2.5rem', color: 'white', marginLeft: '0.25rem' }} fill="white" />
                      </button>
                      <p style={{ marginTop: '1.5rem', color: 'rgb(55, 65, 81)', fontWeight: 500, fontSize: '1.125rem' }}>
                        Getting Started with GeoTrack
                      </p>
                      <p style={{ fontSize: '0.875rem', color: 'rgb(107, 114, 128)', marginTop: '0.25rem' }}>Duration: 5:32</p>
                    </div>
                  </div>
                </div>
                
                <div className="tutorial-video-info">
                  <h3 className="tutorial-video-title">
                    Welcome to GeoTrack Tutorial
                  </h3>
                  <p className="tutorial-video-desc">
                    Learn how to set up your account, configure tracking parameters, and start monitoring your assets in just a few minutes.
                  </p>
                  <button className="tutorial-video-btn">
                    Watch Full Tutorial Series
                    <ExternalLink style={{ width: '1.25rem', height: '1.25rem' }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section id="tutorials" className="tutorial-section">
        <div>
          
          {/* Section Header */}
          <div className="tutorial-section-header">
            <h2>Complete Step-by-Step Tutorial</h2>
            <p className="tutorial-section-desc">
              Master GeoTrack with our comprehensive guide covering every feature from sign-up to advanced functionality
            </p>
          </div>

          {/* Tutorial Sections */}
          <div className="tutorial-sections-wrapper">
            {tutorialSections.map((section) => (
              <div key={section.sectionId} className="tutorial-section-item">
                {/* Section Header */}
                <div className="tutorial-section-title-wrapper">
                  <h3>{section.sectionTitle}</h3>
                  <p className="tutorial-section-subtitle">
                    {section.sectionDescription}
                  </p>
                </div>

                {/* Steps */}
                <div className="tutorial-steps">
                  {section.steps.map((step: Step) => {
                    const Icon = step.icon;
                    const hasDetails = step.details && step.details.length > 0;
                    const hasWarning = !!step.warning;

                    return (
                      <div key={step.number} className="tutorial-step">
                        {/* LEFT: Step Content */}
                        <div className="tutorial-step-content">
                          {/* Step Number and Icon */}
                          <div className="tutorial-step-header">
                            <div className="tutorial-step-icon" style={{ backgroundColor: step.iconColor }}>
                              <Icon style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
                            </div>
                            <span className="tutorial-step-badge" style={{ backgroundColor: step.iconColor }}>
                              STEP {step.number}
                            </span>
                          </div>

                          {/* Title */}
                          <h4>{step.title}</h4>

                          {/* Description */}
                          <p className="tutorial-step-desc">
                            {step.description}
                          </p>

                          {/* Details List */}
                          {hasDetails && (
                            <div className="tutorial-step-details">
                              {step.details!.map((detail: string, idx: number) => (
                                <div key={idx} className="tutorial-detail-item">
                                  <span className="tutorial-detail-bullet">•</span>
                                  <span className="tutorial-detail-text">{detail}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Warning Box */}
                          {hasWarning && (
                            <div className="tutorial-warning">
                              <div className="tutorial-warning-content">
                                <AlertCircle className="tutorial-warning-icon" />
                                <div style={{ flex: 1 }}>
                                  <p className="tutorial-warning-title">
                                    {step.warning!.title}
                                  </p>
                                  <ul className="tutorial-warning-list">
                                    {step.warning!.points.map((point: string, idx: number) => (
                                      <li key={idx} className="tutorial-warning-item">
                                        • {point}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* RIGHT: Screenshot Section */}
                        <div className="tutorial-screenshot-wrapper">
                          {step.multiImages ? (
                            // Multiple Images
                            <div className="tutorial-multi-screenshots">
                              {step.images?.map((imgSrc, idx) => (
                                <div key={idx} style={{ position: 'relative' }}>
                                  <div className="tutorial-phone-frame">
                                    <div className="tutorial-phone-screen">
                                      <img 
                                        src={imgSrc} 
                                        alt={`${step.title} - Screenshot ${idx + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                      />
                                    </div>
                                    <div className="tutorial-phone-notch" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            // Single Image
                            <div className="tutorial-single-screenshot">
                              {step.image ? (
                                <div className="tutorial-phone-frame" style={{ maxWidth: '20rem', margin: '0 auto' }}>
                                  <div className="tutorial-phone-screen">
                                    <img 
                                      src={step.image} 
                                      alt={step.title}
                                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                  </div>
                                  <div className="tutorial-phone-notch" />
                                </div>
                              ) : (
                                <div className="tutorial-single-placeholder">
                                  <div className="tutorial-placeholder-content">
                                    <div className="tutorial-placeholder-icon" style={{ backgroundColor: step.iconColor }}>
                                      <Icon style={{ width: '2rem', height: '2rem', color: 'white' }} />
                                    </div>
                                    <p className="tutorial-placeholder-text">
                                      Step {step.number} Screenshot
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Button */}
          <div className="tutorial-dashboard-btn-wrapper">
            <button 
              onClick={() => window.location.href = 'https://geo-track-em3s.onrender.com/dashboard'}
              className="tutorial-dashboard-btn"
            >
              Go to Dashboard
              <ArrowRight className="tutorial-dashboard-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tutorial-footer">
        <div className="tutorial-footer-container">
          <div className="tutorial-footer-content">
            <p className="tutorial-footer-copy">© 2025 Trackon. All rights reserved.</p>
            <div className="tutorial-footer-links">
              <a href="#" className="tutorial-footer-link">FAQs</a>
              <a href="#" className="tutorial-footer-link">Privacy Policy</a>
              <a href="#" className="tutorial-footer-link">Terms of Service</a>
              <a href="#" className="tutorial-footer-link">Cookie Policy</a>
              <a href="#" className="tutorial-footer-link">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</>
  );
}