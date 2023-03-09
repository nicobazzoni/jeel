import React from "react";

const Footer = () => {
  const menu = [
    

 
   
    {
      id: 1,
      title: "Social Media",
      subMenu: [
        {
          id: 1,
          title: "Soundcloud",
          link: 'https://soundcloud.com/jeeljeeljeel',
        },
      
      ],
    },
  ];

  return (
    <div className=" p-2 space-x-2 nav-background6 items-center  h-1/2   border-white">
      <div className=" max-w-screen-xl  mx-auto">
        <div className="flex flex-col  text-center gap-12">
          {menu.map(({ id, title, subMenu }) => (
            <div key={id}>

              <ul className="mt-1">
                {subMenu.map(({ id, title, link }) => (
                  <li key={id}>
                    <a className=" text-white mr-4 hover:text-blue-500" href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="my-12 text-center text-sm text-white">
          © Copyright 2023 by JEEL. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
