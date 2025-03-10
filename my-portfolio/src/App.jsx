import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container">
        <div className="start">
          {/* Görev Çubuğu */}
          <img src="/taskbar.png" alt="" className="footer" />

          {/* Başlat Butonu */}
          <img src="/startbtn.png" alt="" className="startbtn" onClick={toggleMenu} />

          {/* Başlat Menüsü */}
          {isOpen && (
            <div className="start-menu">
              <div className="user">
                <img src="/photo.jpg" alt=""  className='userPhoto'/>
                <h3>Furkan Kişi</h3>
              </div>
              <div className='menu-items'>
                <div className='menu-item-first'>
                  <p>Internet</p>
                  <p>E-Mail</p>
                  <p>Notepad</p>
                  <p>Calculator</p>
                
                </div>
                <div className='menu-item-second'>
                  <p>Projeler</p>
                  <p>Hakkımda</p>
                  <p>Ayarlar</p>
                  <p>Kapat</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
