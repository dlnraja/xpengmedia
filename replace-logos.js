// Script pour remplacer tous les emojis par les vrais logos
const fs = require('fs');
const path = require('path');

// Mapping des logos (ID du service => URL du logo)
const logoMapping = {
  // Streaming Global
  'apple-tv': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/appletv.svg',
  'disney-plus': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/disneyplus.svg',
  'hbo-max': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hbo.svg',
  'netflix': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netflix.svg',
  'paramount-plus': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/paramount.svg',
  'prime-video': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/primevideo.svg',
  'youtube': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg',
  'peacock': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/peacock.svg',
  'twitch': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitch.svg',
  'hulu': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/hulu.svg',
  'crunchyroll': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/crunchyroll.svg',
  'plex': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/plex.svg',
  'vimeo': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vimeo.svg',
  'dailymotion': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dailymotion.svg',
  
  // Musique
  'spotify': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spotify.svg',
  'apple-music': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/applemusic.svg',
  'youtube-music': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtubemusic.svg',
  'deezer': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/deezer.svg',
  'tidal': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tidal.svg',
  'amazon-music': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonmusic.svg',
  'soundcloud': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/soundcloud.svg',
  'qobuz': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qobuz.svg',
  'pandora': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/pandora.svg',
  
  // Gaming
  'steam': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/steam.svg',
  'epic-games': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/epicgames.svg',
  'xbox': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xbox.svg',
  'playstation': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/playstation.svg',
  'nintendo': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nintendoswitch.svg',
  'geforce-now': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nvidia.svg',
  'battlenet': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/battlenet.svg',
  'ea-app': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ea.svg',
  'ubisoft': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/ubisoft.svg',
  'gog': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gog.svg',
  
  // Web Services
  'gmail': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg',
  'outlook': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg',
  'google-drive': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googledrive.svg',
  'onedrive': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftonedrive.svg',
  'dropbox': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dropbox.svg',
  'notion': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg',
  'trello': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/trello.svg',
  'slack': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg',
  'zoom': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoom.svg',
  'github': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg',
  'whatsapp': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/whatsapp.svg',
  'telegram': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/telegram.svg',
  'wechat': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/wechat.svg',
  'weibo': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sinaweibo.svg',
  
  // Recharge & Navigation
  'tesla-supercharger': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tesla.svg',
  'chargepoint': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/chargepoint.svg',
  'waze': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/waze.svg',
  'google-maps': 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlemaps.svg',
};

// Lire le fichier platforms.ts
const filePath = path.join(__dirname, 'src', 'data', 'platforms.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Compter les remplacements
let replacements = 0;

// Remplacer chaque service qui a un logo disponible
for (const [serviceId, logoUrl] of Object.entries(logoMapping)) {
  // Pattern pour trouver le service et son icône
  const pattern = new RegExp(
    `(\\s+id:\\s*'${serviceId}',[\\s\\S]*?icon:\\s*)'[^']*'`,
    'g'
  );
  
  const matches = content.match(pattern);
  if (matches) {
    content = content.replace(pattern, `$1'${logoUrl}'`);
    replacements += matches.length;
    console.log(`✅ ${serviceId}: Logo remplacé`);
  } else {
    console.log(`⏭️  ${serviceId}: Service non trouvé`);
  }
}

// Écrire le fichier modifié
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n🎉 Terminé ! ${replacements} logos remplacés sur ${Object.keys(logoMapping).length} services.`);
