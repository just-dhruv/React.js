import { createPortal } from "react-dom"
import PortalTest from "./PortalTest"
import { useState } from "react"
import Modal from "./Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div style={{ padding: '30px' }}>
      <h1>Application</h1>

      {/* <PortalTest /> */}
      {/* { createPortal(<h1>Portal</h1>, document.body)} */}

      <button onClick={() => setModalOpen(true)}>Show Model</button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2>Model</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos molestiae enim sed. Impedit facilis nemo provident nobis, asperiores exercitationem ex?</p>
      </Modal>

      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
