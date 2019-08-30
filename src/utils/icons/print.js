import React from "react"

export default ({
  title = 'Print Icon',
  color = 'inherit'
}) => (
  <svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path fill={color} d="M36.516 13.707H31.9c0-.013.007-.025.007-.038V6.922c0-.392-.156-.768-.431-1.046L26.069.438A1.487 1.487 0 0 0 25.016 0H7.577c-.82 0-1.484.665-1.484 1.484v16.793H1.484C.665 18.277 0 18.94 0 19.76v16.755C0 37.335.665 38 1.484 38h28.939c.82 0 1.484-.665 1.484-1.484v-6.131h4.609c.819 0 1.484-.665 1.484-1.485V15.192c0-.82-.665-1.485-1.484-1.485zM33 17l-5.5 5-5.5-5h11zM24 3h.116L29 7.913V8h-5V3zM3 21h8v14H3V21zm25.992 14H13.596V19.76c0-.82-.669-1.482-1.493-1.482H9V3h12.332v6.12c0 .818.669 1.48 1.493 1.48h6.167v3.08c0 .013.007.025.008.038H18.229c-.824 0-1.493.663-1.493 1.481v13.682c0 .818.669 1.481 1.493 1.481h10.763V35zM35 27H20v-9l7.154 6.013a1.453 1.453 0 0 0 1.873 0L35 18.993V27z"/>
  </svg>
)
