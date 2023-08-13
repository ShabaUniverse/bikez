import React from "react";

const Materials = () => {
  return (
    <div className="py-10">
      <table>
        <tr>
          <th>Material</th>
          <th>TI</th>
          <th>Carbon</th>
          <th>Aluminum</th>
          <th>Steel</th>
        </tr>

        <tr>
          <th>Durability</th>
          <td>1</td>
          <td>4</td>
          <td>3</td>
          <td>2</td>
        </tr>

        <tr>
          <th>Longevity</th>
          <td>1</td>
          <td>3.5</td>
          <td>3</td>
          <td>2</td>
        </tr>

        <tr>
          <th>Weight</th>
          <td>2.5</td>
          <td>1.5</td>
          <td>2</td>
          <td>4</td>
        </tr>

        <tr>
          <th>Stiffness</th>
          <td>2.5</td>
          <td>1.5</td>
          <td>1.5</td>
          <td>3.5</td>
        </tr>

        <tr>
          <th>Road Damping</th>
          <td>1</td>
          <td>3</td>
          <td>4</td>
          <td>2</td>
        </tr>

        <tr>
          <th>Ride Quality</th>
          <td>1</td>
          <td>3</td>
          <td>2.5</td>
          <td>2</td>
        </tr>
      </table>
    </div>
  );
};

export default Materials;
