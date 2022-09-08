import styled from 'styled-components';
   
export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1.5rem;
    background-color: hsl(0, 0%, 95%);

    @media (max-width: 768px) {
      padding: 4rem;
    }
    `;

    export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    margin-bottom: 2rem;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    `;

    export const ColumnA = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-right: 2.5rem;
    padding-top: 4rem;
    `;

    export const ColumnB = styled.div`
    flex: 1.5;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2.5rem;
    @media (max-width: 768px) {
      margin-top: 0px;
    }
    `;

    export const FooterLink = styled.a`
    &:hover {
      color: hsl(0, 0%, 30%);
      transition: 200ms ease-in;
    }
    `;
  
    export const FooterBottom = styled.div`
      width: 100%;
      border-top-width: 1px;
      border-top-color: black;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      padding-top: 1.5rem;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    `;



const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;