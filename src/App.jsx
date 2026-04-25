import Hero from './components/Hero.jsx';
import Welcome from './components/Welcome.jsx';
import Countdown from './components/Countdown.jsx';
import Invitation from './components/Invitation.jsx';
import Calendar from './components/Calendar.jsx';
import RSVPForm from './components/RSVPForm.jsx';
import Venue from './components/Venue.jsx';
import Closing from './components/Closing.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import { wedding } from './config.js';

export default function App() {
  return (
    <main className="min-h-screen bg-cream text-mocha overflow-x-hidden">
      {wedding.music.enabled && <MusicPlayer />}
      <Hero />
      <Welcome />
      <Countdown />
      <Invitation />
      <Calendar />
      <RSVPForm />
      <Gallery />
      <Venue />
      <Contact />
      <Closing />
        <footer className="py-8 text-center text-xs text-mocha/50 font-sans">
          Made with ❤ for Hải Đăng & Mai Thy
      </footer>
    </main>
  );
}
