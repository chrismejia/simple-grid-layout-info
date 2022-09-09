export default function BreakpointWidths() {
  return (
    <table className="table breakpoints-table">
      <thead>
        <tr>
          <th>Breakpoints</th>
          <th>.container width</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{"Touch (up to 1023px)"}</th>
          <td>Window Width</td>
        </tr>
        <tr>
          <th>{"Desktop (1024px - 1215px)"}</th>
          <td>960px</td>
        </tr>
        <tr>
          <th>{"Widescreen (1216px - 1407px)"}</th>
          <td>1152px</td>
        </tr>
        <tr>
          <th>{"FullHD (1408px and up)"}</th>
          <td>1344px</td>
        </tr>
      </tbody>
    </table>
  );
}
