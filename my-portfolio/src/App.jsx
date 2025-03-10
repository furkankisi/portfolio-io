import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Tarih ve saat bilgisini güncelleyen useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    return () => clearInterval(interval); // Bellek sızıntısını önler
  }, []);

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
                <img src="/photo.jpg" alt="" className="userPhoto" />
                <h3>Furkan Kişi</h3>
              </div>

              {/* Tarih ve Saat Alanı */}

              <div className="menu-items">
                <div className="menu-item-first">
                  <p>Internet</p>
                  <p>E-Mail</p>
                  <p>Notepad</p>
                  <p>Calculator</p>
                </div>
                <div className="menu-item-second">
                  <p>Projeler</p>
                  <p>Hakkımda</p>
                  <p>Ayarlar</p>
                  <p>Kapat</p>
                </div>
              </div>
            </div>
          )}
              <div className="datetime">
                <span className="time">{dateTime.time}</span>
                <span className="date">{dateTime.date}</span>
              </div>
        </div>
      </div>
    </>
  );
}

export default App;
