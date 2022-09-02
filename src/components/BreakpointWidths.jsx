export default function BreakpointWidths() {
  return (
    <table className="table">
      <thead>
        <tr className="breakpoints">
          <th colSpan={1} />
          <th colSpan={4}>Breakpoints</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colSpan={1} />

          <th>{"Touch (up to 1023px)"}</th>
          <th>{"Desktop (1204px to 1215px)"}</th>
          <th>{"Widescreen (1216px to 1407px)"}</th>
          <th>{"FullHD (1408px and up)"}</th>
        </tr>
        <tr>
          <th>Container Width</th>
          <td>Window Width</td>
          <td>960px</td>
          <td>1152px</td>
          <td>1344px</td>
        </tr>
      </tbody>
    </table>
  );
}
