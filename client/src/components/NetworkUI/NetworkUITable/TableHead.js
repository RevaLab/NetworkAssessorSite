import React from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="pway-select"></th>
        <th className="col-name">
          Name
        </th>
        <th className="col-color">
        </th>
        <th className="col-pwaymembers">
          <abbr title="Pathway members">
            L
          </abbr>
        </th>
        <th className="col-edges">
          <abbr title="Edges between pathway and query list">
            E
          </abbr>
        </th>
        <th className="col-overlap">
          <abbr title="Overlap between pathway and query list">
            O
          </abbr>
        </th>
        <th className="col-sig">
          <abbr title="Significance">Sig.</abbr>
        </th>
      </tr>
    </thead>
  )
}

export default TableHead;