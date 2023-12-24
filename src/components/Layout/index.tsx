"use client";

import React, { FC } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { styled } from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div``;
