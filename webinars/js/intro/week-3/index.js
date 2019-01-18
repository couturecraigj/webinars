const locationButton = document.getElementById('location-button');
const myLocation = document.getElementById('my-location');
const webcamButton = document.getElementById('watch-webcam');
const displayButton = document.getElementById('watch-display');
const webcamContainer = document.getElementById('webcam-output-container');

const getMyLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
    myLocation.innerHTML = `<div>
    ${position.coords.latitude}, ${position.coords.longitude}
    </div>`
  })
}

locationButton.onclick = getMyLocation;

const getWebCam = () => {
  while (webcamContainer.firstChild) {
    webcamContainer.removeChild(webcamContainer.firstChild);
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')
  const snapshotButton = document.createElement('button');
  const playPauseButton = document.createElement('button');

  const video = document.createElement('video');
  webcamContainer.appendChild(video);
  
  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
  .then(stream => {
    video.srcObject = stream;
    video.play();
    snapshotButton.innerText = 'Click for Snapshot!'
    playPauseButton.innerText = 'Pause'
    snapshotButton.onclick = () => {
      canvas.width = video.offsetWidth;
      canvas.height = video.offsetHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    }
    playPauseButton.onclick = () => {
      if (video.paused) {
        video.play()
        playPauseButton.innerText = 'Pause'
      } else {
        video.pause()
        playPauseButton.innerText = 'Play'
      }
    }
    const buttonsContainer = document.createElement('div');
    buttonsContainer.appendChild(snapshotButton)
    buttonsContainer.appendChild(playPauseButton)
    webcamContainer.appendChild(buttonsContainer)
    webcamContainer.appendChild(canvas)
    
  })
  .catch(err => {
    console.error(err)
  })
}

webcamButton.onclick = getWebCam;

const getDisplay = () => {
  while (webcamContainer.firstChild) {
    webcamContainer.removeChild(webcamContainer.firstChild);
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')
  const snapshotButton = document.createElement('button');
  const playPauseButton = document.createElement('button');

  const video = document.createElement('video');
  webcamContainer.appendChild(video);
  
  navigator.mediaDevices.getDisplayMedia({ audio: false, video: true })
  .then(stream => {
    video.srcObject = stream;
    video.play();
    snapshotButton.innerText = 'Click for Snapshot!'
    playPauseButton.innerText = 'Pause'
    snapshotButton.onclick = () => {
      canvas.width = video.offsetWidth;
      canvas.height = video.offsetHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    }
    playPauseButton.onclick = () => {
      if (video.paused) {
        video.play()
        playPauseButton.innerText = 'Pause'
      } else {
        video.pause()
        playPauseButton.innerText = 'Play'
      }
    }
    const buttonsContainer = document.createElement('div');
    buttonsContainer.appendChild(snapshotButton)
    buttonsContainer.appendChild(playPauseButton)
    webcamContainer.appendChild(buttonsContainer)
    webcamContainer.appendChild(canvas)
  })
  .catch(err => {
    console.error(err)
  })
}

webcamButton.onclick = getWebCam;
displayButton.onclick = getDisplay;

