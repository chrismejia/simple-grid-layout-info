/**************************************
 * MindTheGap.jsx
 *************************************/
export const no_gap_jsx = `<div className="grid no-gap outer-border">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`;

export const no_gap_css = `.no-gaps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 100px);

  /* No gap here! */
}

.no-gaps :first-child,
.no-gaps :last-child {
  background-color: var(--jewel);
}

.no-gaps :nth-child(2),
.no-gaps :nth-child(3) {
  color: black;
  background-color: var(--vivid);
}`;

export const individual_gaps = `.individual-gaps {
  /* Different values */
  row-gap: 20px;
  column-gap: 3rem;

  /* Same values */
  row-gap: 1.5rem;
  column-gap: 1.5rem;
}`;

export const same_gaps = `.combined-gaps {
  /* gap: <row-gap> <column-gap> */
  gap: 20px 3rem;

  /* If row-gap === column-gap, just set one value */
  gap: 1.5rem;
}`;
