import type React from 'react';
import GoldVsFiat1971 from './GoldVsFiat1971';
import DollarErosion1971 from './DollarErosion1971';
import HyperinflationCases from './HyperinflationCases';
import GovtLovesInflation from './GovtLovesInflation';

// Code-native (vector/HTML) infographics, keyed by the string a lesson section
// sets in `section.infographic`. Real text → crisp at any zoom, on-brand,
// accessible, and editable. Add a component here + reference its key in the
// lesson data to drop a graphic into a section.
export const INFOGRAPHIC_MAP: Record<string, React.FC> = {
  'gold-vs-fiat-1971': GoldVsFiat1971,
  'dollar-erosion-1971': DollarErosion1971,
  'hyperinflation-cases': HyperinflationCases,
  'govt-loves-inflation': GovtLovesInflation,
};
