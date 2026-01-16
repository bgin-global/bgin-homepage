// Working Group Color Scheme - Consistent across all Block 14 pages
export const wgColors: { [key: string]: string } = {
  'Agentic AI': 'bg-yellow-100 border-yellow-300 text-yellow-800',
  'IKP': 'bg-amber-100 border-amber-300 text-amber-800',
  'Cyber Security': 'bg-red-100 border-red-300 text-red-800',
  'CS': 'bg-red-100 border-red-300 text-red-800',
  'FASE': 'bg-blue-100 border-blue-300 text-blue-800',
  'General': 'bg-gray-100 border-gray-300 text-gray-800',
  'TBD': 'bg-gray-50 border-gray-200 text-gray-600'
};

export const getWGColorClasses = (wg: string): string => {
  return wgColors[wg] || wgColors['General'];
};

// For CSS class names based on WG name
export const getWGClassName = (wg: string): string => {
  return wg.toLowerCase().replace(/\s+/g, '-');
};
