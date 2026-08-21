# FPD Tab UI Enhancements

The Setor FPD tab will be updated with improved navigation, centralized file controls, and a more intuitive filtering system for data analysis.

## User-Facing Changes
- **FPD MENSAL Filter**: Replaced the linear timeline with a multi-select picklist (like the team filter) to allow viewing multiple months simultaneously.
- **Improved Filter Labels**: Updated "Período Personalizado" to "DATA DE VENCIMENTO" for clearer context.
- **Streamlined Layout**:
  - The upload buttons (**OSAB**, **PAGAMENTOS**, **VENDAS**) moved to the top header for quicker access.
  - Added a **Collapse Filters** button to maximize screen space when viewing tables.
- **Priority Card Coloring**: Cards for delay ranges (10-15 to +61 days) now use a "temperature" scale from yellow to deep red, highlighting critical delays at a glance.

## Technical Details
- **State Management**:
  - Changed `fpdSelectedMonth` to `fpdSelectedMonths` (array) to support multi-select.
  - Added `fpdFiltersVisible` boolean state to control the visibility of the filter section.
- **UI Architecture**:
  - Reorganized the `renderFpdTab` JSX to place file inputs/buttons at the top level of the component.
  - Refactored filter logic to filter by an array of months instead of a single value.
  - Updated card styling logic to map delay keys to a color gradient array: `['#fbbf24', '#f59e0b', '#ea580c', '#dc2626', '#b91c1c', '#7f1d1d']`.
- **Consistency**: Kept the design language consistent with the "Eficácia" tab while adding these FPD-specific features.
