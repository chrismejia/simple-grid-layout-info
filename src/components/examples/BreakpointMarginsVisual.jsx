export default function BreakpointMarginsVisual() {
  return (
    <div className="grid all-breakpoints outer-border">
      <article className="grid">
        <div className="ex-padded filled">
          <span>Touch</span>
          <span>Window Width | No Margins</span>
        </div>
      </article>

      <article className="grid container-margin-ex">
        <div className="ex-padded filled">
          <span>min</span>
          <span>32px</span>
        </div>
        <div className="ex-padded filled">
          <span>Desktop</span>
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
          <span>Widescreen</span>
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
          <span>FullHD</span>
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
