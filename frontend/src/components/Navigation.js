import React from "react";

export const Navigation = () => {
  return (
    <div className="sidebar">
      <ul class="side-nav">
        <li class="side-nav__item side-nav__item--active side-nav__item-home">
          <a href="index.html" class="side-nav__link">
            <i class="fa-solid fa-house side-nav__icon"></i>
            <span>Home</span>
          </a>
        </li>
        <li class="side-nav__item side-nav__item-calendar">
          <a href="html/social.html" class="side-nav__link">
            <i class="fa-solid fa-calendar-days  side-nav__icon"></i>
            <span>Social Programs calendar</span>
          </a>
        </li>
        <li class="side-nav__item side-nav__item-photoGallery">
          <a href="html/gallery.html" class="side-nav__link">
            <i class="fa-solid fa-photo-film side-nav__icon"></i>
            <span>Photo Gallery</span>
          </a>
        </li>
        <li class="side-nav__item side-nav__item-FAQ">
          <a href="html/faq.html" class="side-nav__link">
            <i class="fa-solid fa-circle-question side-nav__icon"></i>
            <span>FAQ</span>
          </a>
        </li>
        <li class="side-nav__item side-nav__item-about">
          <a href="html/about.html" class="side-nav__link">
            <i class="fa-solid fa-circle-info side-nav__icon"></i>
            <span>About</span>
          </a>
        </li>
        <li class="side-nav__item side-nav__item-contact">
          <a href="html/contact.html" class="side-nav__link">
            <i class="fa-solid fa-phone-volume side-nav__icon"></i>
            <span>Contact Us</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
