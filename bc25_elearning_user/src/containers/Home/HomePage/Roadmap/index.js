import DrawSvg from "components/DrawSvg";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { actGetCatalogCourses } from "containers/Home/Courses/reducer/actions";

const Section = styled.section`
  min-height: 100vh;
  background-color: #14141f;
  position: relative;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  margin-top: 2rem;
  width: fit-content;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-bottom: 1px solid #e250e5;
  width: fit-content;
  margin: 1rem auto;
`;

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: #14141f;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:nth-of-type(2n) {
    justify-content: start;
    div {
      text-align: center;
      border-radius: 50px 0 50px 0;
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: end;
    div {
      text-align: center;
      border-radius: 0 50px 0 50px;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid #e250e5;
`;

const Box = styled.p`
  height: fit-content;
  background-color: #fff;
  margin-bottom: 0;
`;

const SubTitle = styled.span`
  display: block;
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: capitalize;
  color: #000;
`;

const Text = styled.span`
  display: block;
  font-size: 0.9rem;
  text-transform: capitalize;
  margin: 0.5rem 0;
  color: #000;
`;

const RoadmapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle> {title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      tl.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            markers: false,
          },
        }
      );
    });

    return () => {};
  }, []);

  const dataCatalog = useSelector((state) => state.catalogCoursesReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCatalogCourses());
  }, []);

  return (
    <Section>
      <Title>Lộ trình</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          {dataCatalog?.map((item) => {
            return (
              <RoadmapItem
                key={item.maDanhMuc}
                title={item.tenDanhMuc}
                subtext={item.tenDanhMuc}
                addToRef={addToRefs}
              />
            );
          })}
        </Items>
      </Container>
      <BtnContainer>
        <Button href="/courses" type="primary" size="large">
          Xem khóa học
        </Button>
      </BtnContainer>
    </Section>
  );
};

export default Roadmap;
