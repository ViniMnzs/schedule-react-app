/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import Content, { Heading } from './styles';

export default function Collapsible({
  visible,
  invisible,
  open = false,
}) {
  const [isOpen, setIsOpen] = useState(open);
  const Icon = isOpen ? (
    <IoIosArrowDown />
  ) : (
    <IoIosArrowUp />
  );
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  function openClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Heading onClick={openClick}>
        {visible}
        {Icon}
      </Heading>
      <Content open={isOpen}>{invisible}</Content>
    </>
  );
}
