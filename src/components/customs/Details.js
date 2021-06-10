import React from "react";
import DetailsDataI from "../widgets/DetailsCompI";
import DetailsDataII from "../widgets/DetailsCompII";
import styled from "styled-components";

const Details = () => {
  return (
    <>
      <DetailsArea>
        <div className="container-fluid">
          <DetailsDataI
            clsName="bg_sec_1 col"
            detailsTitle="Learning that goes beyond digital"
            detailsParagraph="
                   Clothing is one of the primary needs of humans just after food
                and shelter. In modern time, textiles are not restricted to
                necessity but a statement of fashion. With the requirement of
                variation in design, a career in Textile Engineering and
                designing is increasing tremendously. Experts and professionals
                in the textile industry work with the aim to manufacture the
                best quality and durable textiles which satisfy human desires
                and needs."
            detailsBtn="Learn More"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
          />

          <DetailsDataII
            detailsTitle="Programs tailored just for your team"
            detailsParagraph="Textile engineering deals with all fiber, textile and apparel
                  processes, products and machinery. If you wish to take your
                  passions further in the textile industry, find and compare
                  degrees on educations.com today."
            detailsBtn="Learn More"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
            clsName="bg_sec_2 col"
          />

          <DetailsDataI
            clsName="bg_sec_3 col"
            detailsTitle="A role in the creative canon"
            detailsParagraph="
                  Our core fabric engineering capabilities, and in-house
                  production of wovens, integrate manufacturing with research
                  and lab verification, advanced laminating, and proprietary
                  fabric bonding."
            detailsBtn="Learn More"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
          />

          <DetailsDataII
            detailsTitle="Take control of your program"
            detailsParagraph="The U.S. textile industry is a nearly $70 billion sector when
                  measured by the value of industry shipments. It remains one of
                  the biggest parts of the manufacturing industry and is one of
                  the largest markets in the world by export value: $23 billion
                  in 2018. A textile is a flexible material made up of a network
                  of natural or artificial fibers such as yarn or thread."
            detailsBtn="See How"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
            clsName="bg_sec_4 col"
          />

          <DetailsDataI
            clsName="bg_sec_5 col"
            detailsTitle="Engagement that matters"
            detailsParagraph="
                 
                The attire you are wearing or using is a part of the textile. Or
                we can take examples of towels we use every day. That is a part
                of the textile too. And many more objects around us are part of
                the textile.Textile engineering is about designing and
                developing the process to make fabrics.In fact, you cannot think
                of a day without textiles."
            detailsBtn="Read More"
            detailsLink="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
          />
        </div>
      </DetailsArea>
    </>
  );
};

export default Details;

const DetailsArea = styled.div`
  font-family: Ubuntu;
  padding: 0px;
  h1 {
    font-family: Ubuntu;
    color: ${({ theme }) => theme.detailsHeader};
  }
  background: ${({ theme }) => theme.detailsBG};

  .details_content p {
    font-family: 16px;
    font-family: Poppins;
    color: ${({ theme }) => theme.detailsParagraph};
    padding-bottom: 20px;
    font-weight: 400;
    line-height: 1.7;
  }

  .btn {
    font-family: Ubuntu;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 25px;
    border: 2px solid #e0245e;
    -webkit-transition: all linear 0.5s;
    transition: all linear 0.5s;
    margin-top: 0px;
  }
  .btn a {
    color: #e0245e;
  }

  .btn:hover {
    background-color: #e0245e;
    border: 2px solid transparent;
  }

  .btn:hover a {
    color: #e9dddd;
  }

  .details_content hr {
    width: 20%;
    background: ${({ theme }) => theme.contentHr};
    padding: 2px;
    border-radius: 30px;
    margin-right: inherit;
    margin-left: inherit;
  }

  .bg_sec_1,
  .bg_sec_2,
  .bg_sec_3,
  .bg_sec_4,
  .bg_sec_5 {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .details_content {
    padding: 90px 100px;
  }

  .bg_sec_1 {
    background-image: url(https://cdn.pixabay.com/photo/2019/09/28/12/47/workshop-4510700_1280.jpg);
  }

  .bg_sec_2 {
    background-image: url(https://cdn.pixabay.com/photo/2018/04/14/20/12/texture-3319946_1280.jpg);
  }

  .bg_sec_3 {
    background-image: url(https://cdn.pixabay.com/photo/2014/04/05/11/21/sewing-machine-315382_1280.jpg);
  }

  .bg_sec_4 {
    background-image: url(https://cdn.pixabay.com/photo/2018/08/24/23/33/oil-3629119_1280.jpg);
  }

  .bg_sec_5 {
    background-image: url(https://cdn.pixabay.com/photo/2017/08/05/14/24/yarn-2583975_1280.jpg);
  }
  @media (max-width: 991px) {
    h1 {
      font-size: 29px;
    }
    p {
      font-size: 15px;
    }
    .details_content {
      padding: 30px;
    }
  }
  @media (max-width: 767px) {
    padding: 10px 0px;
    .details_content {
      padding: 20px;
    }
  }
`;
