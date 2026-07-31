export const E_F = (1 + Math.sqrt(5)) / 2;
export const LAMBDA_EGS = Math.log(E_F) / (2 * Math.PI);

export const DOC_ID = 'WP-SYNTHOBS-COMP-COSMO-2026-07-30-REV2';
export const REGISTRY_ID = 'synthobs-omni-lattice-report-card-q3-2026';
export const STUDY_TITLE = 'Omni-Lattice Report Card Q3 2026 — Comparative Cosmology Suite';

export const STANDARD = {
  coherence: 82,
  irreducibility: 54,
  overall: 68.0,
  free_constants: 26,
  dark_fraction: 0.95,
  dark_matter: 0.27,
  dark_energy: 0.68,
};

export const OMNI = {
  coherence: 94,
  irreducibility: 91,
  overall: 92.5,
  free_invariants: 1, // E_F
};

export const SCORECARD_DOMAINS = [
  'cosmological_mass_deficit',
  'cosmic_acceleration',
  'micro_macro_unification',
  'empirical_calibration',
  'cross_domain_portability',
];
