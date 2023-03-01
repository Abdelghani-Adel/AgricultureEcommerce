const Canvas = ({ img }) => {
  const canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let image = new Image();
  image.onload = () => {
    ctx.drawImage(image, 0, 0);
  };

  image.src = img;

  return <canvas id="canvas"></canvas>;
};

export default Canvas;
