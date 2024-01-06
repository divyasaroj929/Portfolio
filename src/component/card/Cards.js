import React, { useEffect } from "react";
import Button from "../All-page/Button ";
const Cards = ({ data }) => {
  console.log(data);
  // //   useEffect(() => {

  // //     let work_card_container = document.querySelectorAll(".work_card_container");

  // //     let scrollOption = {
  // //       threshold: 0.3,
  // //       root: null,
  // //       rootMargin: "0px 0px 0px 0px",
  // //     };
  // //     let appearOnScroll = new IntersectionObserver(revealCard, scrollOption);

  // //     work_card_container.forEach((work_card_container) => {
  // //       appearOnScroll.observe(work_card_container);
  // //     });
  // //     if (window.innerWidth < 769) {
  // //       let cardNumber = document.querySelectorAll(".card_number");
  // //       let scrollOptionForCardNumber = {
  // //         threshold: 0.9,
  // //         root: null,
  // //         rootMargin: "0px 0px 0px 0px",
  // //       };
  // //       let appearCardNumberOnScroll = new IntersectionObserver(
  // //         revealCardNumber,
  // //         scrollOptionForCardNumber
  // //       );

  // //       cardNumber.forEach((cardNumber) => {
  // //         appearCardNumberOnScroll.observe(cardNumber);
  // //       });
  // //     }
  // //   }, []);
  // //   const { cardData } = props;
  // //   const revealCard = (entries, appearOnScroll) => {
  // //     entries.forEach((entry) => {
  // //       if (entry.isIntersecting) {
  // //         entry.target.classList.add("reveal");
  // //         appearOnScroll.unobserve(entry.target);
  // //       }
  // //     });
  // //   };
  // // const revealCardNumber = (entries, appearCardNumberOnScroll) => {
  // //   entries.forEach((entry) => {
  // //     if (entry.isIntersecting) {
  // //       // console.log("reveal");
  // //       entry.target.classList.add("reveal_card_number");
  // //     } else {
  // //       // console.log("elseReveal");
  // //       entry.target.classList.remove("reveal_card_number");
  // //     }
  // //   });
  // // };

  // //   const cardData = [
  // //     {
  // //       cardData: leaf,
  // //       cardTitle: "Form",
  // //       cardSubTitle: " login Form",
  // //       cardLink: "",
  // //     },
  // //   ];
  // return (
  //   <>
  //     <div className="work_card_container h-full w-full relative bg-orange-200  ">
  //       <div className="work_card_wrapper  bg-red-700">
  //         {Data.map((data, index) => {
  //           return (
  //             <>
  //               <div className="card_wrapper  bg-amber-400 ">
  //                 <div className="card bg-gray-90">
  //                   <img src={data.cardData} alt="" />
  //                 </div>
  //                 <div className="card_text_section">
  //                   <h2 className="title">{data.cardTitle}</h2>
  //                   <h3 className="subtitle">{data.cardSubTitle}</h3>
  //                   <a href={data.cardLink} target="_blank">
  //                     <Button name="visit site" />
  //                   </a>
  //                 </div>
  //               </div>
  //             </>
  //           );
  //         })}

  //         {/* <div
  //             className="card"
  //             style={{
  //               backgroundImage: `url(${cardData.cardData})`,
  //             }}
  //           ></div>
  //           <div className="card_text_section">
  //             <h2 className="title">{cardData.cardTitle}</h2>
  //             <h3 className="subtitle">{cardData.cardSubTitle}</h3>
  //             <a href={cardData.cardLink} target="_blank">
  //               <Button name="visit site" />
  //             </a>
  //           </div> */}
  //         {/* <div className="card_number">{cardData.cardNumber}</div> */}
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div>
        <div>
          <div className="card_wrapper  bg-amber-400 ">
            <div className="card bg-gray-90">
              <img src={data.img} alt="" />
            </div>
            <div className="card_text_section">
              <h2 className="title">{data.cardTitle}</h2>
              <h3 className="subtitle">{data.cardSubTitle}</h3>
              <a href={data.cardLink} target="_blank">
                <Button name="visit site" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
