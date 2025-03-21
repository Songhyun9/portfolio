export const navMap: Record<string, { group: string; title: string }> = {
  '/info': { group: 'About', title: 'Songhyun Kim' },
  '/astarmize': { group: 'Work', title: 'Astarmize' },
  '/copykle': { group: 'Work', title: 'Copykle' },
  // '/golf': { group: 'Work', title: 'Golf Field ERP' },
  // '/webgame': { group: 'Work', title: '3D Webgame' },
  // '/robot': { group: 'Work', title: 'Service Robot' },
  '/hoeyo': { group: 'Project', title: 'Hoeyo' },
  // '/enc': { group: 'Project', title: 'Enc' },
  // '/kica': { group: 'Project', title: 'Kica' },
};

export const getNavGroups = () => {
  const groups: Record<string, { title: string; items: { title: string; url: string }[] }> = {};

  Object.entries(navMap).forEach(([url, { title, group }]) => {
    if (!groups[group]) {
      groups[group] = { title: group, items: [] };
    }
    groups[group].items.push({ title, url });
  });

  return Object.values(groups);
};
