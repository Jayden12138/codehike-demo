import "@code-hike/mdx/styles"
import Content from "./hello.mdx"
import React from "react"

function App() {
  return (
    <div style={{ maxWidth: 768, margin: "0 auto", fontFamily: "sans-serif" }}>
      <Content />
    </div>
  )
}

export default App