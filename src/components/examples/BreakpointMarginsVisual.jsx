export default function BreakpointMarginsVisual() {
  return (
    <div className="grid all-breakpoints outer-border">
      <article className="grid">
        <div className="grid ex-padded filled no-col-gap">
          <div>
            <span>pad</span>
            <span>32px</span>
          </div>
          <div>
            <span>{"Touch (< 1024px)"}</span>
            <span>Window Width | 0 margin</span>
          </div>
          <div>
            <span>pad</span>
            <span>32px</span>
          </div>
        </div>
      </article>

      <article className="grid container-margin-ex">
        <div className="ex-padded filled">
          <span>min</span>
          <span>32px</span>
        </div>
        <div className="ex-padded filled">
          <span>{"Desktop (1024px - 1215px)"}</span>
          <span>960px</span>
        </div>
        <div className="ex-padded filled">
          <span>min</span>
          <span>32px</span>
        </div>
      </article>
      <article className="grid container-margin-ex">
        <div className="ex-padded filled">
          <span>min</span>
          <span>32px</span>
        </div>
        <div className="ex-padded filled">
          <span>{"Widescreen (1216px - 1407px)"}</span>
          <span>1152px</span>
        </div>
        <div className="ex-padded filled">
          <span>min</span>
          <span>32px</span>
        </div>
      </article>
      <article className="grid container-margin-ex">
        <div className="ex-padded filled">
          <span>min</span>
          <span>32px</span>
        </div>
        <div className="ex-padded filled">
          <span>{"FullHD (> 1408px)"}</span>
          <span>1344px</span>
        </div>
        <div className="ex-padded filled">
          <span>min</span>
          <span>32px</span>
        </div>
      </article>
    </div>
  );
}
