import React from "react";

const Geometry = () => {
  return (
    <div className="wrapper">
      <div className="geometry hidden md:flex md:my-10">
        <table>
          <tr>
            <th>Size</th>
            <th>Rider Height</th>
            <th>Stack</th>
            <th>Reach</th>
            <th>BB Drop</th>
            <th>Wheelbase</th>
            <th>Seat Tube Length</th>
            <th>Top Tube Length</th>
            <th>Head Tube Length</th>
          </tr>
          <tr>
            <td>S</td>
            <td>5'0" - 5'5" (152cm - 165cm)</td>
            <td>530mm</td>
            <td>380mm</td>
            <td>70mm</td>
            <td>1030mm</td>
            <td>490mm</td>
            <td>540mm</td>
            <td>120mm</td>
          </tr>
          <tr>
            <td>M</td>
            <td>5'6" - 5'10" (168cm - 178cm)</td>
            <td>550mm</td>
            <td>390mm</td>
            <td>68mm</td>
            <td>1050mm</td>
            <td>520mm</td>
            <td>560mm</td>
            <td>130mm</td>
          </tr>
          <tr>
            <td>L</td>
            <td>5'11" - 6'3" (180cm - 191cm)</td>
            <td>570mm</td>
            <td>410mm</td>
            <td>66mm</td>
            <td>1070mm</td>
            <td>550mm</td>
            <td>580mm</td>
            <td>150mm</td>
          </tr>
        </table>
      </div>

      {/* large screen */}

      <div className="geometry my-10 md:hidden">
        <table>
          <tr>
            <th>Size</th>
            <th>S</th>
            <th>M</th>
            <th>L</th>
          </tr>

          <tr>
            <th>Rider Height</th>
            <td>5'0" - 5'5" (152cm - 165cm)</td>
            <td>5'6" - 5'10" (168cm - 178cm)</td>
            <td>5'11" - 6'3" (180cm - 191cm)</td>
          </tr>

          <tr>
            <th>Stack</th>
            <td>530mm</td>
            <td>550mm</td>
            <td>570mm</td>
          </tr>

          <tr>
            <th>Reach</th>
            <td>380mm</td>
            <td>390mm</td>
            <td>410mm</td>
          </tr>

          <tr>
            <th>BB Drop</th>
            <td>70mm</td>
            <td>68mm</td>
            <td>66mm</td>
          </tr>

          <tr>
            <th>Wheelbase</th>
            <td>1030mm</td>
            <td>1050mm</td>
            <td>1070mm</td>
          </tr>

          <tr>
            <th>Seat Tube Length</th>
            <td>490mm</td>
            <td>520mm</td>
            <td>550mm</td>
          </tr>

          <tr>
            <th>Top Tube Length</th>
            <td>540mm</td>
            <td>560mm</td>
            <td>580mm</td>
          </tr>

          <tr>
            <th>Head Tube Length</th>
            <td>120mm</td>
            <td>130mm</td>
            <td>150mm</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Geometry;
