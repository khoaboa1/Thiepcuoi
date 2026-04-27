// Edit wedding details here. Everything user-facing reads from this file.

export const wedding = {
  groom: {
    name: 'Hải Đăng',
    fullName: 'Lê Hải Đăng',
    father: 'Lê Cao Sơn',
    mother: 'Đoàn Thu Hiền',
    phone: '2313030729',
    // CSS object-position to crop from the shared couple photo
    photo: { src: '/images/couple_groom.jpg' },
  },
  bride: {
    name: 'Mai Thy',
    fullName: 'Trần Mai Thy',
    father: 'Trần Tấn Tú',
    mother: 'Dương Thị Kim Thanh',
    phone: '8505019397',
    photo: { src: '/images/couple_bride.jpg' },
  },
  // Wedding date. Month is 1-12 (NOT 0-indexed).
  // hour/minute drive the countdown — set to the earliest event of the day.
  date: {
    year: 2026,
    month: 8,
    day: 1,
    hour: 14,
    minute: 0,
    weekday: 'Thứ Bảy',
  },
  events: [
    {
      key: 'ceremony',
      label: 'Lễ Cưới Tại Nhà Thờ',
      eyebrow: 'Holy Matrimony',
      time: '14:00',
      timeNote: 'Chiều',
      venue: 'St. Mary Catholic Church',
      address: '401 Van Pelt Ln, Pensacola, FL 32505',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=St.+Mary+Catholic+Church+401+Van+Pelt+Ln+Pensacola+FL+32505',
    },
    {
      key: 'reception',
      label: 'Tiệc Cưới',
      eyebrow: 'Reception',
      time: '18:00',
      timeNote: 'Tối',
      venue: 'The Wharf Fish & Oyster Company',
      address: '400 Quietwater Beach Rd, Ste 13, Gulf Breeze, FL 32561',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=The+Wharf+Fish+%26+Oyster+Company+400+Quietwater+Beach+Rd+Gulf+Breeze+FL+32561',
    },
  ],
  music: {
    // Drop your audio file at /public/music/beautiful-in-white.mp3
    // and toggle enabled to true.
    enabled: true,
    src: '/music/Nhac.mp3',
    title: 'Beautiful in White — Westlife',
    startAt: 77,
  },
  // Photo album — drop images into /public/albums/ then list filenames here.
  // Supported formats: jpg, jpeg, png, webp
  // Example: gallery: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']
  gallery: [
    '_UII5170.jpg',
    '_UII5797.jpg',
    '_UII5234.jpg',
    '_UII5715.jpg',
    '_UII5756.jpg',
    '_UII5766.jpg',
    '_UII5800.jpg',
    '_UII5927.jpg',
    '_UII5937.jpg',
  ],
  closing: {
    message:
      'Sự hiện diện của Quý khách sẽ góp phần làm cho ngày thành hôn của chúng tôi thêm phần long trọng và ý nghĩa.',
    signature: 'Hải Đăng & Mai Thy',
  },
};

// Helpers
export const eventDate = new Date(
  wedding.date.year,
  wedding.date.month - 1,
  wedding.date.day,
  wedding.date.hour,
  wedding.date.minute,
);
