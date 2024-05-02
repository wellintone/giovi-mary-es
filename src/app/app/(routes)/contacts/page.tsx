import HeroPages from "@/components/HeroPages/HeroPages";
import ContactsImage from "/public/img/contacts.jpg";
import React from "react";
import FollowLine from "@/components/FollowLine/FollowLine";
import LetsTalk from "@/components/LetsTalk/LetsTalk";

const Contacts = () => {
  return (
    <div className="contacts">
      <HeroPages bg={ContactsImage} titlePage="Contacts" />
      <FollowLine />
      <LetsTalk />
    </div>
  );
};

export default Contacts;
