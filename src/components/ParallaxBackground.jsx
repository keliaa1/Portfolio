import React from 'react'

const ParallaxBackground = () => {
  return (
    <section className='absolute inset-0 bg-black/40 '>
        <div className='relative h-screen overflow-y-hidden'>
            {/*background */}
                <div className='absolute inset-0 w-full h-screen -z-50' style={{
                    backgroundImage: "url(public/icons/sky.jpg)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",

                }}></div>
                {/*layer 3 */}
                {/* <div className='absolute inset-0 -z-40' style={{
                    backgroundImage: "url(public/icons/mountain1-removebg-preview.png)",
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",

                }}  ></div> */}
                {/*planets */}
                <div></div>
                {/*layer2*/}
                <div></div>
                {/*layer1 */}
                <div></div>
        </div>
      
    </section>
  )
}

export default ParallaxBackground
