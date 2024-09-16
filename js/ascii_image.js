const xhr = new XMLHttpRequest();
xhr.open("GET", "../ascii/out.json");

const wrapper = document.getElementById("ascii");

const data = null;

xhr.onload = () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    let i = 0;

    function nextFrame() {
      wrapper.innerHTML = data[i + 1];

      i = (i + 1) % (data.length - 1);

      setTimeout(nextFrame, [100]);
    }

    nextFrame();
  } else {
    console.error("Error al cargar el archivo");
  }
};
xhr.send();
