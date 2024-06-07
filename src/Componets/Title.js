import React from 'react'

const Title = ({title , titleadd , titledis}) => {
  return (
    <div
    className="w-full h-full flex flex-col items-center justify-center text-center text-black "
    style={{ background: "#FFEEA9" }}
  >
     <section id="testimonials" className="pt-20 md:pt-[120px]">
       <div className="container px-4">
         <div className="flex flex-wrap pb-4">
           <div className="w-full mx-4">
             <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
               <span className="font-semibold text-lg text-primary mb-2 block">
                 {title}
               </span>
               <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4">
                 {titleadd}
               </h2>
               <p className="text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color">
                 {titledis}
               </p>
             </div>
           </div>
         </div>
         </div>
</section>
</div>
  )
}

export default Title
