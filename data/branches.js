export const BRANCHES = [
  {
    id: 'ladprao',
    name: 'รัชดา - ลาดพร้าว',
    lat: 13.802026990503531,
    lng: 100.5681996355542,
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.067348298539!2d100.5681996355542!3d13.802026990503531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29da11942dba5%3A0xb7f54daeb431acfe!2sBalloonPA%20Balloon%26Event%2024%20Hours%20%40Ladprao!5e0!3m2!1sen!2sth!4v1779018956440!5m2!1sen!2sth',
  },
  {
    id: 'sena',
    name: 'เสนานิคม - เกษตร',
    lat: 13.848,
    lng: 100.566,
    embedSrc: null,
  },
  {
    id: 'sathorn',
    name: 'สาทร - วงเวียนใหญ่',
    lat: 13.721612199999996,
    lng: 100.3534778433594,
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124030.328533947!2d100.3534778433594!3d13.721612199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299beaf4a7b3b%3A0xc9fd6bf216154c03!2zQmFsbG9vblBBIEJhbGxvb24mRXZlbnQgMjQgSG91ciBAIOC4quC4suC4l-C4oyAtIOC4p-C4h-C5gOC4p-C4teC4ouC4meC5g-C4q-C4jeC5iA!5e0!3m2!1sen!2sth!4v1779019090085!5m2!1sen!2sth',
  },
];

function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function nearestBranch(userLat, userLng) {
  return BRANCHES.reduce((best, b) =>
    distanceKm(userLat, userLng, b.lat, b.lng) <
    distanceKm(userLat, userLng, best.lat, best.lng) ? b : best
  , BRANCHES[0]);
}

export const DEFAULT_BRANCH = BRANCHES[0];
