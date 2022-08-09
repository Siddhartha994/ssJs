const a = navigator.mediaDevices.getDisplayMedia;
const takeScreenShot = async() => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: {mediaSource: 'screen'}
    });
    const track = stream.getVideoTracks()[0];
    const image = new ImageCapture(track);
    const bitmap = await image.grabFrame();
    track.stop();
    const canvas = document.getElementById('screenshot');
    
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    
    const context = canvas.getContext('2d');
    context.drawImage(bitmap,0,0,790,bitmap.height/2);
    const img = canvas .toDataURL();de

    const res = await fetch(img);
    const buff = await res.arrayBuffer();

    const file = [
        new File([buff],'photo_$(new Date()}.jpg',{
            type: 'image/jpeg'
        })
    ];
    return file;
};
const button = document.getElementById('btn').onclick= () => a ? takeScreenShot() : {};