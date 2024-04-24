import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam';


function ImgCapture({onCapture}) {
    const webcamRef = useRef(null);
    const [isCaptured,setIsCaptured] = useState(false)
  
    const capturePhoto = () => {
      const imageSrc = webcamRef.current.getScreenshot();
      // Use the imageSrc for further processing or storage
      setIsCaptured(imageSrc);
    };

    const onContinue = ()=>{
      onCapture(isCaptured);
    }
   if(!isCaptured){
    return (
        <div className='flex justify-center w-full flex-col items-center'>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className='rounded-xl w-[30rem]'
          />
          <button onClick={capturePhoto} className='text-lg font-semibold px-6 py-2 bg-slate-800 text-white rounded-lg mt-10'>Capture</button>
        </div>
      );
   }else{
    return (
        <div className='flex justify-center w-full flex-col items-center'>
            <div className='rounded-xl w-[30rem] overflow-hidden'>
                <img src={isCaptured} className='w-full'/>
            </div>
            <div className='mt-10 w-full flex justify-around'>
                <button className='text-lg font-semibold px-6 py-2 bg-slate-300 text-slate-800 rounded-lg' onClick={()=>setIsCaptured(false)}>Re-Take</button>
                <button className='text-lg font-semibold px-6 py-2 bg-slate-800 text-white rounded-lg' onClick={onContinue}>Continue</button>
            </div>
        </div>
    )
   }
}

export default ImgCapture