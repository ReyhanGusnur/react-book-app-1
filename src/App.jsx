import React, { useState } from 'react';
import "./App.css";
function App() {
  
  const [judul, setJudul] = useState('');
  const [pengarang, setPengarang] = useState('');

  const handleSubmit = () => {
    if (!judul || !pengarang) {
      alert('Form belum terisi dengan lengkap.');
      return;
    }

    alert(`Judul Buku: ${judul}\nPengarang: ${pengarang}`);
  };

  const handleBatal = () => {
    setJudul('');
    setPengarang('');
  };

  return (
    <div className="container">
      <div className='child-container'>
        <h2>Tambah Buku</h2>
        <div className="input-group">
          <label htmlFor="judul">Judul Buku</label>
          <input
            type="text"
            id="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="pengarang">Pengarang</label>
          <input
            type="text"
            id="pengarang"
            value={pengarang}
            onChange={(e) => setPengarang(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button onClick={handleSubmit}>Submit</button>
          <br></br>
          <button onClick={handleBatal}>Batalkan</button>
        </div>
      </div>
    </div>
  );
}


export default App;
