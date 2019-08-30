import React from "react"

export default ({
  title = 'Facebook Icon',
  color = 'inherit'
}) => (
  <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
    <title>{title}</title>
    <path fill={color} d="M21.631 0H3.37A3.369 3.369 0 0 0 0 3.369V21.63A3.369 3.369 0 0 0 3.369 25h9.007l.015-8.934h-2.32a.548.548 0 0 1-.549-.545l-.01-2.88a.548.548 0 0 1 .547-.55h2.317V9.31c0-3.23 1.972-4.987 4.852-4.987h2.364c.303 0 .548.245.548.547v2.428a.548.548 0 0 1-.548.548h-1.45c-1.567 0-1.87.745-1.87 1.838v2.408h3.442c.328 0 .583.287.544.613l-.341 2.88a.548.548 0 0 1-.544.482h-3.086L16.272 25h5.36A3.369 3.369 0 0 0 25 21.631V3.37A3.369 3.369 0 0 0 21.631 0z"/>
  </svg>
)
