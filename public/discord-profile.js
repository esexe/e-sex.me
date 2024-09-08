
document.addEventListener('DOMContentLoaded', async () => {
  const endpoint = `/discord-profile`;

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const avatarURL = `https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png`;
    const username = data.user.username;
    const badges = data.user.public_flags; // This will return an integer representing flags

    document.getElementById('discord-avatar').src = avatarURL;
    document.getElementById('discord-username').textContent = username;
    document.getElementById('discord-badges').textContent = badgeFlagsToString(badges);
  } catch (error) {
    console.error('Failed to fetch Discord profile:', error);
  }
});

/**
 * Convert badge flags integer to human-readable string.
 * @param {number} flags
 * @return {string}
 */
function badgeFlagsToString(flags) {
  const badgeNames = [
    {name: 'Discord Employee', flag: 1},
    {name: 'Partnered Server Owner', flag: 2},
    {name: 'HypeSquad Events', flag: 4},
    {name: 'Bug Hunter Level 1', flag: 8},
    {name: 'House Bravery', flag: 64},
    {name: 'House Brilliance', flag: 128},
    {name: 'House Balance', flag: 256},
    {name: 'Early Supporter', flag: 512},
    {name: 'Bug Hunter Level 2', flag: 16384},
    {name: 'Verified Bot Developer', flag: 131072},
  ];

  return badgeNames
    .filter(badge => flags & badge.flag)
    .map(badge => badge.name)
    .join(', ');
}