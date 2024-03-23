import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { hamburger } from './HeaderHamburger.module.css';

const HeaderHamburger = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={hamburger}>
      <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
    </div>
  );
};

export default HeaderHamburger;
