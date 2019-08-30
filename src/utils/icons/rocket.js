import React from "react"

export default ({
  title = 'Rocket Icon',
  color = 'inherit',
  circular
}) => {
  if(circular){
    return(
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <title>{title}</title>
        <path fill={color} fillRule="evenodd" d="M25 0c13.807 0 25 11.193 25 25v.001c0 13.807-11.193 25-25 25s-25-11.193-25-25V25C0 11.193 11.193 0 25 0zm0 1.8C12.208 1.8 1.8 12.208 1.8 25c0 12.793 10.408 23.201 23.2 23.201 12.793 0 23.2-10.408 23.2-23.2C48.2 12.208 37.793 1.8 25 1.8zm11.649 14.047a2.382 2.382 0 0 0-.651-1.79 2.378 2.378 0 0 0-1.958-.745l-3.042.265a14.608 14.608 0 0 0-7.168 2.618l-6.679-1.129a2.884 2.884 0 0 0-2.507.801l-.461.46a2.865 2.865 0 0 0-.832 2.243 2.866 2.866 0 0 0 1.156 2.095l1.981 1.464-.432.351a2.35 2.35 0 0 0-.178 3.488l.7.7-1.32.975a1.768 1.768 0 0 0-.201 2.676l4.535 4.535a1.766 1.766 0 0 0 2.676-.2l.976-1.321.7.7c.444.445 1.035.69 1.663.69.708 0 1.372-.314 1.821-.862l.361-.441 1.49 2.016a2.87 2.87 0 0 0 4.338.324l.458-.459a2.872 2.872 0 0 0 .802-2.508l-1.132-6.701a14.564 14.564 0 0 0 2.755-7.721l.149-2.524zm-21.072 3.37a1.052 1.052 0 0 1-.431-.781 1.056 1.056 0 0 1 .309-.836l.461-.46c.244-.244.588-.357.936-.299l5.073.857-3.997 3.257-2.351-1.738zm5.288 14.365l-4.539-4.491 1.539-1.135 4.099 4.098-1.099 1.528zm11.938.446l-.458.459a1.08 1.08 0 0 1-.837.311 1.055 1.055 0 0 1-.781-.432l-1.762-2.382 3.274-3.998.863 5.107c.057.341-.054.69-.299.935zm1.9-15.763a12.793 12.793 0 0 1-2.892 7.403l-5.776 7.052a.567.567 0 0 1-.818.041l-8.066-8.066a.555.555 0 0 1 .041-.819l6.949-5.662a12.828 12.828 0 0 1 7.013-2.844l3.097-.268c.167 0 .322.068.438.191.066.07.176.222.163.448l-.149 2.524zm-7.005-.192a2.912 2.912 0 0 0-.857 2.07c0 .782.305 1.517.858 2.07a2.908 2.908 0 0 0 2.07.857c.781 0 1.516-.304 2.07-.857a2.932 2.932 0 0 0-.001-4.14c-1.105-1.106-3.032-1.106-4.14 0zm2.869 2.867a1.156 1.156 0 0 1-1.595 0 1.128 1.128 0 0 1 1.594-1.594 1.13 1.13 0 0 1 .001 1.594zm-5.354 2.485l-2.979 2.979a.9.9 0 1 0 1.274 1.272l2.979-2.978a.901.901 0 0 0-1.274-1.273zM14.841 33.798a.901.901 0 0 1 1.273 1.273l-2.274 2.274a.896.896 0 0 1-.637.263.9.9 0 0 1-.636-1.536l2.274-2.274z"/>
      </svg>
    )
  }

  return (
    <svg width="33" height="33" xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path fill={color} fillRule="evenodd" d="M32.994 3.354A3.134 3.134 0 0 0 32.14.996a3.142 3.142 0 0 0-2.575-.983l-4.262.373A20.235 20.235 0 0 0 15.3 4.072L5.854 2.474A3.81 3.81 0 0 0 2.52 3.541l-.642.644A3.82 3.82 0 0 0 .77 7.172a3.823 3.823 0 0 0 1.536 2.79l2.987 2.21-.81.661a3.104 3.104 0 0 0-1.134 2.243c-.045.874.284 1.73.901 2.347L5.4 18.575l-2.042 1.51c-.534.395-.868 1.001-.917 1.664-.05.662.19 1.311.66 1.78l6.352 6.365a2.271 2.271 0 0 0 3.44-.258l1.506-2.046 1.15 1.151c.583.585 1.36.907 2.184.907.931 0 1.802-.413 2.392-1.134l.673-.822 2.245 3.041a3.807 3.807 0 0 0 5.766.43l.642-.643a3.832 3.832 0 0 0 1.066-3.34l-1.6-9.49a20.251 20.251 0 0 0 3.87-10.795l.207-3.541zM3.561 8.26a1.706 1.706 0 0 1-.19-2.581l.642-.644c.39-.39.948-.568 1.489-.477l7.554 1.278-6.073 4.957-3.422-2.533zm7.633 20.118a.158.158 0 0 1-.12.067.153.153 0 0 1-.129-.047l-6.352-6.364a.16.16 0 0 1-.047-.128.16.16 0 0 1 .066-.121l2.298-1.699 5.98 5.99-1.696 2.302zm16.764.645l-.642.645a1.702 1.702 0 0 1-2.576-.192l-2.563-3.473 4.974-6.084 1.284 7.612a1.71 1.71 0 0 1-.477 1.492zm2.723-22.253a18.175 18.175 0 0 1-4.098 10.507l-8.09 9.896a.978.978 0 0 1-.76.36.97.97 0 0 1-.692-.288L5.743 15.928a.97.97 0 0 1-.285-.744.969.969 0 0 1 .36-.71l9.732-7.945a18.147 18.147 0 0 1 9.936-4.037l4.262-.372a1.04 1.04 0 0 1 .856.326c.2.213.301.491.283.784l-.206 3.541zM3.495 28.003a1.054 1.054 0 0 1 1.493 0 1.058 1.058 0 0 1 0 1.495L1.802 32.69a1.05 1.05 0 0 1-1.493 0 1.058 1.058 0 0 1 0-1.495l3.186-3.192zm13.833-13.857l-4.173 4.18a1.058 1.058 0 0 0 .747 1.804c.27 0 .54-.103.746-.31l4.172-4.18a1.058 1.058 0 0 0 0-1.494 1.054 1.054 0 0 0-1.492 0zm6.235-8.653c-1.04 0-2.018.406-2.754 1.142a3.913 3.913 0 0 0 0 5.519 3.868 3.868 0 0 0 2.754 1.142 3.867 3.867 0 0 0 2.754-1.142 3.913 3.913 0 0 0 0-5.519 3.867 3.867 0 0 0-2.754-1.142zm1.262 5.165c-.673.675-1.85.676-2.524 0a1.793 1.793 0 0 1 0-2.527 1.771 1.771 0 0 1 1.262-.524c.477 0 .926.186 1.262.523a1.793 1.793 0 0 1 0 2.528z" />
    </svg>
  )
}
