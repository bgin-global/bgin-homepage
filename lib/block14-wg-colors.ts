// Working Group Color Scheme - Consistent across all Block 14 pages
export const wgColors: { [key: string]: string } = {
  'IKP': 'bg-blue-100 border-blue-300 text-blue-800',
  'Cyber Security': 'bg-green-100 border-green-300 text-green-800',
  'CS': 'bg-green-100 border-green-300 text-green-800',
  'FASE': 'bg-purple-100 border-purple-300 text-purple-800',
  'Agentic AI': 'bg-yellow-100 border-yellow-300 text-yellow-800',
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
